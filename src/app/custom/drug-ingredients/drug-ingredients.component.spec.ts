import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugIngredientsComponent } from './drug-ingredients.component';

describe('DrugIngredientsComponent', () => {
  let component: DrugIngredientsComponent;
  let fixture: ComponentFixture<DrugIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
