import axios from "axios";
import {API} from "../constants";
 
export default class ComunicationService  {

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

    
    
}