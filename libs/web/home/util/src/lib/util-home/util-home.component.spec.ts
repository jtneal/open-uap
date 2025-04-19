import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilHomeComponent } from './util-home.component';

describe('UtilHomeComponent', () => {
  let component: UtilHomeComponent;
  let fixture: ComponentFixture<UtilHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UtilHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
