//#############################################################################
//#                               LES VARIABLES                               #
//#############################################################################

/*
###########################
# Les Variables classique #
###########################
*/

const s: string = "chaine de caractères";
const n = 0;
const b: boolean = true;
const d: null = null;
const arr: string[] = ["tableau", "de", "chaine de caractères"];
const aEviter: any = "any";
const objet: { objetparam1: string; objetparam2: number } = {
  objetparam1: "toto",
  objetparam2: 2,
};
const objetxOptionnal: { objetparam1: string; optionnalobjetparam2?: number } =
  { objetparam1: "toto" };
const objectxInfinite: { objetparam1: string; [key: string]: string } = {
  objetparam1: "toto",
  titi: "tutu",
};
const date: Date = new Date();
const HtmlElement = document.querySelector("#counter") as HTMLButtonElement;



//#############################################################################
//#                               LES FONCTIONS                               #
//#############################################################################


/*
###################
# Fonction Fléché #
###################
*/
const ff: Function = (e: MouseEvent): void => {
  // :void indique que la fonction ne doit rien retourner
};


/*
####################
# Fonction Basique #
####################
*/
function fb(id: number | string): void {
  console.log(id.toString());
}


/*
#############
# Call Back #
#############
*/
const cb: (e: MouseEvent) => void = (e: MouseEvent): void => {};
// callback return
const cbr: (e: MouseEvent) => void = (e: MouseEvent): number => {
  return 3;
};
