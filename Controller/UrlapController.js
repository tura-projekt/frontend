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
      this.dataService.postAxiosData("turatipusok", event.detail);
    });
  }
}
export default UrlapController;
