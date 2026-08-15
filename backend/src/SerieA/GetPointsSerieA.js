import puppeteer from "puppeteer"

export let pointsResultA;

export default function PointsTesteA() {
  let inicio = new Date() //pegando o milissegundo inicial para calcular a demora no fim
  puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox', '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36']}).then(async browser => { //abrindo o browser

    const page = await browser.newPage() //abrindo uma nova página
    await page.setRequestInterception(true) //habilitando a interceptação de requisições
  
    page.on('request', (interceptedRequest) => {
      let irUrl = interceptedRequest.url()
      if (irUrl.endsWith('.png') || //abortando todas essas requisições para 
          irUrl.endsWith('.jpg') || //a página carregar mais rápido
          irUrl.endsWith('.css'))
        interceptedRequest.abort()
      else
        interceptedRequest.continue()
    })
  
    
    await page.goto('https://ge.globo.com/futebol/brasileirao-serie-a/', {timeout: 30000});
    
    pointsResultA = await page.evaluate(() => {
        const tabelaPontos = []

          
        $('table.tabela__pontos tr.classificacao__tabela--linha').each((i, item) => {
         


          let pointsTable = {
            pontos: $(item).find('td.classificacao__pontos').map((i, el) => $(el).text().trim()).get()[0],
            jogos:  $(item).find('td.classificacao__pontos').map((i, el) => $(el).text().trim()).get()[1],
            vitorias: $(item).find('td.classificacao__pontos').map((i, el) => $(el).text().trim()).get()[2],
            sg: $(item).find('td.classificacao__pontos').map((i, el) => $(el).text().trim()).get()[7]
          }
            
          tabelaPontos.push(pointsTable)
          
          
          
        })  

       

        return tabelaPontos
    })
  
    await browser.close() //fechando o browser
    let final = new Date() //pegando o milissegundo final para calcular a demora
    let tempo = final.getTime() - inicio.getTime() //quanto tempo demorou todo processo
    console.log(pointsResultA) 
    console.log(tempo + ' milissegundos')
  
  })
  
}