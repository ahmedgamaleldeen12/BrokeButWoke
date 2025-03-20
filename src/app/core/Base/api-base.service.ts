import { Injectable } from '@angular/core';
import { Api } from '../../data/Api';
import { AxiosResponse } from 'axios';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  apiClient!: Api;

  constructor() {
    this.initClient();
  }

  initClient() {
    this.apiClient = new Api({baseURL: environment.apiUrl});
    this.apiClient.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
    );
  }
}
