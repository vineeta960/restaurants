import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRestaurentComponent } from './list-of-restaurent.component';

describe('ListOfRestaurentComponent', () => {
  let component: ListOfRestaurentComponent;
  let fixture: ComponentFixture<ListOfRestaurentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfRestaurentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
