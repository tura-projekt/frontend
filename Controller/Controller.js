import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";

class Controller {
  constructor() {
    this.dataService = new DataService();
    switch (true) {
      case document.URL.indexOf("turavezetok.html") >= 0:
        this.dataService.getAxiosData(
          "http://localhost:8000/api/turavezetok",
          this.megjelenit
        );
        break;
      case document.URL.indexOf("turatipusok.html") >= 0:
        this.dataService.getAxiosData(
          "http://localhost:8000/api/turatipusok",
          this.megjelenit
        );
        break;
      case document.URL.indexOf("turak.html") >= 0:
        this.dataService.getAxiosData(
          "http://localhost:8000/api/turak",
          this.megjelenit
        );
        break;
    }

    $(window).on("torol", (event) => {
      switch (true) {
        case document.URL.indexOf("turavezetok.html") >= 0:
          this.dataService.deleteAxiosData(
            "http://localhost:8000/api/turavezetok",
            event.detail
          );
          setTimeout(() => {
            $("#tabla").empty();
            this.dataService.getAxiosData(
              "http://localhost:8000/api/turavezetok",
              this.megjelenit
            );
          }, 1000);
          break;
        case document.URL.indexOf("turartipusok.html") >= 0:
          this.dataService.deleteAxiosData(
            "http://localhost:8000/api/turatipusok",
            event.detail
          );
          setTimeout(() => {
            $("#tabla").empty();
            this.dataService.getAxiosData(
              "http://localhost:8000/api/turatipusok",
              this.megjelenit
            );
          }, 1000);
          break;
        case document.URL.indexOf("turak.html") >= 0:
          this.dataService.deleteAxiosData(
            "http://localhost:8000/api/turak",
            event.detail
          );
          setTimeout(() => {
            $("#tabla").empty();
            this.dataService.getAxiosData(
              "http://localhost:8000/api/turak",
              this.megjelenit
            );
          }, 1000);
          break;
      }
    });
  }

  megjelenit(list) {
    //console.log(list);
    new TablaView(list, $(".adatok"));
  }
}

export default Controller;
