import { Produto } from "../aula-09/01-oop"

interface Estabelecimentointerface {
    endereco: string
    setor: string
    produtos: Produto[]
    filaDeEspera: number
    
    retornaNomeDosProdutos: () => string[]
    diminuiFilaDeEspera(): void
}

interface ReceitaInterface{
    remedios: string[]
    identificacaodomedico: string
}

interface Remedio extends Produto {
    receitaObrigatoria?: boolean
}

interface FarmaciaInterface extends Estabelecimentointerface{
    compraRemedioPrescrito: (receita: ReceitaInterface, produtosAComprar: string[]) => void
}

class EstabelecimentoBase implements Estabelecimentointerface {
    private _filaDeEspera: number = 0

    constructor(
        public endereco: string,
         public setor: string,
          public  produtos:Produto[],
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

class Farmacia extends EstabelecimentoBase implements FarmaciaInterface{

    retornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome);
    }
    
    constructor(
        public endereco: string,
         public setor: string,
          public  produtos:Remedio[],
          filaDeEspera?: number
    ) {
        super(endereco, setor, produtos, filaDeEspera)
        
    }

    public compraRemedioPrescrito(
        receita: ReceitaInterface, 
        produtosAComprar: string[]
    ): void {
        const remediosDisponiveis = this.produtos.filter(
            produto => produtosAComprar.includes(produto.nome)
        )

        if (remediosDisponiveis.length == 0) {
            console.log('Infelizmente não temos os remédios em estoque')
        }

        const remediosAutorizados = remediosDisponiveis.filter(
            produto => {

                console.log(produto)
                console.log(receita.remedios)

                !produto.receitaObrigatoria ? true :
                receita.remedios.includes(produto.nome)   

            }
        )

        console.log({remediosDisponiveis})
        console.log({remediosAutorizados})
    }

}
   

const padaria = (
    endereco: 'Rua Dos Laranjais, 1320 - bloco D',
    tipo: 'alimentação',
    produtos: [
        {nome:'pão', valor: 0.8},
        {nome:'arroz', valor: 10},
        {nome:'leite', valor: 5},
        {nome:'doces', valor: 1.5},
        {nome: 'carne moída', valor: -20}
    ]
)



const padaria2 = (
    endereco: 'Rua Dos Abacates, 1320 - bloco D',
    setor: 'alimentação',
    produtos: [
        {nome:'pão', valor: 0.8},
        {nome:'arroz', valor: 10},
        {nome:'leite', valor: 5},
        {nome:'brigadeiro', valor: 1.5},
        {nome: 'carne moída', valor: -20}
    ]
)


const padaria3 = new EstabelecimentoBase(
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

const padaria4 = new EstabelecimentoBase(
    'Rua Dos Morangos, 1320 - bloco A', 
    'alimentação', 
    [],
    27
)


const supermercado = new EstabelecimentoBase(
    'Rua Dos Laranjais, 1320 - bloco A', 
    'alimentação', 
    [
        {nome:'pão', valor: 0.8},
        {nome:'arroz', valor: 10},
        {nome:'leite', valor: 5},
        {nome:'doces', valor: 1.5},
        {nome: 'carne moída', valor: -20}
    ],
    25
);

const FarmaciaDoZe = new Farmacia(
    'Rua Dos jantares, 1320 - bloco A', 
    'alimentação', 
    [
        {nome:'aspirina', valor: 0.8},
        {nome:'doqueflei controlado 1', valor: 10, receitaObrigatoria: true},
        {nome:'tchulenai controlado 2', valor: 5, receitaObrigatoria: true},
        {nome:'langosbango', valor: 5}
    ],
);

FarmaciaDoZe.compraRemedioPrescrito({
    remedios: ['doqueflei controlado 1'],
    identificacaodomedico: '185-444-257'
}, ['aspirina', 'doqueflei controlado 2', 'shampoo'])

