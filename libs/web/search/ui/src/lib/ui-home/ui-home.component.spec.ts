import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UisearchComponent } from './ui-search.component';

describe('UisearchComponent', () => {
  let component: UisearchComponent;
  let fixture: ComponentFixture<UisearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UisearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UisearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
