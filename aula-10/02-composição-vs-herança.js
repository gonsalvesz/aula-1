// class Animal {
//     public nome: string
//     public idadeEmMeses:number
//     constructor(nome: string, idadeEmMeses: number) {
//     this.nome = nome
//     this.idadeEmMeses = idadeEmMeses
//     }
// }
class Animal {
    nome;
    idadeEmMeses;
    constructor(nome, idadeEmMeses) {
        this.nome = nome;
        this.idadeEmMeses = idadeEmMeses;
    }
    comer() {
        console.log(`${this.nome} se alimentou`);
    }
}
class AnimalVoador extends Animal {
    nome;
    idadeEmMeses;
    penas;
    constructor(nome, idadeEmMeses, penas) {
        super(nome, idadeEmMeses);
        this.nome = nome;
        this.idadeEmMeses = idadeEmMeses;
        this.penas = penas;
    }
    voa() {
        console.log(`${this.nome} voou`);
    }
}
const cachorro = new Animal('mel', 10);
const mosca = new AnimalVoador('Mosca', 0.1, false);
const pato = new AnimalVoador('Carlos', 5);
cachorro.comer();
// cachorro.voa()
mosca.comer();
mosca.voa();
export {};
//# sourceMappingURL=02-composi%C3%A7%C3%A3o-vs-heran%C3%A7a.js.map