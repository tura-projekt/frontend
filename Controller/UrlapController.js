import DataService from "../Model/DataService.js";
import UrlapView from "../View/Tablazat/UrlapView.js";

class UrlapController {
  constructor() {
    new UrlapView($(".urlap"));
    this.dataService = new DataService();

    $(window).on("ujAdatHozzaAdasa", (event) => {
      //console.log("Az űrlap adatait megkapja a kontroller");
      //console.log(event.detail);
      //adatbázisba beilleszteni a kapott adatot
      switch (true) {
        case document.URL.indexOf("turavezetok.html") >= 0:
          this.dataService.postAxiosData("turavezetok", event.detail);
          break;
        case document.URL.indexOf("turatipusok.html") >= 0:
          this.dataService.postAxiosData("turatipusok", event.detail);
          break;
        case document.URL.indexOf("turak.html") >= 0:
          this.dataService.postAxiosData("turak", event.detail);
          break;
          case document.URL.indexOf("bejelentkezes.html") >= 0:
          this.dataService.postAxiosData("bejelentkezes", event.detail);
          break;
      }
      //this.dataService.postAxiosData("turatipusok", event.detail);
    });
  }
}
export default UrlapController;
