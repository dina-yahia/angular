import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortcopyComponent } from './portcopy.component';

describe('PortcopyComponent', () => {
  let component: PortcopyComponent;
  let fixture: ComponentFixture<PortcopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortcopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortcopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
