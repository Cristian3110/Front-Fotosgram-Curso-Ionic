import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// realizando la configuración de los componentes ya que no se crearon automáticamente
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';




@NgModule({
  declarations: [PostsComponent, PostComponent],
  exports: [PostsComponent], // exportando solo el que se va a utilizar fuera de este módulo
  imports: [
    CommonModule,
    IonicModule, // utilizaremos elementos de Ionic para renderizar en los 2 componentes creados
    PipesModule
  ]
})
export class ComponentsModule { }
