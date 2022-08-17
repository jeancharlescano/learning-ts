//#############################################################################
//#                             type de propritété                            #
//#############################################################################

class A {
    // cette propriété est accessible partout, dans la classe et à l'extérieur,  
    public c = 3 // s'écris aussi:  c = 3

    //une propriété potected permet au enfant de la classe d'accéder à la propriété
    protected b = 3
    
    // une propriété privé ne peux être accédé qu'a l'intérieur de la classe 
    // /!\ ceci est uniquement le cas en ts, lors de la compilation en js, l'accès à la propriété est possible
    private a = 3 

    // une propriété véritablement privé
    #d = 3 

    log() {
        console.log(this.a);
        
    }
}

class B extends A {
    //sachant que la propriété b est en type protégé et que la class B hérite de A on peut y accéder
    log () {
        console.log(this.b)
    }
}


//propriété private donc impossible d'y accéder
const aInstance = new A();
console.log(aInstance.a)

// en revanche cela fonction
aInstance.log()


//#############################################################################
//#                    propriété définit dans le constructeur                 #
//#############################################################################

class C {
    constructor (
        public a: number
    ) {

    }
}

//#############################################################################
//#                             classes génériques                            #
//#############################################################################

class Collection<T> {
    constructor (private items: T[]) {

    }

    first (): T | null {
       return this.items[0] || null
    }
}

const a = new Collection<number>([1,2])
const b = a.first()

class Subscriber {
    /*
        en passant en paramètre le mot "this" dans une fonction, cela signifie
        que l'on veut modifier le sens de this
        /!\ attention dans le codé généré en sorti (en js) cette parti va être annulé /!\*
    */
    on (this: HTMLInputElement, name: string, cb: Function) {
        /*
            ici this possèdera tout les propriété d'un HTMLInputElement exemple :

        */
       this.ariaAutoComplete

    }

    /*
        * /!\Pour que ce ne soit pas le cas on utilise une fonction fléché
    */
   in = (name: string, cb: Function) => {

   }
}