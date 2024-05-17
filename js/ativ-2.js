const imagens =  document.querySelectorAll("img");


const texto = document.querySelector("#texto");

texto.insertAdjacentHTML("beforebegin", "<p>Final da atividade</p>");
texto.insertAdjacentHTML("afterend", "<p>Obrigada por ler</p>" );



const escuro =  document.querySelector(".btn-dark");

escuro.addEventListener("click", function(){
    const pagina_escuro = document.querySelector("body");
    pagina_escuro.style.backgroundColor="black";
    pagina_escuro.style.color="white";
});

const branco =  document.querySelector(".btn-light");

branco.addEventListener("click", function(){
    const pagina_branco = document.querySelector("body");
    pagina_branco.style.backgroundColor="white";
    pagina_branco.style.color="black";
});