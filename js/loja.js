let botaoCard = document.querySelectorAll('.card a');
let divCarrinho = document.querySelector('#produtos-carrinho');
let h4Total = document.querySelector('#carrinho-compras h4')
let arrayProdutos = [];

botaoCard.forEach((botao) =>{
    botao.setAttribute("onclick", "armazenarValores(this)");
    botao.addEventListener('click', (e)=>{
        e.preventDefault();
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
    }

    InserirProduto(objProduto, cardAtual);
    listarItems();
    calcularTotal();

}

function InserirProduto(objProduto, card)
{
    let inputQuantidade = card.querySelector('.text-quantidade');
    const existeNoArray = arrayProdutos.find((produto) => objProduto.nome === produto.nome);
    const i = arrayProdutos.findIndex((produto) => objProduto.nome === produto.nome);

    if(existeNoArray){
          arrayProdutos[i].quantidade += objProduto.quantidade;
          inputQuantidade.value = "";
        }
    else{

        if(objProduto.quantidade >= 1){
            arrayProdutos.push(objProduto);
            inputQuantidade.value =  "";
            alert("Produto adicionado ao Carrinho");
        }
        else{
            alert("Insira o menos uma quantiade do produto para prosseguir");
            inputQuantidade.value =  "";
        }
    }
}

function listarItems(){

    divCarrinho.innerHTML = "";
    arrayProdutos.forEach((produto) =>{
        divCarrinho.innerHTML += `
        <div id="produto">
            <div class="card mb-4" style="width: 18rem;">
                <div class="card-body card-carrinho">
                    <h5 class="card-title">${produto.nome}</h5>
                    <h6 class="text quantidade">Quantidade: ${produto.quantidade}</h6>
                    <p class="card-text">R$${produto.valor},00</p>
                    <a href="#" class="btn btn-danger" onclick="excluirItem(this)">Excluir</a>
                </div>
            </div>
        </div>`
    })

}

function calcularTotal(){

    let total = 0;
    let h4Total = document.querySelector('#carrinho-compras h4')

    for(let produto of arrayProdutos){
        total += produto.valor * produto.quantidade;
    }

    total != 0 ? h4Total.innerHTML = `Total: R$${total},00` : h4Total.innerHTML = "";
    
}

function excluirItem(item){

    let card = item.closest('.card');
    let nomeProduto = card.querySelector('.card-title').textContent;

    arrayProdutos = arrayProdutos.filter((objProduto) => objProduto.nome != nomeProduto);
    listarItems();
    calcularTotal();

}

