import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
 
describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should increment counter when increment button is clicked', () => {
    expect(component.count).toBe(0);
    const incrementButton = fixture.nativeElement.querySelector('button:nth-child(1)');
    incrementButton.click();
    fixture.detectChanges();
    expect(component.count).toBe(1);
  });
 
  it('should decrement counter when decrement button is clicked', () => {
    expect(component.count).toBe(0);
    const decrementButton = fixture.nativeElement.querySelector('button:nth-child(2)');
    decrementButton.click();
    fixture.detectChanges();
    expect(component.count).toBe(-1);
  });
});