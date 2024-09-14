let botaoCard = document.querySelectorAll('a');
let divCarrinho = document.querySelector('#carrinhoDeCompras');
let arrayProdutos = [];
let valorTotal = 0;

botaoCard.forEach((botao) =>{
    botao.setAttribute("onclick", "armazenarValores(this)")
    botao.addEventListener('click', (e)=>{
        e.preventDefault;
    })
})

function armazenarValores(item){
    let cardAtual = item.closest('.card');
    let nomeProduto = cardAtual.querySelector('.card-title').textContent;
    let valorProduto = Number(cardAtual.querySelector('.card-text').textContent);
    let quantidadeProduto = Number(cardAtual.querySelector('.text-quantidade').value);

    const objProduto  = {
        nome: nomeProduto,
        valor: valorProduto,
        quantidade: quantidadeProduto,
        valorTotal: valorProduto * quantidadeProduto
    }

    InserirProduto(objProduto,cardAtual);
    listarItems();
    // calcularTotal();

}

function InserirProduto(objProduto, cardAtual)
{
    let quantidade = cardAtual.querySelector('.text-quantidade');
    const existeNoArray = arrayProdutos.find((produto) => objProduto.nome === produto.nome);
    const i = arrayProdutos.findIndex((produto) => objProduto.nome === produto.nome);
 
    // console.log(i)
    if(existeNoArray){
        // objProduto.quantidade >= 1 ? arrayProdutos[i] = objProduto : alert("adicione ao menos uma quantidade do produto que deseja")("Erro");
        // arrayProdutos[i] = objProduto
        arrayProdutos[i].quantidade += Number(quantidade.value)          
        quantidade.value = "";
    }
    else{
        objProduto.quantidade >= 1 ? arrayProdutos.push(objProduto) : alert("Adicione ao menos uma quantiade do produto");
        quantidade.value = "";
        
    }

   
}

function listarItems(){
        
    divCarrinho.innerHTML = "";
    arrayProdutos.forEach((produto) =>{
        divCarrinho.innerHTML += `<div class="col-3">
            <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${produto.nome}</h5>
                  <p class="card-text">${produto.valor}</p>
                  <p class="card-text">Quantidade: ${produto.quantidade}</p>
                  <p class="card-text">Valor Total: ${produto.valor * produto.quantidade }</p>
                  <a href="#" class="btn btn-danger" onclick="excluirItem(this)">Excluir</a>
                </div>
              </div>
        </div>`

    })
}

function calcularTotal(){

    let total = 0;
    let h2total = document.querySelector('#totalCompra')


    for(let produto of arrayProdutos){
        total += produto.valorTotal;
    }

    h2total.innerHTML = `Valor total da compra: R$${total},00`;
    
}

function excluirItem(item){

    let card = item.closest('.card');
    let nomeProduto = card.querySelector('.card-title').textContent;

    arrayProdutos = arrayProdutos.filter((objProduto) => objProduto.nome != nomeProduto);
    listarItems();
    calcularTotal();

}