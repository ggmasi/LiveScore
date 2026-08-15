import puppeteer from "puppeteer"

export let tableResultB;

export default function TableTesteB() {
  let inicio = new Date() //pegando o milissegundo inicial para calcular a demora no fim
  puppeteer.launch({headless: true, defaultViewport: null, args: ['--no-sandbox', '--disable-setuid-sandbox', '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36']}).then(async browser => { //abrindo o browser

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
  
    
    await page.goto('https://ge.globo.com/futebol/brasileirao-serie-b/', {timeout: 30000});
    

    tableResultB = await page.evaluate(() => {
        const tabelaNome = []
       
      

     
        $('tr.classificacao__tabela--linha').each((i, item) => {
            let nameTable = {
              time: $(item).find('strong.classificacao__equipes--nome').text(),
              
            }
            
            
            tabelaNome.push(nameTable)
            if(tabelaNome.length > 20){
              tabelaNome.pop()
            }
          })
          
        

          return tabelaNome
    })
  
    await browser.close() //fechando o browser
    let final = new Date() //pegando o milissegundo final para calcular a demora
    let tempo = final.getTime() - inicio.getTime() //quanto tempo demorou todo processo
    console.log(tableResultB) 
    console.log(tempo + ' milissegundos')
  
  })
  
}