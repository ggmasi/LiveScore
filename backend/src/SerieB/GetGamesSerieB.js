import puppeteer from "puppeteer"

export let resultB;

export default function TesteB() {
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
  
    
    await page.goto('https://ge.globo.com/futebol/brasileirao-serie-b/', {timeout: 30000});
    

    resultB = await page.evaluate(() => {
      const jogos = []
      
      

      $('a.jogo__transmissao--link').each((i, item) => { //para cada jogo, pegue os nomes dos dois times
        let obj = {
            mandante: $(item).find('.equipes__escudo--mandante').attr('title'),
            imgmandante: $(item).find('.equipes__escudo--mandante').attr('src'),
            visitante: $(item).find('.equipes__escudo--visitante').attr('title'),
            imgvisitante: $(item).find('.equipes__escudo--visitante').attr('src'),
            infos: $(item).find('.jogo__informacoes').text(),
            data: $(item).find('.jogo__informacoes--data').text(),
            local: $(item).find('.jogo__informacoes--local').text(),
            hora: $(item).find('.jogo__informacoes--hora').text(),
            gol_mandante: $(item).find('.placar-box__valor--mandante').text(),
            gol_visitante: $(item).find('.placar-box__valor--visitante').text(),
            live: $(item).find('.jogo__transmissao--text').text()
        }
        if(obj.live == "veja como foi"){
            obj.live = "ENCERRADO"
        }
        if(obj.live == "acompanhe em tempo real"){
            obj.live = "EM ANDAMENTO"
        }
        jogos.push(obj)
        
    })
      $('div.jogo__transmissao--link').each((i, item) => { //para cada jogo, pegue os nomes dos dois times
          let obj = {
              mandante: $(item).find('.equipes__escudo--mandante').attr('title'),
              imgmandante: $(item).find('.equipes__escudo--mandante').attr('src'),
              visitante: $(item).find('.equipes__escudo--visitante').attr('title'),
              imgvisitante: $(item).find('.equipes__escudo--visitante').attr('src'),
              infos: $(item).find('.jogo__informacoes').text(),
              data: $(item).find('.jogo__informacoes--data').text(),
              local: $(item).find('.jogo__informacoes--local').text(),
              hora: $(item).find('.jogo__informacoes--hora').text(),
              gol_mandante: $(item).find('.placar-box__valor--mandante').text(),
              gol_visitante: $(item).find('.placar-box__valor--visitante').text(),
              live: "AGUARDANDO INÍCIO"
          }
          if(obj.data == '  '){
            obj.data = "A DEFINIR"
          }
          if(obj.hora == '  '){
            obj.hora = "A DEFINIR"
          }
          if(obj.live == "AGUARDANDO INÍCIO"){
            obj.live = obj.hora
          }
          
          jogos.push(obj)
      })
      return jogos
    })
  
    await browser.close() //fechando o browser
    let final = new Date() //pegando o milissegundo final para calcular a demora
    let tempo = final.getTime() - inicio.getTime() //quanto tempo demorou todo processo
    console.log(resultB) 
    console.log(tempo + ' milissegundos')
  
  })
  
}

