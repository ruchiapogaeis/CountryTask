import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Country } from './country.model';
const PROTOCOL = 'https';
@Injectable()
export class RestDataSource {
    baseUrl: string;
    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://restcountries.eu/`;
    }     

    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(this.baseUrl + 'rest/v2/all');
    }

    searchCountry(name:string): Observable<any>{
        return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`);
    }
    
    getCountry(): Observable<Country[]> {
        return this.http.get<Country[]>(this.baseUrl + 'rest/v2/name/india');
    }    

    // searchCountry(): Observable<any>{
    //     let params1 = new HttpParams().set("name","india");
    //     return this.http.get("https://restcountries.eu/rest/v2/name", {params:params1});
    // }

    
}
    