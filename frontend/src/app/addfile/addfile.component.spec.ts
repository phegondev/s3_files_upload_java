import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfileComponent } from './addfile.component';

describe('AddfileComponent', () => {
  let component: AddfileComponent;
  let fixture: ComponentFixture<AddfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
