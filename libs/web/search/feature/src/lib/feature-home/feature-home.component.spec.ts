import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesearchComponent } from './feature-search.component';

describe('FeaturesearchComponent', () => {
  let component: FeaturesearchComponent;
  let fixture: ComponentFixture<FeaturesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
