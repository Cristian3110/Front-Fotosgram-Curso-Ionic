import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  posts: Post[] = []; // que viene como un arreglo y se inicializa vacío

  habilitado = true; // propiedad del infinite scroll


  constructor(private postsService: PostsService) {}



  ngOnInit(){

    this.siguiente();
    // this.postsService.getPosts().subscribe(resp => {
    //   console.log(resp);
    //   this.posts.push(...resp.posts);
    // });
  }

  recargar(event){
    this.siguiente(event, true);
    this.habilitado = true;
    this.posts = []; // si el pull es verdadero hace el refrescamiento 
  }

  siguiente(event?, pull: boolean = false){

    this.postsService.getPosts(pull).subscribe(resp => {
      console.log(resp);
      this.posts.push(...resp.posts);

      if (event){
        // evento completado
        event.target.complete();
        // el infinity scroll termina y es cero
        if (resp.posts.length === 0){
          this.habilitado = false;
          // event.target.disabled = true;
        }
      }
    });
  }

}
