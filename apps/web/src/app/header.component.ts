import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
  ],
  selector: 'app-header',
  styles: `
    header {
      align-items: center;
      border-bottom: 6px dashed rgba(0, 255, 255, 0.5);
      display: flex;
      justify-content: space-between;
      padding-bottom: 1.2rem;
    }

    .menu-button {
      display: none;

      @media (max-width: 768px) {
        display: block;
      }
    }

    nav {
      @media (max-width: 768px) {
        background: #000;
        border-left: 6px dashed rgba(0, 255, 255, 0.5);
        height: 100vh;
        padding: 1.2rem;
        position: fixed;
        right: -250px;
        top: 0;
        transition: right 0.3s ease-in-out;
        width: 250px;
        
        &.open {
          right: 0;
        }

        ul {
          flex-direction: column;
        }
      }

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

      <nav [class.open]="isMenuOpen">
        <ul role="navigation">
          <li><a routerLink="/about" (click)="closeMenu()">About</a></li>
          <li><a routerLink="/search" (click)="closeMenu()">Search</a></li>
          <li><a routerLink="/submit" (click)="closeMenu()">Submit</a></li>
          <li><a routerLink="/advice" (click)="closeMenu()">Advice</a></li>
          <li><a routerLink="/developers" (click)="closeMenu()">Developers</a></li>
          <li><a routerLink="/contact" (click)="closeMenu()">Contact</a></li>
        </ul>
      </nav>

      <button mat-icon-button class="menu-button" (click)="toggleMenu()">
        <mat-icon>{{ isMenuOpen ? 'close' : 'menu' }}</mat-icon>
      </button>
    </header>
  `,
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
