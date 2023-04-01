import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefalutComponent } from './defalut.component';

describe('DefalutComponent', () => {
  let component: DefalutComponent;
  let fixture: ComponentFixture<DefalutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefalutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefalutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
