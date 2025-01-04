
type Produto = {
    nome: string
    valor: number
}

// class Estabelecimento {
//     private endereco: string
//     private setor: string
//     private produtos: Produto[]
//     constructor(endereco: string, setor: string, produtos: Produto[]) {
//         this.endereco = endereco
//         this.setor = setor
//         this.produtos = produtos
//     }
// }

class Estabelecimento {
    private _filaDeEspera: number = 0

    constructor(
        public endereco: string,
         public setor: string,
          private  produtos:Produto[],
          filaDeEspera?: number
    ) {
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera
    }

    public retornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome)
    }

    get filaDeEspera() {
        return this._filaDeEspera
    }

    set filaDeEspera(fila: number){
        if (fila <= 0){
            return
        }

        this._filaDeEspera = fila
    }
    

    diminuiFilaDeEspera(){
        if(this.filaDeEspera === 0){
            return
        }
        this.filaDeEspera -= 1
    }
}

const padaria = {
    endereco: 'Rua Dos Laranjais, 1320 - bloco D',
    tipo: 'alimentação',
    produtos: [
        {nome:'pão', valor: 0.8},
        {nome:'arroz', valor: 10},
        {nome:'leite', valor: 5},
        {nome:'doces', valor: 1.5},
        {nome: 'carne moída', valor: -20}
    ],
}



const padaria2 = {
    endereco: 'Rua Dos Abacates, 1320 - bloco D',
    setor: 'alimentação',
    produtos: [
        {nome:'pão', valor: 0.8},
        {nome:'arroz', valor: 10},
        {nome:'leite', valor: 5},
        {nome:'brigadeiro', valor: 1.5},
        {nome: 'carne moída', valor: -20}
    ],
}


const padaria3 = new Estabelecimento(
    'Rua Dos Laranjais, 1320 - bloco A', 
    'alimentação', 
    [
        {nome:'pão', valor: 0.8},
        {nome:'arroz', valor: 10},
        {nome:'leite', valor: 5},
        {nome:'doces', valor: 1.5},
        {nome: 'carne moída', valor: -20}
    ]
)

const padaria4 = new Estabelecimento(
    'Rua Dos Morangos, 1320 - bloco A', 
    'alimentação', 
    [],
    27
)






console.log(padaria)
console.log(padaria.retornaNomeDosProdutos())
//  console.log(padaria2.retornaNomeDosProdutos())
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
console.log(padaria4.filaDeEspera)
console.log(padaria.endereco)
console.log(padaria.filaDeEspera)