import TextUrlapView from "./TextUrlapView.js";
import NumberUrlapView from "./NumberUrlapView.js";
import { turaLeiras, turatipusLeiras, userLeiras } from "../../adat.js";
import { turavezetoLeiras } from "../../adat.js";

class UrlapView {
  #formAdat = {};
  #inputElemObjektumokLista = []; // itt tároljuk azokat az objektumokat amelyek létrehozzák a form elemeket
  #urlapValid;

  constructor(szuloElem) {
    szuloElem.append("<form>");
    this.formElem = szuloElem.find("form");
    console.log(this.formElem);

    switch (true) {
      case document.URL.indexOf("turavezetok.html") >= 0:
        this.htmlOsszeallit(turavezetoLeiras);
        break;
      case document.URL.indexOf("turatipusok.html") >= 0:
        this.htmlOsszeallit(turatipusLeiras);
        break;
      case document.URL.indexOf("turak.html") >= 0:
        this.htmlOsszeallit(turaLeiras);
        break;
      case document.URL.indexOf("bejelentkezes.html") >= 0:
        this.htmlOsszeallit(userLeiras);
        break;
    }
    
    //this.htmlOsszeallit(turatipusLeiras);

    /* submit gomb kezelése
    1. létrehozom a gombhoz a kapaszkodót
    2. hozzárendelem az eseményt
    3. ebben az eseményben összegyűjtöm a form adatait
    4. felküldöm a kontrollernek */

    this.submitElem = this.formElem.find("#submit");
    //console.log(this.submitElem)
    //this.nevElem = this.formElem.find("#nev")
    //this.szulEvElem = this.formElem.find("#szul_ev")

    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#urlapValid = true;
      this.#inputElemObjektumokLista.forEach((elem) => {
        console.log(elem);
        //console.log(elem.key);
        //console.log(elem.getValue());
        this.#formAdat[elem.key] = elem.getValue();
        this.#urlapValid = this.#urlapValid && elem.getValid();
      });
      //this.#formAdat.nev=this.nevElem.val()
      //this.#formAdat.szul=this.szulEvElem.val()

      //console.log(this.#formAdat);

      if (this.#urlapValid) {
        this.trigger("ujAdatHozzaAdasa");
      } else {
        console.log("Az adatok nem validak!");
      }
    });
  }

  trigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev, { detail: this.#formAdat });
    window.dispatchEvent(e);
  }

  /*   numberUrlapElem(obj, key) {
    let txt = `<div class="mb-3 mt-3">
    <label for="${key}" class="form-label">${obj.megjelenes}</label>
    <input type="${obj.tipus}" class="form-control" 
        id="${key}" 
        placeholder="${obj.placeholder}" 
        min="${obj.pattern.min}"
        max="${obj.pattern.max}"
        value="${obj.value}"
        name="${key}">
    </div>`;
    return txt;
  } */

  htmlOsszeallit(adat) {
    let txt = "";
    for (const key in adat) {
      switch (adat[key].tipus) {
        case "text":
          this.#inputElemObjektumokLista.push(
            new TextUrlapView(this.formElem, adat[key], key)
          );
          break;
        case "number":
          //txt += this.numberUrlapElem(adat[key], key);
          this.#inputElemObjektumokLista.push(
            new NumberUrlapView(this.formElem, adat[key], key)
          );
        default:
          break;
      }
    }
    //console.log(this.#inputElemObjektumokLista)
    txt += `<div class="mb-3 mt-3">
                    <input type="submit"" 
                    id="submit" 
                    value="Küld"    
                </div>`;

    this.formElem.append(txt);
  }
}
export default UrlapView;
