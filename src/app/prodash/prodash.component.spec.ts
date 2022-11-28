import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdashComponent } from './prodash.component';

describe('ProductsComponent', () => {
  let component: ProdashComponent;
  let fixture: ComponentFixture<ProdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
