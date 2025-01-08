function MixingVoa(superClasse) {
    return class extends superClasse {
        constructor(...args) {
            super(args[0]);
        }
        voa() {
            console.log(`${this.nome} voou`);
        }
    };
}
function MixingNada(superClasse) {
    return class extends superClasse {
        constructor(...args) {
            super(args[0]);
        }
        nada() {
            console.log(`${this.nome} nadou`);
        }
    };
}
function MixingAnda(superClasse) {
    return class extends superClasse {
        constructor(...args) {
            super(args[0]);
        }
        anda() {
            console.log(`${this.nome} andou`);
        }
    };
}
class Animal {
    nome;
    idadeEmMeses;
    constructor({ nome, idadeEmMeses }) {
        this.nome = nome;
        this.idadeEmMeses = idadeEmMeses;
    }
    comer() {
        console.log(`${this.nome} se alimentou`);
    }
}
class AnimalVoadorAndadorNadador extends MixingNada(MixingAnda(MixingVoa(Animal))) {
}
const cachorro = new (MixingAnda(Animal))({ nome: 'Mel', idadeEmMeses: 10 });
const mosca = new (MixingVoa(Animal))({ nome: 'Mosca', idadeEmMeses: 0.1 });
const pato = new (MixingNada(MixingAnda(MixingVoa(Animal))))({ nome: 'Bruce', idadeEmMeses: 36 });
cachorro.comer();
// cachorro.voa()
mosca.comer();
mosca.voa();
pato.anda();
pato.voa();
pato.nada();
//# sourceMappingURL=03-composi%C3%A7%C3%A3o.js.map