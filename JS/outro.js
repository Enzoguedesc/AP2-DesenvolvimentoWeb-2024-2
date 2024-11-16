const params = new URLSearchParams(window.location.search);

const id = params.get('id');

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const acha_cookie = (chave) => {
    const array_cookies = document.cookie.split('; ')
    const procurado = array_cookies.find(
        ( ele ) => ele.startsWith(`${chave}=`)
    )

    return procurado.split('=')[1];
}


console.log(acha_cookie('nome'));

console.log(sessionStorage.getItem('nome'));

const obj = JSON.parse(sessionStorage.getItem('atleta'));

console.log(obj.caminhoImagem);



if (sessionStorage.getItem("logado")){
pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
    ( atleta ) => {

        document.body.innerHTML = '';



        const nome = document.createElement('h1');
        nome.innerHTML = atleta.nome;

        document.body.appendChild(nome);



        const posicao = document.createElement('h2');
        posicao.innerHTML = atleta.posicao;

        document.body.appendChild(posicao);




        const imagem = document.createElement('img');
        imagem.src = atleta.imagem;
        imagem.alt = `foto de ${atleta.imagem}`

        document.body.appendChild(imagem);



        const nascimento = document.createElement('p');
        nascimento.innerHTML = atleta.nascimento;

        document.body.appendChild(nascimento);



        const naturalidade = document.createElement('p');
        naturalidade.innerHTML = atleta.naturalidade;

        document.body.appendChild(naturalidade);



        const detalhes = document.createElement('p');
        detalhes.innerHTML = atleta.detalhes;

        document.body.appendChild(detalhes);


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