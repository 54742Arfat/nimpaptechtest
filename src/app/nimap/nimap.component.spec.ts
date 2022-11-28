import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NimapComponent } from './nimap.component';

describe('NimapComponent', () => {
  let component: NimapComponent;
  let fixture: ComponentFixture<NimapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NimapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NimapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
