import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    let githubData = "https://api.github.com/users"
    return this.http.get<any>(githubData)
  }

  getName():Observable<any>{
    let githubData = "https://api.github.com/users/repos"
    return this.http.get<any>(githubData)
  }
}
