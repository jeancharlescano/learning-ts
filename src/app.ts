//#region type de variable
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

//#endregion

//#region fonctions
//fonction fléché
const ff: Function = (e: MouseEvent): void => {
  // :void indique que la fonction ne doit rien retourner
};
//fonction basique
function fb(id: number | string): void {
  console.log(id.toString());
}
// callback
const cb: (e: MouseEvent) => void = (e: MouseEvent): void => {};
// callback return
const cbr: (e: MouseEvent) => void = (e: MouseEvent): number => {
  return 3;
};

//#endregion

  const counter = document.querySelector("#counter") as HTMLButtonElement;
  let i: number = 0;

  const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = counter?.querySelector("span");
    if (span) {
      span.innerText = i.toString();
    }
  };

  counter?.addEventListener("click", increment);

