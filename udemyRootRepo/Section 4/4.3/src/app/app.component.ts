import { Component, ViewEncapsulation } from '@angular/core';
/**OJO!!!!
 * El template se copia a parte y se referencia aqui!! 
y no se añade logica extra

* */
@Component({
  selector: 'app-root',
  templateUrl: './blog.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'This is froma ngular component TItle!!';
}
