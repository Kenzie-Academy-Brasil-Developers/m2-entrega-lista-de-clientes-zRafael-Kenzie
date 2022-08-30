import { Api } from "./api.js";

class cadastrarCliente {
    static async newClient() {

        const formulario = document.querySelector("form");
        const btn = document.querySelector("#btnCadastrar")
        formulario.addEventListener("click", event => {
            
            if (event.target.tagName === "BUTTON") {
                console.log("aosdjosdfiasjdofiasdjf")
                event.preventDefault()
                const client = {
                    nome: formulario[0].value,
                    email: formulario[1].value,
                    sexo: formulario[4].value,
                    idade: formulario[2].value,
                    cpf: formulario[3].value,
                    endereco: {
                        estado: formulario[10].value,
                        cidade: formulario[9].value,
                        bairro: formulario[8].value,
                        numero: formulario[7].value,
                       rua: formulario[6].value,
                        cep: formulario[5].value
                    }
                }

                Api.cadastrarCliente(client);
                console.log(JSON.stringify(client))
                formulario.reset();
            }
        })

    }

}

cadastrarCliente.newClient()