import { Api } from "./api.js"

export class Clientes {
    static criarCard(array) {
        const ulbase = document.querySelector(".container")

        const dados = array.forEach(element => {
            const clienteCard = document.createElement('li')
            clienteCard.setAttribute('class','card')
            const clienteName = document.createElement('h2')
            const divDadosCliente = document.createElement('div')
            const nameDiv = document.createElement('h3')
            const pEmail = document.createElement('p')
            const pIdade = document.createElement('p')
            const pCpf = document.createElement('p')
            const pSexo = document.createElement('p')

            const divDadosEndereço = document.createElement('div')
            const nomeDivEndereço = document.createElement('h3')
            const pCep = document.createElement('p')
            const pEstado = document.createElement('p')
            const pCidade = document.createElement('p')
            const pBairro = document.createElement('p')
            const pRua = document.createElement('p')
            const pNumero = document.createElement('p')

            clienteName.innerText = element.nome
            nameDiv.innerText = "Dados Pessoais"
            pEmail.innerText = element.email
            pIdade.innerText = element.idade
            pCpf.innerText = element.cpf
            pSexo.innerText = element.sexo
            divDadosCliente.append(nameDiv, pEmail, pIdade, pCpf, pSexo)

            nomeDivEndereço.innerText = "Endereço"
            pCep.innerText = element.endereco.cep
            pEstado.innerText = element.endereco.estado
            pCidade.innerText = element.endereco.cidade
            pBairro.innerText = element.endereco.bairro
            pRua.innerText = element.endereco.rua
            pNumero.innerText = element.endereco.numero
            divDadosEndereço.append(nomeDivEndereço,pCep,pEstado,pCidade,pBairro,pRua,pNumero)

            clienteCard.append(clienteName,divDadosCliente,divDadosEndereço)
            ulbase.append(clienteCard)


            
        })
        return dados
    }
}



const listaDeClientes= await Api.listarClientes()

Clientes.criarCard(listaDeClientes)