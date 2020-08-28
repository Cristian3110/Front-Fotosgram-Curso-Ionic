import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // importando el servicio
import { environment } from '../../environments/environment'; // importar del normal no el de producción
import { RespuestaPosts } from '../interfaces/interfaces';



const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginasPosts = 0; // inicio de las paginas

  constructor(private http: HttpClient) { }



  getPosts(){

    this.paginasPosts ++; // llamado a las paginas

    return this.http.get<RespuestaPosts>(`${URL}/posts/?pagina=1`);
  }
}
