import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataAccesssearchComponent } from './data-access-search.component';

describe('DataAccesssearchComponent', () => {
  let component: DataAccesssearchComponent;
  let fixture: ComponentFixture<DataAccesssearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccesssearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAccesssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
