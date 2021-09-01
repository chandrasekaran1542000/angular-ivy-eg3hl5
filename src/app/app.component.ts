import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  isOn:boolean=false;
  check(){
    this.isOn=!this.isOn;
    console.log(this.isOn);
  }

}
