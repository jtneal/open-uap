import { Route } from '@angular/router';
import { AboutComponent } from './pages/about.component';
import { AdviceComponent } from './pages/advice.component';
import { ContactComponent } from './pages/contact.component';
import { DevelopersComponent } from './pages/developers.component';
import { HomeComponent } from './pages/home.component';
import { SearchComponent } from './pages/search.component';
import { SubmitComponent } from './pages/submit.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent },
  { path: 'submit', component: SubmitComponent },
  { path: 'advice', component: AdviceComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'contact', component: ContactComponent },
];
