import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentEditComponent } from './resident-edit.component';

describe('ResidentEditComponent', () => {
  let component: ResidentEditComponent;
  let fixture: ComponentFixture<ResidentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
