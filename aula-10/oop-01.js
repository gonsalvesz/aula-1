class EstabelecimentoBase {
    endereco;
    setor;
    produtos;
    _filaDeEspera = 0;
    constructor(endereco, setor, produtos, filaDeEspera) {
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera;
    }
    retornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome);
    }
    get filaDeEspera() {
        return this._filaDeEspera;
    }
    set filaDeEspera(fila) {
        if (fila <= 0) {
            return;
        }
        this._filaDeEspera = fila;
    }
    diminuiFilaDeEspera() {
        if (this.filaDeEspera === 0) {
            return;
        }
        this.filaDeEspera -= 1;
    }
}
class Farmacia extends EstabelecimentoBase {
    endereco;
    setor;
    produtos;
    retornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome);
    }
    constructor(endereco, setor, produtos, filaDeEspera) {
        super(endereco, setor, produtos, filaDeEspera);
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
    }
    compraRemedioPrescrito(receita, produtosAComprar) {
        const remediosDisponiveis = this.produtos.filter(produto => produtosAComprar.includes(produto.nome));
        if (remediosDisponiveis.length == 0) {
            console.log('Infelizmente não temos os remédios em estoque');
        }
        const remediosAutorizados = remediosDisponiveis.filter(produto => {
            console.log(produto);
            console.log(receita.remedios);
            !produto.receitaObrigatoria ? true :
                receita.remedios.includes(produto.nome);
        });
        console.log({ remediosDisponiveis });
        console.log({ remediosAutorizados });
    }
}
const padaria = (endereco, tipo, produtos) => ;
const padaria2 = (endereco, setor, produtos) => ;
const padaria3 = new EstabelecimentoBase('Rua Dos Laranjais, 1320 - bloco A', 'alimentação', [
    { nome: 'pão', valor: 0.8 },
    { nome: 'arroz', valor: 10 },
    { nome: 'leite', valor: 5 },
    { nome: 'doces', valor: 1.5 },
    { nome: 'carne moída', valor: -20 }
]);
const padaria4 = new EstabelecimentoBase('Rua Dos Morangos, 1320 - bloco A', 'alimentação', [], 27);
const supermercado = new EstabelecimentoBase('Rua Dos Laranjais, 1320 - bloco A', 'alimentação', [
    { nome: 'pão', valor: 0.8 },
    { nome: 'arroz', valor: 10 },
    { nome: 'leite', valor: 5 },
    { nome: 'doces', valor: 1.5 },
    { nome: 'carne moída', valor: -20 }
], 25);
const FarmaciaDoZe = new Farmacia('Rua Dos jantares, 1320 - bloco A', 'alimentação', [
    { nome: 'aspirina', valor: 0.8 },
    { nome: 'doqueflei controlado 1', valor: 10, receitaObrigatoria: true },
    { nome: 'tchulenai controlado 2', valor: 5, receitaObrigatoria: true },
    { nome: 'langosbango', valor: 5 }
]);
FarmaciaDoZe.compraRemedioPrescrito({
    remedios: ['doqueflei controlado 1'],
    identificacaodomedico: '185-444-257'
}, ['aspirina', 'doqueflei controlado 2', 'shampoo']);
export {};
//# sourceMappingURL=oop-01.js.map