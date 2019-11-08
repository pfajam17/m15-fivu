import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'u02-bottstrap';

  public close(alert: any) {
    console.log(alert);
  }
}
