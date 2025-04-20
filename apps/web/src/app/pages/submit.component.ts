import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportFormComponent } from './report-form.component';

@Component({
  imports: [ReportFormComponent, RouterModule],
  selector: 'app-submit',
  template: `
    <h2>Submit</h2>
    <app-report-form></app-report-form>
  `,
})
export class SubmitComponent {}
