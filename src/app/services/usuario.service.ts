import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import {environment} from '../../environments/environment';
import { Usuario } from '../interfaces/interfaces';





const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  constructor( private http: HttpClient, private storage: Storage){ }

  login(email: string, password: string){

    const data = { email, password};

    return new Promise(resolve =>{

      this.http.post(`${URL}/user/login`, data)
              .subscribe( async resp => {
                console.log(resp);

                if (resp[' ok ']){
                  await this.guardarToken(resp[' token ']);
                  resolve(true); // todo correctamente
                }else{
                  this.token = null; // con esto reseteamos el token
                  this.storage.clear(); // con esto limpiamos el storage ya que se intento guardar
                  resolve(false); // hubo un error
                }
              });

    });

  }

    registro(usuario: Usuario){

      return new Promise (resolve =>{

      /*****************************************
     * REVISAR LA LÓGICA DEL SIGUIENTE CÓDIGO
     ****************************************/

        this.http.post(`${URL}/user/create`, usuario).
            subscribe( async resp => {
              console.log(resp);

              if (resp[' ok ']){
                await this.guardarToken(resp[' token ']);
                resolve(true); // todo correctamente
              }else{
                this.token = null; // con esto reseteamos el token
                this.storage.clear(); // con esto limpiamos el storage ya que se intento guardar
                resolve(false); // hubo un error
              }
            });
      });
    }


  // convertimos el guardarToken en una promesa debido a q noecesitamos que se guarde en el storage
   async guardarToken(token: string){

     this.token = token;
     await this.storage.set('token', token);

  }
}
