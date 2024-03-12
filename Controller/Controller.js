import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";

class Controller {

  constructor() {
    this.dataService = new DataService();
    this.dataService.getAxiosData(
      "http://localhost:8000/api/turatipusok",
      this.megjelenit
    );

    $(window).on("torol", (event) => {
      this.dataService.deleteAxiosData(
        "http://localhost:8000/api/turatipusok",
        event.detail);
    });
  }

  megjelenit(list) {
    //console.log(list);
    new TablaView(list, $(".adatok"));
  }


}

export default Controller;
