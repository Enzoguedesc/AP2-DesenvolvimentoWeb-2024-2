
const container = document.getElementById('container');

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const trataClick = ( e ) => {
    const id = e.currentTarget.dataset.id;
    const artigo = e.currentTarget;

    //cookie
    document.cookie = `id=${id}`
    document.cookie = `nome=${artigo.dataset.nome}`
    document.cookie = `imagem=${artigo.dataset.caminhoImagem}`


    //session
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('nome', artigo.dataset.nome);
    sessionStorage.setItem('atleta', JSON.stringify(artigo.dataset));

    //local
    localStorage.setItem('id', id);


    window.location = `outra.html?id=${id}`;
}

const montaCartao = (atleta) => {
    const cartao = document.createElement('article');
    const nome = document.createElement('h1');
    const imagem = document.createElement('img');

    const link = document.createElement('a');

    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);


    link.innerHTML = "Saiba mais"
    link.href = `outra.html?id=${atleta.id};`
    cartao.appendChild(link);

    cartao.onclick = trataClick;

    cartao.dataset.id = atleta.id;
    cartao.dataset.nome = atleta.nome;
    cartao.dataset.caminhoImagem = atleta.imagem;

    container.appendChild(cartao);
}

pega_json("https://botafogo-atletas.mange.li/2024-1/all").then(
    ( obj ) => {
        console.log('isso imprime depois');
        obj.forEach( (elemento) => montaCartao(elemento));
    }
)
console.log('isso imprime antes');




document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');

document.getElementsById('header');

  const hasPassword = localStorage.getItem('logado');
  if (!hasPassword) {
    alert('Não foi possível completar a operação. Faça login primeiro.');
    window.location.href = 'index.html';
  }

  if (!window.resizeEventListenerAdded) {
    window.addEventListener('resize', () => {
      adjustLayout(main);
    });
    window.resizeEventListenerAdded = true;
  }

  adjustLayout(main);
});









/*
const url = 'https://botafogo-atletas.mange.li/2024-1/all';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');

document.getElementsById('header');

  const hasPassword = localStorage.getItem('logado');
  if (!hasPassword) {
    alert('Não foi possível completar a operação. Faça login primeiro.');
    window.location.href = 'index.html';
  }

  if (!window.resizeEventListenerAdded) {
    window.addEventListener('resize', () => {
      adjustLayout(main);
    });
    window.resizeEventListenerAdded = true;
  }

  adjustLayout(main);
});

const adjustLayout = (main) => {
  const windowWidth = window.innerWidth;
  const filtro = document.getElementById('filtro');

  if (windowWidth <= 768) {
    setSingleColumnLayout(main);
    initializeButtons(filtro, 'select');
  } else if (windowWidth <= 1024) {
    setTwoColumnsLayout(main);
    initializeButtons(filtro, 'buttons');
  } else {
    setFourColumnsLayout(main);
    initializeButtons(filtro, 'buttons');
  }
};

const setSingleColumnLayout = (main) => {
  main.style.display = 'grid';
  main.style.gridTemplateColumns = '1fr';
};

const setTwoColumnsLayout = (main) => {
  main.style.display = 'grid';
  main.style.gridTemplateColumns = 'repeat(2, 1fr)';
  main.style.maxWidth = '1024px';
};

const setFourColumnsLayout = (main) => {
  main.style.display = 'grid';
  main.style.gridTemplateColumns = 'repeat(4, 1fr)';
  main.style.maxWidth = '1200px';
  main.style.textAlign = 'center';
  main.style.margin = 'auto';
};


const initializeButtons = (container, type) => {

  container.innerHTML = '';

  if (type === 'select') {
    const select = document.createElement('select');
    select.style.fontSize = '17px';
    select.style.backgroundColor = '#212121';
    select.style.color = '#f1f1f1';
    select.style.padding = '12px';
    select.style.margin = '20px';
    select.onchange = () => {
      const selectedOption = select.options[select.selectedIndex].value;
      if (selectedOption !== '') {
        fetchAndCreateCards(`${url}/${selectedOption}`);
      } else {
        console.log('Selecione uma opção válida');
      }

    };


    const options = [
      { value: '', text: 'Selecione um elenco' },
      { value: 'feminino', text: 'Feminino' },
      { value: 'masculino', text: 'Masculino' },
      { value: 'all', text: 'Elenco Completo' },
    ];
    options.forEach((option) => {
      const opt = document.createElement('option');
      opt.value = option.value;
      opt.text = option.text;
      select.appendChild(opt);
    });

    container.appendChild(select);
  } else if (type === 'buttons') {
    createButton('Feminino', `${url}/feminino`, container);
    createButton('Masculino', `${url}/masculino`, container);
    createButton('Elenco Completo', `${url}/all`, container);
  }
};

  const button = document.getElementById('button-elenco');
  button.onclick = () => fetchAndCreateCards(url);



const loadingElements = document.querySelector('p');
loadingElements.style.display = 'none';

const fetchAndCreateCards = async (url) => {

  const loadingElements = document.getElementById('p-carregando');
  loadingElements.textContent = 'Carrengando...';
  loadingElements.style.display = 'block';
  loadingElements.style.textAlign = 'center';

    try {
      const data = await pega_json(url);
      const main = document.querySelector('main');

      main.innerHTML = '';

      for (const atleta of data) {
        cria_cartao(atleta);
      }

  } finally {
    loadingElements.style.display = 'none';
  }
}

const pega_json = async (caminho) => {
  const resposta = await fetch(caminho);
  const dados = await resposta.json();
  return dados;
}

const cria_cartao = (entrada) => {

  const main = document.querySelector('main');

  const container_atleta = document.createElement('article');
  container_atleta.classList = 'container';
  container_atleta.style.width = '245px';
  container_atleta.style.height = '450px'
  container_atleta.style.backgroundColor = '#9E9E9E';
  container_atleta.style.textAlign = 'center';
  container_atleta.style.margin = '10px auto 10px auto';
  container_atleta.style.borderRadius = '3px';

  container_atleta.dataset.id = entrada.id;
  container_atleta.dataset.altura = entrada.altura;
  container_atleta.dataset.nome_completo = entrada.nome_completo;
  container_atleta.dataset.nascimento = entrada.nascimento;
  container_atleta.dataset.descricao = entrada.descricao;

  const titulo = document.createElement('h3');
  titulo.innerHTML = entrada.nome;
  const imagem = document.createElement('img');
  imagem.src = entrada.imagem;
  imagem.alt = `foto de ${entrada.nome}`;
  imagem.style.margin = '0px 0px 8px 0px';

  const saiba_mais = document.createElement('button');
  saiba_mais.textContent = 'Saiba mais...';
  saiba_mais.style.fontWeight ='bold'
  saiba_mais.style.backgroundColor = '#D9D9D9';
  saiba_mais.style.padding = '6px 25px';
  saiba_mais.style.borderRadius = '5px';
  saiba_mais.onclick = manipulaClick;

  container_atleta.appendChild(titulo);
  container_atleta.appendChild(imagem);
  container_atleta.appendChild(saiba_mais);

  main.appendChild(container_atleta);

}

const manipulaClick = (e) => {
  const artigo = e.target.closest('article');

  document.cookie = `id=${artigo.dataset.id}`;
  document.cookie = `altura=${artigo.dataset.altura}`;
  document.cookie = `nome_completo=${artigo.dataset.nome_completo}`;
  document.cookie = `nascimento=${artigo.dataset.nascimento}`;
  document.cookie = `descricao=${artigo.dataset.descricao}`

  localStorage.setItem('id', artigo.dataset.id);
  localStorage.setItem('altura', artigo.dataset.altura);
  localStorage.setItem('nome_completo', artigo.dataset.nome_completo);
  localStorage.setItem('nascimento', artigo.dataset.nascimento);
  localStorage.setItem('descricao', artigo.dataset.descricao)
  localStorage.setItem('hasPassword', 'true');

  window.location = `outra.html?id=${artigo.dataset.id}`;
}

const acha_cookie = (chave) => {
  const lista_de_cookies = document.cookie.split("; ");
  const procurado = lista_de_cookies.find(
    (e)=> e.startsWith(chave));
  return procurado.split('=')[1];
}
*/