import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [MatButtonModule, MatCardModule, RouterModule],
  styles: `
    .mat-mdc-card {
      background-color: rgba(0, 0, 0, 0.5) !important;
      border: 2px dashed rgba(0, 255, 255, 0.5) !important;
      border-radius: 12px;
      color: #eee;

      mat-card-header {
        margin-bottom: 1.5rem;
      }
    }

    .mat-mdc-button {
      background-color: rgba(0, 255, 255, 0.5) !important;
      color: #eee !important;
      padding: 0 0.75rem !important;
    }

    .mat-mdc-card-actions {
      padding: 16px !important;
    }`,
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ title() }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <ng-content></ng-content>
      </mat-card-content>
      @if (ctaLink()) {
        <mat-card-actions>
          <a [routerLink]="ctaLink()" mat-button>{{ cta() }}</a>
        </mat-card-actions>
      }
    </mat-card>
  `
})
export class CardComponent {
  title = input('');
  cta = input('Read More');
  ctaLink = input('');
}
