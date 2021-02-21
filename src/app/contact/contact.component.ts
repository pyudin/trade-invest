import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  // submitted = false;

  // emailImnput: any;
  // isValid$: Observable<any>;

  constructor() {}

  ngOnInit(): void {
    // this.emailImnput = document.querySelector('#email');
    // this.isValid$ = fromEvent(this.emailImnput, 'input').pipe(
    //   map((event) => event.target.value),
    //   map((value) => this.isValid(value))
    // );
    // this.isValid$.subscribe();
  }

  // onSubmit() {
  //   this.submitted = true;
  // }

  // isValid(email: string): boolean {
  //   return email.indexOf('@') > -1;
  // }
}
