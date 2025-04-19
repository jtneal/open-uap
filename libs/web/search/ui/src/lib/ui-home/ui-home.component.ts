import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-ui-search',
  templateUrl: './ui-search.component.html',
  styleUrls: ['./ui-search.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule
  ]
})
export class UisearchComponent {
  shapes = ['Blimp', 'Boomerang', 'Bullet/Missile', 'Cigar', 'Circle', 'Cone', 'Cross', 'Diamond', 'Disk', 'Egg', 'Fireball', 'Flash', 'Formation', 'Light', 'Other', 'Oval', 'Rectangle', 'Sphere', 'Triangle', 'Unknown'];
  
  colors = ['White', 'Grey/Lead', 'Black', 'Gold/Copper', 'Blue', 'Green', 'Orange', 'Purple', 'Red', 'Yellow', 'Unknown'];
  
  distances = ['Less than 50 feet', '50-100 feet', '101-500 feet', '501-1000 feet', 'Over 1 mile', 'Unknown'];
  
  states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
}
