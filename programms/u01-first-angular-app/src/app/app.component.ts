import { Component } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myWelcome = 'Hello';
  private cnt = 0;

  public constructor (){
    console.log('app.component constructer');

    setInterval( () => {
      this.cnt++;
      this.myWelcome = 'Hello' + this.cnt;
      console.log('Hello ' + this.cnt);
    }, 1000);
  }
  title = 'u01-first-angular-app';

public onButtonClicked() {
  this.cnt = 0;
}

}
