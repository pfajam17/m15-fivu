import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myWelcome = 'Hello';

  private cnt = 1;
  public constructor () {
    console.log('app.component constructor');
    this.myWelcome = 'Hello 2';

    setInterval( () => {
        this.cnt++;
        this.myWelcome = 'Hello ' + this.cnt;
        console.log('Hello ' + this.cnt);
    }, 1000);
  }

  public onButtonClicked() {
    this.cnt = 0;
  }

  public OnButtonClicked() {
    this.cnt = 0;
  }
}
