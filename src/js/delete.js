import { Api } from "./api.js";

class Deletar {
    
    static selecionarCliente (array) {
        const select = document.querySelector("#buscarCliente")
        array.forEach((cliente) => {
            const card = this.selecionarCard(cliente)
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

        static deletarCliente(){
            const select = document.querySelector('#buscarCliente')
            const btnDeletar = document.querySelector('#deletar')
            btnDeletar.addEventListener('click',async (event) =>{
                event.preventDefault()
               
                await clienteslist.forEach((cliente)=>{

                    const id = cliente.id
                    
                    if(id == select.options[select.selectedIndex].id){



                        Api.deletarCliente(id)
                    }
                })
            }
            )
        }
}

const clienteslist = await Api.listarClientes()
Deletar.selecionarCliente(clienteslist)
Deletar.deletarCliente()