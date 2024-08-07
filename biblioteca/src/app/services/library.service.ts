import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //interfaz que permite peticiones http.
import { Library } from '../models/Library';

@Injectable({
  providedIn: 'root'
})
export class LibrarysService {

  //API_URI = 'http://localhost:3000/library'; //para el servidor json
  API_URI = 'https://localhost:3000/api/bibliotecas'

  constructor(private http : HttpClient){}

  getLibrarys(){
    return this.http.get(`${this.API_URI}`); 
  }
  getLibrary(id:string){
    return this.http.get(`${this.API_URI}/${id}`)
  }
  saveLibrary(library : Library){
		return this.http.post(`${this.API_URI}`,library)
  }
}
