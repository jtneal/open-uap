import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataAccessHomeComponent } from './data-access-home.component';

describe('DataAccessHomeComponent', () => {
  let component: DataAccessHomeComponent;
  let fixture: ComponentFixture<DataAccessHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccessHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAccessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
