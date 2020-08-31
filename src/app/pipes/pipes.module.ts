import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';



@NgModule({
  declarations: [DomSanitizerPipe],
  exports: [DomSanitizerPipe] // lo exportamos para utilizarlo fuera de él
})
export class PipesModule { }
