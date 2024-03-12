export default class FejlecView {
  #obj = {};
  constructor(obj, szuloElem) {
    this.#obj = obj;

    this.szuloElem = szuloElem;

    this.htmLOsszerak();
  }
  htmLOsszerak() {
    let txt = "<tr>";
    for (const key in this.#obj) {
      txt += `<th>${key}</th>`;
      //console.log(key);
    }
    txt += "</tr>";
    //console.log(txt);

    this.szuloElem.append(txt);
  }
}
