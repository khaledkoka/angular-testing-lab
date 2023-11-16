import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineComponent } from './machine.component';

describe('MachineComponent', () => {
  let component: MachineComponent;
  let fixture: ComponentFixture<MachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineComponent]
    });
    fixture = TestBed.createComponent(MachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#switchStatus() should toggle #isOn', () => {
    const comp = new MachineComponent();
    expect(comp.isOn).withContext('off at first').toBe(false); // isOn value starts as false
    comp.switchStatus(); // Test the function as if the click event was triggered 
    expect(comp.isOn).withContext('on after switchStatus call').toBe(true); // Now isOn should be true 
    comp.switchStatus(); // Trigger the click again 
    expect(comp.isOn).withContext('off after switchStatus second call').toBe(false); // Now the value should be false
  })

  it('#switchStatus() should set #message to "is on"', () => {
    const comp = new MachineComponent();
    expect(comp.message).withContext('off at first').toMatch(/is off/i);
    comp.switchStatus();
    expect(comp.message).withContext('on after switchStatus').toMatch(/is on/i);
  })
});
