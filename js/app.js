//Adicionar um elemento na lista
const btnElement = document.querySelector('#botao');

btnElement.onclick = function adicionarTarefa(){
  const textInput = document.querySelector('input');
  const texto = textInput.value;

  let ulElement = document.querySelector('#lista'); 
  let liElement = document.createElement('li');
  const textElement = document.createTextNode(texto);
  const excluirTextElement = document.createTextNode("Excluir");

   
  let aElement = document.createElement('a');
  aElement.setAttribute('href', '#');
  aElement.setAttribute('title', 'Excluir');
  aElement.appendChild(excluirTextElement);

  liElement.setAttribute('class', 'item');
  liElement.appendChild(textElement);
  liElement.appendChild(aElement);

  ulElement.appendChild(liElement);

  //      <li class="item" id="1">Item 1<a href="#">Excluir</a></li>

}