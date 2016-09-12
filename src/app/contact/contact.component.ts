import {Component} from '@angular/core';

@Component({
  selector: `contact`,
  styles: [`
    .ng-valid[required] { border: 2px solid green; }
    .ng-valid { background-color: rgba(0,255,0,0.3); }
    .ng-invalid { border: 2px solid red; }
    .alert { color: orange; }
  `],
  template: `
    <h1>Contact</h1>
    <form #f="ngForm" (ngSubmit)="onSubmit(f.form.value)">
      <label>Email:</label>
      <input type="email" 
        [(ngModel)]="model.email"
        required
        name="email"
        #email="ngModel">
        <div [hidden]="email.valid || email.pristine" class="alert alert-danger">Email is required</div>
      <p><button type="submit" [disabled]="!f.form.valid">Submit</button></p>
    </form>`
})

export class Contact {
  model = {};

  onSubmit(value) {
    console.log(`Submitted ${JSON.stringify(value)}`);
  }
}
