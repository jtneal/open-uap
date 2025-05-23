import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { CardComponent } from '../card.component';

@Component({
  imports: [GoogleMapsModule, RouterModule, CardComponent],
  selector: 'app-home',
  styles: `
    .map-container {
      border-radius: 16px;
      margin-top: 1.5rem;
      overflow: hidden;
    }

    .cards-container {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 1.5rem;

      app-card {
        flex: 1 0 calc(50% - 16px);
      }
    }

    p {
      margin-top: 0 !important;
    }
  `,
  template: `
    <h2>Recent Sightings</h2>
    <div class="map-container">
      <google-map
        [center]="center"
        [zoom]="zoom"
        [options]="mapOptions"
        height="600px"
        width="100%">
        @for (marker of markers; track marker.position) {
          <map-marker
            [position]="marker.position"
            [title]="marker.title"
            [icon]="icon">
          </map-marker>
        }
      </google-map>
    </div>

    <section class="cards-container">

      <app-card title="About" ctaLink="/about" cta="Read More">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </app-card>

      <app-card title="Search" ctaLink="/search" cta="Read More">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </app-card>

      <app-card title="Submit" ctaLink="/submit" cta="Read More">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </app-card>

      <app-card title="Advice" ctaLink="/advice" cta="Read More">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </app-card>

      <app-card title="Developers" ctaLink="/developers" cta="Read More">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </app-card>

      <app-card title="Contact" ctaLink="/contact" cta="Read More">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </app-card>
    </section>

    <!-- UFOs in the news -->
  `,
})
export class HomeComponent {
  center: google.maps.LatLngLiteral = { lat: 39.8283, lng: -98.5795 }; // Center of USA
  zoom = 4;

  markers = [
    { position: { lat: 40.7128, lng: -74.0060 }, title: 'New York Sighting' },
    { position: { lat: 34.0522, lng: -118.2437 }, title: 'Los Angeles Sighting' },
    { position: { lat: 41.8781, lng: -87.6298 }, title: 'Chicago Sighting' },
    { position: { lat: 29.7604, lng: -95.3698 }, title: 'Houston Sighting' },
    { position: { lat: 33.4484, lng: -111.9881 }, title: 'Phoenix Sighting' },
    { position: { lat: 39.9526, lng: -75.1638 }, title: 'Philadelphia Sighting' },
    { position: { lat: 29.4241, lng: -98.4941 }, title: 'San Antonio Sighting' },
    { position: { lat: 32.7157, lng: -117.1611 }, title: 'San Diego Sighting' },
    { position: { lat: 32.7761, lng: -96.7970 }, title: 'Dallas Sighting' },
    { position: { lat: 37.3382, lng: -121.8863 }, title: 'San Jose Sighting' },
    { position: { lat: 39.7684, lng: -86.1581 }, title: 'Indianapolis Sighting' },
    { position: { lat: 38.9072, lng: -77.0290 }, title: 'Washington, D.C. Sighting' },
    { position: { lat: 47.6062, lng: -122.3321 }, title: 'Seattle Sighting' },
    { position: { lat: 39.7392, lng: -104.9903 }, title: 'Denver Sighting' },
    { position: { lat: 30.2672, lng: -97.7431 }, title: 'Austin Sighting' },
    { position: { lat: 30.3322, lng: -81.6555 }, title: 'Jacksonville Sighting' },
    { position: { lat: 32.7315, lng: -97.0731 }, title: 'Fort Worth Sighting' },
    { position: { lat: 40.0097, lng: -82.9988 }, title: 'Columbus Sighting' },
    { position: { lat: 35.2272, lng: -80.8437 }, title: 'Charlotte Sighting' },
    { position: { lat: 38.5816, lng: -121.4944 }, title: 'Sacramento Sighting' },
    { position: { lat: 38.8728, lng: -77.0333 }, title: 'Arlington Sighting' },
    { position: { lat: 35.1797, lng: -96.7384 }, title: 'Oklahoma City Sighting' },
    { position: { lat: 33.8001, lng: -118.1952 }, title: 'Long Beach Sighting' },
    { position: { lat: 39.0956, lng: -94.5705 }, title: 'Kansas City Sighting' },
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
        stylers: [{ color: '#111111' }]
      },
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#888888' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#000000' }]
      }
    ]
  };

  icon = 'data:image/svg+xml;utf-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 128 128" width="16"><path d="M106.13 42.46c-.07 1.32.89 2.47 2.24 2.43 1.2-.04 1.99-1.41 1.95-2.3s-1.08-1.97-2.14-2.03c-1.05-.08-2 1.1-2.05 1.9M35.17 4.46c-.84.93-.57 2.31.21 2.82s1.95.46 2.52-.24c.51-.63.57-1.89-.21-2.67-.67-.68-1.98-.51-2.52.09" style="opacity:.5;fill:#fff"/><path d="M113.6 95.23s1.15-3.3 1.84-3.34 1.69 3.3 1.69 3.3 3.42.04 3.65.54c.3.64-2.19 2.8-2.19 2.8s.81 3.23.42 3.61c-.42.42-3.38-1.27-3.38-1.27s-3.03 2.11-3.69 1.54c-.57-.5.61-3.92.61-3.92s-2.84-2.07-2.69-2.65c.23-.8 3.74-.61 3.74-.61M115.95 36.58c-.17 2 1.26 3.7 3.31 3.58 1.83-.11 3.28-1.65 3.07-3.56-.23-2.06-1.57-2.93-3.18-2.99s-3.1 1.76-3.2 2.97M25.23 16.26c-.23 1.76.92 3.21 2.75 3.21 1.67 0 2.98-1.6 2.87-3.27-.12-1.8-1.4-2.73-2.93-2.6-1.42.12-2.56 1.6-2.69 2.66" style="fill:#fff"/><path d="M81.04 109.17c-.16 1.87 1.17 3.45 3.09 3.34 1.7-.1 3.06-1.54 2.86-3.32-.21-1.93-1.46-2.74-2.96-2.79s-2.89 1.64-2.99 2.77" style="opacity:.5;fill:#fff"/><radialGradient id="a" cx="50.021" cy="75.73" r="49.077" gradientUnits="userSpaceOnUse"><stop offset=".171" style="stop-color:#4cf9ff;stop-opacity:.7"/><stop offset="1" style="stop-color:#4cf9ff;stop-opacity:0"/></radialGradient><path d="m36.85 74.12-20.86 39.06 16.42 13.76h28.41l9.76-42.17z" style="fill:url(#a)"/><path d="M19.36 66.25C18.27 65 12.64 55.62 9.83 48.59S4.21 31.87 4.21 31.87l45.16 5 74.07 41.56s-7.5 4.53-17.5 9.06-15 5.63-16.09 5.94-15.03.8-38.28-8.28c-22.83-8.9-32.21-18.9-32.21-18.9" style="fill:#848484"/><path d="m16.3 30.12-9.79-.92s-1.29 0-2.03.83-.28 1.85-.28 1.85 20 18.21 55.94 32.51c38.69 15.39 63.29 14.06 63.29 14.06s1.08-.54 1.08-1.63-.87-1.83-.87-1.83L62.73 46.71z" style="fill:#9a9a9a"/><path d="M72.02 30.05c-15.98-6.85-27.35-5.47-32.35-5.31S6.52 29.2 6.52 29.2s23.47 19.76 55.81 31.95 61.31 13.83 61.31 13.83-12.56-15.86-20.21-23.83c-10.28-10.7-17.19-15.01-31.41-21.1" style="fill:#b0b0b0"/><path d="M31.86 27.89c-1.43-.83-13.07 1.27-13.07 5.05 0 2.81 6.09 6.17 12.03 9.3 5.21 2.75 14.11 6.49 14.51 4.09.47-2.81-9.38-5.45-12.43-10.58-2.24-3.77.88-6.73-1.04-7.86" style="fill:#e3e3df"/><path d="M103.38 54.91c-1.89.09-2.08 3.37-6.82 4.81s-14.86-1.22-16.11.25c-2.41 2.81 24.94 12.19 30.39 7.86 4.05-3.22-5.7-13-7.46-12.92" style="fill:#9a9a9a"/><path d="M44.81 23.22s-1.48 2.48-1.2 4.25c.46 2.95 6 8.77 23.63 15.42 18.26 6.88 27.79 5.26 28.99 3.6.87-1.21.83-3.88.83-3.88L69.82 30.05z" style="fill:#4b7179"/><path d="M44.81 23.22s12.3-21.77 36.06-12.95c21.52 7.99 16.19 32.34 16.19 32.34s-28.32-6.52-29.87-7.46c-1.56-.93-22.38-11.93-22.38-11.93" style="fill:#64dac1"/><path d="M68.72 38.73c-22.39-8.74-23.91-15.51-23.91-15.51s8.76-1.64 27.79 5.45C92.9 36.24 97.06 42.6 97.06 42.6s-9.42 3.51-28.34-3.87" style="fill:#53b4a0"/><path d="M70.84 29.03s1.44-3.29 1.11-4.8c-.55-2.49-2.14-4.91-1.11-7.29 1.48-3.42 4.57-4.3 8.59-2.77 3.88 1.48 4.7 5.17 3.6 7.57-1.48 3.23-3.78 2.77-5.45 4.25-1.42 1.26-2.49 4.71-2.49 4.71z" style="fill:#53b4a0"/><path d="M51.23 27.74c2.41.97 4.2-3.92 8.89-8.44 5.57-5.37 13.66-7.13 13.11-8.7-.63-1.86-10.74-.97-17.33 4.72-6.23 5.39-7.35 11.33-4.67 12.42M87.76 39.95c-.13 1.92 3.65 2.62 5.69 1.02 2.73-2.13 2.5-7.02.45-7.23-1.92-.19-1.66 2.43-2.94 3.58s-3.1 1.2-3.2 2.63" style="fill:#9cfcec"/><radialGradient id="b" cx="33.977" cy="66.889" r="9.882" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#53b4a0"/><stop offset="1" style="stop-color:#53b4a0;stop-opacity:0"/></radialGradient><ellipse cx="33.98" cy="66.89" rx="9.78" ry="9.99" style="fill:url(#b)"/><radialGradient id="c" cx="54.899" cy="77.63" r="10.812" gradientTransform="matrix(1 0 0 .9422 0 4.49)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#53b4a0"/><stop offset="1" style="stop-color:#53b4a0;stop-opacity:0"/></radialGradient><ellipse cx="54.9" cy="77.63" rx="11.02" ry="10.6" style="fill:url(#c)"/><radialGradient id="d" cx="76.289" cy="83.281" r="9.882" gradientTransform="matrix(.9468 0 0 .9216 3.509 7.294)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#53b4a0"/><stop offset="1" style="stop-color:#53b4a0;stop-opacity:0"/></radialGradient><ellipse cx="75.74" cy="84.05" rx="9.26" ry="9.2" style="fill:url(#d)"/><radialGradient id="e" cx="96.075" cy="85.196" r="8.971" gradientTransform="matrix(.9598 -.2807 .2642 .9033 -18.681 35.09)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#53b4a0"/><stop offset="1" style="stop-color:#53b4a0;stop-opacity:0"/></radialGradient><path d="M104.76 82.53c1.35 4.63-1.45 9.52-6.27 10.93s-9.82-1.2-11.17-5.83 1.45-9.52 6.27-10.93c4.81-1.41 9.81 1.2 11.17 5.83" style="fill:url(#e)"/><radialGradient id="f" cx="20.301" cy="54.059" r="10.382" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#53b4a0;stop-opacity:.7"/><stop offset="1" style="stop-color:#53b4a0;stop-opacity:0"/></radialGradient><ellipse cx="20.3" cy="54.06" rx="9.78" ry="9.99" style="fill:none;stroke:url(#f);stroke-miterlimit:10"/><path d="M31.43 64.13c-1.76 1.86-1.72 4.82.47 6.44 2.12 1.57 4.48.63 5.57-.71s1.26-4.24-.47-5.73c-1.72-1.49-4.24-1.41-5.57 0" style="fill:#53b4a0"/><path d="M32.76 65.94c-.74.8-.83 2 .16 2.91.94.86 2.43.55 2.98-.24.67-.96.47-2.36-.39-2.91s-1.88-.71-2.75.24" style="fill:#9cfcec"/><path d="M50.2 76.69c-.94 2.28.63 4.79 3.53 5.5 2.54.62 4.87-.63 5.42-2.91.51-2.13-.59-4.61-3.3-5.26-2.28-.55-4.61.15-5.65 2.67" style="fill:#53b4a0"/><path d="M53.18 76.58c-.74.79-.83 1.98.16 2.87.94.85 2.43.54 2.98-.23.67-.94.47-2.33-.39-2.87-.87-.55-1.89-.7-2.75.23" style="fill:#9cfcec"/><path d="M73.17 81.03c-1.82 1.6-1.82 4.46.06 6.3 1.64 1.6 4.02 1.49 5.54-.27 1.42-1.65 1.76-4.29.01-6-1.48-1.44-3.59-1.8-5.61-.03" style="fill:#53b4a0"/><path d="M77.27 82.65c-.76-.78-1.92-.91-2.83.07-.87.94-.61 2.49.13 3.08.91.72 2.28.56 2.84-.32.57-.86.75-1.91-.14-2.83" style="fill:#9cfcec"/><path d="M97.34 80.83c-2.37-.42-4.65 1.28-4.96 3.8-.27 2.2 1.27 3.93 3.59 4.02 2.17.09 4.47-1.22 4.76-3.56.23-1.98-.76-3.8-3.39-4.26" style="fill:#53b4a0"/><path d="M94.49 84.65c-.03 1.1.69 2.04 2.04 2.02 1.3-.02 2.23-1.28 2.14-2.24-.12-1.17-1.19-2.06-2.22-1.86s-1.92.79-1.96 2.08" style="fill:#9cfcec"/><radialGradient id="g" cx="19.846" cy="54.903" r="9.882" gradientTransform="rotate(-56.933 19.661 54.439)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#53b4a0"/><stop offset="1" style="stop-color:#53b4a0;stop-opacity:0"/></radialGradient><path d="M25.49 46.34c4.62 3.01 5.98 9.12 3.03 13.64s-9.08 5.75-13.7 2.74-5.98-9.12-3.03-13.64 9.07-5.75 13.7-2.74" style="fill:url(#g)"/><path d="M18.79 50.62c-2.36.98-3.12 3.32-2.2 5.57.86 2.12 3.06 3.06 5.18 2.36s3.53-3.14 2.36-5.65c-1.15-2.45-3.46-3.06-5.34-2.28" style="fill:#53b4a0"/><path d="M19.15 52.63c-.99.64-1.2 1.98-.49 3.04s2.19.99 2.97.35.99-2.12.21-3.04-1.89-.87-2.69-.35" style="fill:#9cfcec"/></svg>');
}
