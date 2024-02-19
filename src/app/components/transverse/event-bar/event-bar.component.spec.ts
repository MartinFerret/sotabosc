import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBarComponent } from './event-bar.component';

describe('EventBarComponent', () => {
  let component: EventBarComponent;
  let fixture: ComponentFixture<EventBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
