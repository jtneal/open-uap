import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesubmitComponent } from './feature-submit.component';

describe('FeaturesubmitComponent', () => {
  let component: FeaturesubmitComponent;
  let fixture: ComponentFixture<FeaturesubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesubmitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
