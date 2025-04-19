import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

@Component({
  imports: [FooterComponent, HeaderComponent, RouterModule],
  selector: 'app-root',
  styles: `
    main {
      padding: 1.5rem 0;
    }
  `,
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
