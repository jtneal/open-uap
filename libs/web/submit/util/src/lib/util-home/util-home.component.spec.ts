import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilsubmitComponent } from './util-submit.component';

describe('UtilsubmitComponent', () => {
  let component: UtilsubmitComponent;
  let fixture: ComponentFixture<UtilsubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilsubmitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UtilsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
