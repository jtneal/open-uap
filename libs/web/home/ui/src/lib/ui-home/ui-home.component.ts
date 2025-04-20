import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-home',
  templateUrl: './ui-home.component.html',
  styleUrls: ['./ui-home.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class UiHomeComponent {
  center: google.maps.LatLngLiteral = { lat: 39.8283, lng: -98.5795 }; // Center of USA
  zoom = 4;
  
  // Sample UFO sightings - you'll want to replace these with real data
  markers = [
    { position: { lat: 40.7128, lng: -74.0060 }, title: 'New York Sighting' },
    { position: { lat: 34.0522, lng: -118.2437 }, title: 'Los Angeles Sighting' },
    { position: { lat: 41.8781, lng: -87.6298 }, title: 'Chicago Sighting' }
  ];

  mapOptions: google.maps.MapOptions = {
    styles: [
      {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [{ color: '#242f3e' }]
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#242f3e' }]
      },
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      }
    ]
  };

  markerOptions: google.maps.MarkerOptions = {
    icon: {
      url: 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300ff00"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>',
      scaledSize: new google.maps.Size(30, 30)
    }
  };
}
