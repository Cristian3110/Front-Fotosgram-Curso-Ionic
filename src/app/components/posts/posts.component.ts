import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  // recibiendo nuestros posts desde el servicio
  @Input() posts: Post[] = []; // importando desde las interfaces

  constructor() { }

  ngOnInit() {
    console.log(this.posts);
  }

}
