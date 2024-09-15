let menuHamburguer = document.querySelector('#menu-mobile');
let navegacaoMobile = document.querySelector('#navegacao-mobile');


menuHamburguer.addEventListener('click', ()=>{
    if(navegacaoMobile.style.display == 'block'){
        navegacaoMobile.style.display = 'none';
        menuHamburguer.innerHTML = '<i class="fa-solid fa-bars" style="color: #ffffff;"></i>'
        document.body.style.position = "initial";
    }
    else{
        navegacaoMobile.style.display = 'block';
        menuHamburguer.innerHTML = '<i class="fa-solid fa-x" style="color: #ffffff;"></i>'
        document.body.style.position = "fixed";
    }
}
);
