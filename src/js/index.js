const botao = document.querySelector(".botao")
const inputs = document.querySelectorAll(".inputs")
const mensagemErro = document.querySelectorAll(".mensagem-erro")



botao.addEventListener('click', () =>{
    
    inputs.forEach((input, index) =>{
        valorInput = input.value;
        if (valorInput === "") {
            mensagemErro[index].classList.remove("esconder");
            input.classList.remove("borda-normal")
            input.classList.remove("correto")
            input.classList.add("errado")
        } else {
            mensagemErro[index].classList.add("esconder");
            input.classList.remove("borda-normal")
            input.classList.remove("errado")
            input.classList.add("correto")
        }
    })
    
})

function errado() {
    mensagemErro.forEach((erro) =>{
        erro.classList.remove("esconder")
    })
}

function correto() {
    mensagemErro.forEach((correto) =>{
        correto.classList.add("esconder")
    })
}



