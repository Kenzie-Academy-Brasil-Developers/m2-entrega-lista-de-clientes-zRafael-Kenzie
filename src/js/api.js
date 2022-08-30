export class Api {

    static baseUrl = 'https://atividade-api-clientes.herokuapp.com/clientes'

    static async listarClientes() {
        const data = await fetch(this.baseUrl, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res =>res)
            .catch(err => console.log(err))

            return data

    }

    static async cadastrarCliente(data) {
        console.log(data)
        const cadastrar = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        return cadastrar
    }

    static async pesquisaCliente (idCliente) {
        return await fetch(`${this.baseUrl}/${idCliente}`)
        .then(resp => resp.json())
        .catch(err => console.log(err))
    }
 
    static async deletarCliente(id){
        const deletar = await fetch(`${this.urlBase}${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
        }
        })
        .then(res => res.json())
        .catch(err => console.log(err))

        return deletar
    }

    static async editarCliente(id, body){
        const newclient = await fetch(`${this.url}/clientes/${id}`, {
            method : "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }


}

