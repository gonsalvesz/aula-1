type Constructor = new (...args: any[]) => {};
type GConstructor <T ={}> = new (...args: any[]) => T;
type AnimalProps = GConstructor<[nome: string, idadeEmMeses: number]>

function MixingVoa<Tbase extends AnimalProps>(superClasse: Tbase) {
    return class extends superClasse {
        constructor(...args: any) {          
            super(args[0])
        }
        voa() {
            console.log(`${this.nome} voou`)
        }
    }
}


function MixingNada<Tbase extends AnimalProps>(superClasse: Tbase) {
    return class extends superClasse {
        constructor(...args: any) {
            super(args[0])
        }
        nada() {
            console.log(`${this.nome} nadou`)
        }
    }
}


function MixingAnda<Tbase extends AnimalProps>(superClasse: Tbase) {
    return class extends superClasse {
        constructor(...args: any) {
            super(args[0])
        }
        anda() {
            console.log(`${this.nome} andou`)
        }
    }
}



interface AnimalInterface {
    nome: string
    idadeEmMeses: number
    comer: () => void
}

class Animal implements AnimalInterface {
    public nome: string
    public idadeEmMeses: number
    constructor({nome, idadeEmMeses} : {nome: string, idadeEmMeses: number}){
        this.nome = nome
        this.idadeEmMeses = idadeEmMeses
    }


    comer(): void {
        console.log(`${this.nome} se alimentou`)
    }

}

class AnimalVoadorAndadorNadador extends MixingNada(MixingAnda(MixingVoa(Animal))) {}



const cachorro = new (MixingAnda(Animal))({nome: 'Mel', idadeEmMeses: 10})
const mosca = new (MixingVoa(Animal))({nome:'Mosca',idadeEmMeses: 0.1})
const pato = new (MixingNada(MixingAnda(MixingVoa(Animal))))({nome:'Bruce',idadeEmMeses: 36})

cachorro.comer()
// cachorro.voa()
mosca.comer()
mosca.voa()
pato.anda()
pato.voa()
pato.nada()