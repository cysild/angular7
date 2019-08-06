// Import the native Angular services.
import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';

@Component({
selector: 'app-root',
 templateUrl: './app.component.html',
})
export class AppComponent {
  public constructor(private titleService: Title ,private logger: NGXLogger ) { }
// public tit ='hi';
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
//this.tit = newTitle;
    
  }

  

  // implement OnInit's `ngOnInit` method
  //ngOnInit() { this.logIt(`OnInit`); }




 // logIt(msg: string) {

 // this.tit = 'on load';
  //  this.logger.debug(msg);
   //   this.titleService.setTitle('hi ne anuglar' );
 // }

}


