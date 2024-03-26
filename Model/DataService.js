export default class DataService {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000";
    axios.defaults.withCredentials = true;
    this.token = "";
  }


  getAxiosData(url, callback) {
    console.log(url);
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        callback(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("finally");
      });
  }

  async getCSRFToken() {
    axios
      .get("/token")
      .then((response) => {
        console.log("CSRF", response);
        this.token = response.data.token;
      })
      .catch((error) => {
        console.log("hiba", error);
      });
  }

/*   postAxiosData(url, data) {
    console.log(data);
    axios
      .post(url, data)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      });
  } */

  async postAxiosData(url, data) {
    await this.getCSRFToken();

    data._token = this.token;
    axios
      .post(url, data)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      });
  }

  putAxiosData(url, data) {
    console.log(data);
    console.log(`${url}/${data.id}`);
    axios
      .put(`${url}/${data.id}`, data)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      });
  }

  deleteAxiosData(url, id) {
    console.log(`${url}/${id}`);
    axios
      .delete(`${url}/${id}`)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      });
  }
}
