import axios from "axios";
import { API } from "../constants";

export default class ComunicationService {

  fetchReports(successfulResponse, failedResponse) {
    axios.get(`${API}reports`)
      .then(response => {

        successfulResponse(response.data);
      })
      .catch(error => {
        failedResponse(error);
      });
  }

  fetchCandidates(successfulResponse, failedResponse) {
    axios.get(`${API}candidates`)
      .then(response => {

        successfulResponse(response.data);
      })
      .catch(error => {
        failedResponse(error);
      });
  }

  fetchCompanies(successfulResponse, failedResponse) {
    axios.get(`${API}companies`)
      .then(response => {

        successfulResponse(response.data);
      })
      .catch(error => {
        failedResponse(error);
      });
  }

  postReport(report, successfulResponse, failedResponse) {
    axios.post(`${API}reports`, report)
    .then(response => {
      successfulResponse(response.data);
    })
    .catch(error => {
      failedResponse(error);
    });
  }

  deleteReport(reportId, successfulResponse, failedResponse) {
    axios({
      method: "DELETE",
      url: `${API}reports/${reportId}`
    })
    .then(response => {
      successfulResponse(response.data);
    })
    .catch(error => {
      failedResponse(error);
    });
  }



}