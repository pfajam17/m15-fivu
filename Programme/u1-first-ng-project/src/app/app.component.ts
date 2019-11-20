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
      this.myWelcome = 'Hellox2';

      setInterval( () => {
        this.cnt++;
        this.myWelcome = 'Hello ' + this.cnt;
        console.log('Hello ' + this.cnt);
      }, 1000);
    }

    public onButtonClicked () {
      this.cnt = 0;
    }
}
