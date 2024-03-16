import { turaKULCS, turavezetoKULCS } from "../../adat.js";
import { turatipusKULCS } from "../../adat.js";
import FejlecView from "./FejlecView.js";
import SorView from "./SorView.js";

export default class TablaView {
  #list = [];
  constructor(list, szuloElem) {
    this.#list = list;
    //console.log(this.#list);
    szuloElem.append(`<table class='table table-striped'>
        <thead></thead>
        <tbody></tbody>
        </table>`);
    this.tbodyElem = szuloElem.find("tbody");
    this.theadElem = szuloElem.find("thead");
    this.formElem = $(".urlap");
    this.gombElem = $("button");


    //console.log(this.formElem);
    //console.log(this.tbodyElem);

    switch (true) {
      case document.URL.indexOf("turavezetok.html") >= 0:
        new FejlecView(turavezetoKULCS, this.theadElem);
        break;
      case document.URL.indexOf("turatipusok.html") >= 0:
        new FejlecView(turatipusKULCS, this.theadElem);
        break;
      case document.URL.indexOf("turak.html") >= 0:
        new FejlecView(turaKULCS, this.theadElem);
        break;
    }
    //new FejlecView(turavezetoKULCS, this.theadElem);
    this.sorMegjelenit();
  }
  sorMegjelenit() {
    this.#list.forEach((elem, index) => {
      new SorView(index, elem, this.tbodyElem);

      index++;
    });
  }
}
