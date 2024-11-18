const params = new URLSearchParams(window.location.search);

const id = params.get('id');

const mostrarErro = (mensagem) => {
  const detalhesContainer = document.getElementById('foto');
  const mensagemErro = document.createElement('p');
  mensagemErro.textContent = mensagem;
  mensagemErro.style.color = 'black';
  detalhesContainer.appendChild(mensagemErro);
};


const pega_json = async (caminho) => {
  try {
    const resposta = await fetch(caminho);
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();
    console.log("Dados do servidor:", dados);

    return dados;

  } catch (error) {
    console.error("Erro ao obter dados:", error);
    return null;
  }
}



if (localStorage.getItem("logado")){
pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
    ( atleta ) => {

      if (atleta === null){
        document.body.innerHTML = `<h1>Erro!</h1>`
        return;
      }
      else{

            const container_01 = document.createElement('article');
            container_01.id = "container_01";

            const container_02 = document.createElement('div');
            container_02.id = "container_02";

            const nome = document.createElement('h1');
            nome.innerHTML = atleta.nome;
            container_02.appendChild(nome);

            const posicao = document.createElement('h2');
            posicao.innerHTML = atleta.posicao;
            container_02.appendChild(posicao);

            const imagem = document.createElement('img');
            imagem.src = atleta.imagem;
            imagem.alt = `foto de ${atleta.imagem}`
            container_02.appendChild(imagem);

            container_01.appendChild(container_02);


            const container_03 = document.createElement('div');
            container_03.id = "container_03";

            const detalhes = document.createElement('p');
            detalhes.innerHTML = atleta.detalhes;
            container_03.appendChild(detalhes);


            const informacoes = document.createElement('p');
            informacoes.innerHTML = `<strong>Jogos pelo Botafogo:</strong> ${atleta.n_jogos} <br/> <strong>Nascimento:</strong> ${atleta.nascimento} <br/> <strong>Altura:</strong> ${atleta.altura} <br/> <strong>Nacionalidade:</strong> ${atleta.naturalidade}`;
            container_03.appendChild(informacoes);

            container_01.appendChild(container_03);


            const voltar = document.createElement("a");
            voltar.id = "voltar-button"
            voltar.href = "jogadores.html";
            voltar.innerHTML = "Voltar"


            document.body.appendChild(container_01);
            document.body.appendChild(voltar);
          }
      }
  )
} else {
    document.body.innerHTML = "<h1 id='e_preciso_logar'>É preciso estar logado para ver. </h1>"
}






/*
const exibir = (dados) => {
  const detalhesImagem = document.createElement("img");
  detalhesImagem.src = dados.imagem;
  detalhesImagem.alt = `foto de ${dados.nome}`;

  const detalhesContainer = document.getElementById('foto');
  detalhesContainer.appendChild(detalhesImagem);
};

const mostrarErro = (mensagem) => {
  const detalhesContainer = document.getElementById('foto');
  const mensagemErro = document.createElement('p');
  mensagemErro.textContent = mensagem;
  mensagemErro.style.color = 'black';
  detalhesContainer.appendChild(mensagemErro);
};

const obter = async () => {
  const endpoint = `https://botafogo-atletas.mange.li/2024-1/${localStorage.getItem('id')}`;

  try {
    const resposta = await fetch(endpoint);
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();
    console.log("Dados do servidor:", dados);

    exibir(dados);
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    mostrarErro("Erro ao obter dados. Tente novamente mais tarde.");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const hasPassword = localStorage.getItem('hasPassword');
  if (!hasPassword) {
    alert('Não foi possível completar a operação. Faça login primeiro.');
    window.location.href = 'index.html';
  }
  obter();
});

const perfil_jogador = () => {
  const detalhes_div = document.getElementById('informacoes');

  detalhes_div.innerHTML = `
    <p>Nome do(a) jogador(a): ${localStorage.getItem('nome')}</p>
    <p>Nascimento: ${localStorage.getItem('nascimento')}</p>
    <p>Altura: ${localStorage.getItem('altura')}</p>
    <p>Descrição: ${localStorage.getItem('descricao')}</p>
  `;
};

perfil_jogador();

const voltar = () => {
  const exit = document.querySelector('footer');

  const sai = document.getElementById('voltar-button');
  sai.href = 'jogadores.html';
  sai.textContent = 'Voltar';
  sai.style.color = '#f1f1f1';
  sai.style.textDecoration = 'none';
  sai.style.fontSize = '16px';
  sai.style.fontWeight = 'bold';
  sai.style.backgroundColor = '#212121';
  sai.style.padding = '10px';
  sai.style.borderRadius = '4px';
  sai.style.margin = '47%';

  exit.appendChild(exit);
};

voltar();
*/