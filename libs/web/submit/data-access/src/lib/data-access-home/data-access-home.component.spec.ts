import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataAccesssubmitComponent } from './data-access-submit.component';

describe('DataAccesssubmitComponent', () => {
  let component: DataAccesssubmitComponent;
  let fixture: ComponentFixture<DataAccesssubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccesssubmitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAccesssubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
