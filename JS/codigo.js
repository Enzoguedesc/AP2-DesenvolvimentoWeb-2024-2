
const container = document.getElementById('container');


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))


const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}


const trataClick = ( e ) => {
    const id = e.currentTarget.dataset.id;
    window.location = `outro.html?id=${id}`;
}


const montaCartao = (atleta) => {
    const cartao = document.createElement('article');
    cartao.id = "article_jogadores";
    const nome = document.createElement('h1');
    const imagem = document.createElement('img');


    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);


    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);


    const saiba_mais = document.createElement('h3');
    saiba_mais.id = "saiba_mais"
    saiba_mais.innerHTML = "Saiba mais"
    cartao.appendChild(saiba_mais);


    cartao.onclick = trataClick;


    cartao.dataset.id = atleta.id;
    cartao.dataset.nome = atleta.nome;
    cartao.dataset.caminhoImagem = atleta.imagem;

    return cartao ;
}


document.getElementById("masculino").onclick =function () { pega_json("https://botafogo-atletas.mange.li/2024-1/masculino").then(
  async (obj) => {
      document.getElementById("container").innerHTML = "";
      const jogadores = obj;
      localStorage.setItem('elenco', 'masculino');
      console.log(jogadores);
      const carregando = document.createElement('h2');
      carregando.innerHTML = `Carregando...`;
      carregando.id = `carregando`;
      document.body.appendChild(carregando);
      await sleep(1200);
      document.getElementById("container").innerHTML = '';
      jogadores.forEach(
        (ele) => document.getElementById("container").appendChild(montaCartao(ele))
      )
      document.getElementById('carregando').remove();
  }
);}

document.getElementById("feminino").onclick =function () { pega_json("https://botafogo-atletas.mange.li/2024-1/feminino").then(
  async (obj) => {
      document.getElementById("container").innerHTML = "";
      const jogadores = obj;
      localStorage.setItem('elenco', 'feminino');
      console.log(jogadores);
      const carregando = document.createElement('h2');
      carregando.innerHTML = `Carregando...`;
      carregando.id = `carregando`;
      document.body.appendChild(carregando);
      await sleep(1200);
      document.getElementById("container").innerHTML = '';
      jogadores.forEach(
        (ele) => document.getElementById("container").appendChild(montaCartao(ele))
      )
      document.getElementById('carregando').remove();
  }
);}

document.getElementById("all").onclick =function () { pega_json("https://botafogo-atletas.mange.li/2024-1/all").then(
  async (obj) => {
      document.getElementById("container").innerHTML = "";
      const jogadores = obj;
      localStorage.setItem('elenco', 'all');
      console.log(jogadores);
      const carregando = document.createElement('h2');
      carregando.innerHTML = `Carregando...`;
      carregando.id = `carregando`;
      document.body.appendChild(carregando);
      await sleep(1200);
      document.getElementById("container").innerHTML = '';
      jogadores.forEach(
        (ele) => document.getElementById("container").appendChild(montaCartao(ele))
      )
      document.getElementById('carregando').remove();
  }
);}



document.getElementById('barra_pesquisa').oninput = function () {
    if (localStorage.getItem('elenco') == 'masculino'){
      pega_json("https://botafogo-atletas.mange.li/2024-1/masculino").then(
        async (obj) => {
          document.getElementById('container').innerHTML = '';
          obj.forEach(
            (ele) => {
              if (ele.nome.toLowerCase().includes(document.getElementById('barra_pesquisa').value.toLowerCase())){
                document.getElementById('container').appendChild(montaCartao(ele))
              }
              else{
                return;
              }
            }
          )
        }
      );
    }
    else if (localStorage.getItem('elenco') == 'feminino'){
      pega_json("https://botafogo-atletas.mange.li/2024-1/feminino").then(
        async (obj) => {
          document.getElementById('container').innerHTML = '';
          obj.forEach(
            (ele) => {
              if (ele.nome.toLowerCase().includes(document.getElementById('barra_pesquisa').value.toLowerCase())){
                document.getElementById('container').appendChild(montaCartao(ele))
              }
              else{
                return;
              }
            }
          )
        }
      );
    }
    else if (localStorage.getItem('elenco') == 'all'){
      pega_json("https://botafogo-atletas.mange.li/2024-1/all").then(
        async (obj) => {
          document.getElementById('container').innerHTML = '';
          obj.forEach(
            (ele) => {
              if (ele.nome.toLowerCase().includes(document.getElementById('barra_pesquisa').value.toLowerCase())){
                document.getElementById('container').appendChild(montaCartao(ele))
              }
              else{
                return;
              }
            }
          )
        }
      )
    }
  }

document.getElementById('button-elenco').onchange =function (){
  if(document.getElementById('button-elenco').value == 'masculino'){
    pega_json("https://botafogo-atletas.mange.li/2024-1/masculino").then(
      async (obj) => {
          document.getElementById("container").innerHTML = "";
          const jogadores = obj;
          localStorage.setItem('elenco', 'masculino');
          console.log(jogadores);
          const carregando = document.createElement('h2');
          carregando.innerHTML = `Carregando...`;
          carregando.id = `carregando`;
          document.body.appendChild(carregando);
          await sleep(1200);
          document.getElementById("container").innerHTML = '';
          jogadores.forEach(
            (ele) => document.getElementById("container").appendChild(montaCartao(ele))
          )
          document.getElementById('carregando').remove();
      }
    );
  }
  else if(document.getElementById('button-elenco').value == 'feminino'){
    pega_json("https://botafogo-atletas.mange.li/2024-1/feminino").then(
      async (obj) => {
          document.getElementById("container").innerHTML = "";
          const jogadores = obj;
          localStorage.setItem('elenco', 'feminino');
          console.log(jogadores);
          const carregando = document.createElement('h2');
          carregando.innerHTML = `Carregando...`;
          carregando.id = `carregando`;
          document.body.appendChild(carregando);
          await sleep(1200);
          document.getElementById("container").innerHTML = '';
          jogadores.forEach(
            (ele) => document.getElementById("container").appendChild(montaCartao(ele))
          )
          document.getElementById('carregando').remove();
      }
    );
  }
  else if(document.getElementById('button-elenco').value == 'all'){
    pega_json("https://botafogo-atletas.mange.li/2024-1/all").then(
      async (obj) => {
          document.getElementById("container").innerHTML = "";
          const jogadores = obj;
          localStorage.setItem('elenco', 'all');
          console.log(jogadores);
          const carregando = document.createElement('h2');
          carregando.innerHTML = `Carregando...`;
          carregando.id = `carregando`;
          document.body.appendChild(carregando);
          await sleep(1200);
          document.getElementById("container").innerHTML = '';
          jogadores.forEach(
            (ele) => document.getElementById("container").appendChild(montaCartao(ele))
          )
          document.getElementById('carregando').remove();
      }
    );
  }
}