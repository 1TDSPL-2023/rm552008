
// let listaDeUsuarios = [
//     {
//         nomeCompleto : "Edulado Capacho",
//         emailUsuario : "dudu@email.com",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "José Das Couves",
//         emailUsuario : "jose@email.com",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Paulo Cabuloso",
//         emailUsuario : "paulo@email.com",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Leonaldo Tufo",
//         emailUsuario : "lele@email.com",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Mathias Aires",
//         emailUsuario : "momo@email.com",
//         senhaUsuario : "123456"
//     }
// ];

localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

const inputEmail = document.querySelector("#idEmail");
const inputSenha = document.querySelector("#idPass");
const msgStatus = document.querySelector("#msg");


addEventListener("click", (evt)=>{

    let usuarioLogado = {
        emailUsuarioLogado : inputEmail.value,
        senhaUsuarioLogado : inputSenha.value
    }

    let usuarioValidado = {};

    if (evt.target.id == "btnSubmit") {

        // listaDeUsuarios.forEach((usuario) =>{

        //     if (usuarioLogado.emailUsuarioLogado == usuario.emailUsuario && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario) {
        //         console.log("VALIDADO")
        //     } else {
        //         console.log("NÃO VALIDADO")
        //     }

        // });

        let listaDosUsuarios = JSON.parse(localStorage.getItem("listaUser"));

        for (let x = 0; x < listaDeUsuarios.length; x++) {

            if (usuarioLogado.emailUsuarioLogado == listaDosUsuarios[x].emailUsuario && usuarioLogado.senhaUsuarioLogado == listaDosUsuarios[x].senhaUsuario) {
                usuarioValidado = listaDosUsuarios[x];
                break;
            } 
            
        }

        if (usuarioLogado.emailUsuarioLogado == usuarioValidado.emailUsuario && usuarioLogado.senhaUsuarioLogado == usuarioValidado.senhaUsuario) {
            msgStatus.setAttribute("style", "color: green");
            msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} logou com sucesso!</strong></span>`;
            window.location.href = "../index.html"; 
        } else {
            msgStatus.setAttribute("style", "color: red");
            msgStatus.innerHTML = "<span><strong>Nome de usuário ou senha inválidos</strong></span>";  

        }

        
        
    } 

});