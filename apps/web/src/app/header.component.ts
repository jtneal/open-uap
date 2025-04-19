import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-header',
  styles: `
    header {
      align-items: center;
      border-bottom: 6px dashed rgba(0, 255, 255, 0.5);
      display: flex;
      justify-content: space-between;
      padding-bottom: 1.2rem;

      ul {
        display: flex;
        font-size: 1rem;
        gap: 1.5rem;
      }
    }
  `,
  template: `
    <header>
      <h1><a routerLink="/">open-uap</a></h1>
      <nav>
        <ul role="navigation">
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/search">Search</a></li>
          <li><a routerLink="/submit">Submit</a></li>
          <li><a routerLink="/advice">Advice</a></li>
          <li><a routerLink="/developers">Developers</a></li>
          <li><a routerLink="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
