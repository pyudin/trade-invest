import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  // isSmallScreen: Observable<any> = this.breakpointObserver
  //   .observe(['(max-width: 599px)'])
  //   .pipe(map((res) => res.matches));

  ngOnInit() {
    // this.isSmallScreen.subscribe();
  }
}
