export default class NumberUrlapView {
  #value = "";
  #valid = true;

  constructor(szuloElem, obj, key) {
    this.szuloElem = szuloElem;
    this.obj = obj;
    this.key = key;
    this.numberUrlapElem();
    this.inputElem = $(`#${this.key}`);
    this.inputElem.on("keyup", () => {
      //console.log(this.inputElem.val());
      this.#value = this.inputElem.val();
      //valid-e?
      /*  let patternNumberMin = this.obj.pattern.min; // reguláris kifejezés
        let patternNumberMax = this.obj.pattern.max;
        let pattern = new RegExp(`^\\d{${patternNumberMin},${patternNumberMax}}$`); //reguláris kifejezés átalakítása reguláris objektummá
        if (pattern.test(this.#value)) {
          this.#valid = true;
        } else this.#valid = false;
  
        console.log(this.#valid); */
    });
  }

  getValue() {
    return this.inputElem.val();
  }

  getValid() {
    return this.#valid;
  }

  numberUrlapElem() {
    let txt = `<div class="mb-3 mt-3">
        <label for="${this.key}" class="form-label">${this.obj.megjelenes}</label>
        <input type="${this.obj.tipus}" class="form-control" 
            id="${this.key}" 
            placeholder="${this.obj.placeholder}" 
            min="${this.obj.pattern.min}"
            max="${this.obj.pattern.max}"
            value="${this.obj.value}"
            name="${this.key}">
        </div>`;
    this.szuloElem.append(txt);
  }
}
