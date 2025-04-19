import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UisubmitComponent } from './ui-submit.component';

describe('UisubmitComponent', () => {
  let component: UisubmitComponent;
  let fixture: ComponentFixture<UisubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UisubmitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UisubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
