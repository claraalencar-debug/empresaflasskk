// alert("Olá, tudo bem?");

const formulario = document.getElementById("loginForm");
const mensagem = document.getElementById("loginMensagem");

// formulario.addEventListener("submit", function(event){
formulario.addEventListener("submit", async (event)=>{
    event.preventDefault();

    mensagem.textContent="Entrando no Sistema....";
    mensagem.className="mensagem";

    const dados ={
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
    }

    try{
        const resposta = await fetch("/api/login", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(dados)
        } )
    

    const resultado = await resposta.json();

    if(!resposta.ok){
        throw new Error(resultado.erro || "Erro no Login");
    }

    window.location.href="/sistema";

} catch(erro){
    mensagem.textContent = "Erro: " + erro.mensagem;
    mensagem.className = "mensagem erro";
}
});