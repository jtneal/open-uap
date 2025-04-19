import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-footer',
  styles: `
    footer section {
      align-items: center;
      border-top: 6px dashed rgba(0, 255, 255, 0.5);
      display: flex;
      justify-content: space-between;
      padding: 1.2rem 0;

      ul {
        display: flex;
        font-size: 1rem;
        gap: 1.5rem;
      }
    }
  `,
  template: `
    <footer>
      <section>
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
      </section>
    </footer>
  `,
})
export class FooterComponent {}
