const botao = document.querySelector(".botao")
const inputs = document.querySelectorAll(".inputs")
const mensagemErro = document.querySelectorAll(".mensagem-erro")



botao.addEventListener('click', () =>{
    inputs.forEach((input) =>{
        valorInput = input.value;
    })

    if (valorInput === "") {
        errado()
        inputs.forEach((input) =>{
            input.classList.remove("borda-normal")
            input.classList.remove("correto")
            input.classList.add("errado")
        })
    } else {
        correto()
        inputs.forEach((input) =>{
            input.classList.remove("borda-normal")
            input.classList.remove("errado")
            input.classList.add("correto")
        })
    }
})

function errado() {
    mensagemErro.forEach((erro) =>{
        erro.classList.remove("esconder")
    })
}

function correto() {
    mensagemErro.forEach((erro) =>{
        erro.classList.add("esconder")
    })
}



