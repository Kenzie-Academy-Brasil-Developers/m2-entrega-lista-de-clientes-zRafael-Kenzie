import {Api} from "./api.js";

class Editar {
    
    static selecionarCliente (array) {
        const select = document.querySelector("#buscarCliente")
        array.forEach((cliente) => {
            const card = Editar.selecionarCard(cliente)
            select.append(card)
        })
    }

    static selecionarCard (cliente) {
        const {id, nome}    = cliente;
        const option        = document.createElement('option')
        option.key          = id
        option.id           = id
        option.innerText    = nome

        return option
    }

    static  buscarCliente() {

        const select        = document.querySelector("#buscarCliente")
        const form          = document.querySelector('#editar')
        const buscarBtn     = document.querySelector("#btnBuscar")

        buscarBtn.addEventListener("click", async (event) => {
            event.preventDefault()

        clienteslist.forEach((cliente) => {
                if(cliente.id == select.options[select.selectedIndex].id) {

                    form[0].value   = cliente.nome
                    form[1].value  = cliente.email
                    form[2].value = cliente.idade
                    form[3].value = cliente.cpf
                    form[4].value = cliente.sexo
                    form[5].value = cliente.endereco.cep
                    form[6].value = cliente.endereco.rua
                    form[7].value = cliente.endereco.numero
                    form[8].value = cliente.endereco.bairro
                    form[9].value = cliente.endereco.cidade
                    form[10].value = cliente.endereco.estado

                }
            })
        })

    }
    
    static editarClientes() {

        const select        = document.querySelector("#buscarCliente")
        const formulario = document.querySelector("#editar")
        const button        = document.querySelector("#atualizarDados")

        button.addEventListener("click", async (event) => {
            await clienteslist.forEach((cliente) => {
                event.preventDefault()
                const id = cliente.id

                if(id == select.options[select.selectedIndex].id) {

                    const data = {
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
                    console.log(JSON.stringify(data))
                    Api.editarCliente(id, data)

                }
            })
        })
    }

}

const clienteslist = await Api.listarClientes()
Editar.selecionarCliente(clienteslist)
Editar.buscarCliente()
Editar.editarClientes()