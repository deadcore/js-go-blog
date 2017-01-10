import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class SwitchRequestService {

  constructor(private http: Http) {
  }

  findAll(pageNumber: number) {
    return this.http.get(`${AppConfig.apiSwitchEnergyBaseUrl}/admin/api/switches?pageNumber=${pageNumber}`)
      .map((res) => res.json());
  }
}
