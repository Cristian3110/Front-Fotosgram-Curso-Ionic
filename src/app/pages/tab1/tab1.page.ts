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


  constructor(private postsService: PostsService) {}



  ngOnInit(){

    this.siguientes();
    // this.postsService.getPosts().subscribe(resp => {
    //   console.log(resp);
    //   this.posts.push(...resp.posts);
    // });
  }

  siguientes(event?){
    this.postsService.getPosts().subscribe(resp => {
      console.log(resp);
      this.posts.push(...resp.posts);

      if (event){
        // evento completado
        event.target.complete();
        // el infinity scroll termina y es cero
        if (resp.posts.length === 0){
          event.target.disabled = true;
        }
      }
    });
  }
}
