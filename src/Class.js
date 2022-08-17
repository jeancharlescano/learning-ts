//#############################################################################
//#                             type de propritété                            #
//#############################################################################
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _A_d;
var A = /** @class */ (function () {
    function A() {
        // cette propriété est accessible partout, dans la classe et à l'extérieur,  
        this.c = 3; // s'écris aussi:  c = 3
        //une propriété potected permet au enfant de la classe d'accéder à la propriété
        this.b = 3;
        // une propriété privé ne peux être accédé qu'a l'intérieur de la classe 
        // /!\ ceci est uniquement le cas en ts, lors de la compilation en js, l'accès à la propriété est possible
        this.a = 3;
        // une propriété véritablement privé
        _A_d.set(this, 3);
    }
    A.prototype.log = function () {
        console.log(this.a);
    };
    return A;
}());
_A_d = new WeakMap();
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //sachant que la propriété b est en type protégé et que la class B hérite de A on peut y accéder
    B.prototype.log = function () {
        console.log(this.b);
    };
    return B;
}(A));
//propriété private donc impossible d'y accéder
var aInstance = new A();
console.log(aInstance.a);
// en revanche cela fonction
aInstance.log();
//#############################################################################
//#                    propriété définit dans le constructeur                 #
//#############################################################################
var C = /** @class */ (function () {
    function C(a) {
        this.a = a;
    }
    return C;
}());
//#############################################################################
//#                             classes génériques                            #
//#############################################################################
var Collection = /** @class */ (function () {
    function Collection(items) {
        this.items = items;
    }
    Collection.prototype.first = function () {
        return this.items[0] || null;
    };
    return Collection;
}());
var a = new Collection([1, 2]);
var b = a.first();
var Subscriber = /** @class */ (function () {
    function Subscriber() {
        /*
            * /!\Pour que ce ne soit pas le cas on utilise une fonction fléché
        */
        this["in"] = function (name, cb) {
        };
    }
    /*
        en passant en paramètre le mot "this" dans une fonction, cela signifie
        que l'on veut modifier le sens de this
        /!\ attention dans le codé généré en sorti (en js) cette parti va être annulé /!\*
    */
    Subscriber.prototype.on = function (name, cb) {
        /*
            ici this possèdera tout les propriété d'un HTMLInputElement exemple :

        */
        this.ariaAutoComplete;
    };
    return Subscriber;
}());
