export default class SorView {
  #adat = {}; // az adott objektum

  constructor(index, adat, szuloElem) {
    this.index = index;
    this.#adat = adat;
    this.tablaElem = szuloElem;

    this.tbodyElem = szuloElem.find("tbody");

    this.#sor(); //privát tagfüggvény
    /** eseménykezelők a kész és a törlés gombokhoz */
    this.sorElem = this.tablaElem.children("tr:last-child");
    this.keszElem = this.sorElem.children("td").children(".kesz");
    this.megseElem = this.sorElem.children("td").children(".megse");
    this.torolElem = this.sorElem.children("td").children(".torol");

    //console.log(this.keszElem);
    this.keszElem.on("click", () => {
      // callback fv.
      // console.log(this)
      this.#esemenyTrigger("kesz");
    });

    this.torolElem.on("click", () => {
      // callback fv.
      //console.log(this)
      this.#esemenyTrigger("torol");
      //szuloElem.empty();
      //location.reload()

    });

    this.megseElem.on("click", () => {
      // callback fv.
      // console.log(this)
      this.#esemenyTrigger("megse");
    });
  }

  #sor() {
    let txt = "";
    txt += "<tr>";
    for (const key in this.#adat) {
      txt += `<td>${this.#adat[key]}</td>`; // konkrét kulcshoz tartozó adat
    }
    txt += `<td></span><span class="torol">🗑</span></td>`;
    txt += "</tr>";
    this.tablaElem.append(txt);
  }

  #esemenyTrigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev, { detail: this.#adat.tipus_id });
    window.dispatchEvent(e);
    console.log(this.#adat.tipus_id);
  }
}
