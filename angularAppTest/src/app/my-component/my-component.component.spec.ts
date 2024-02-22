import { ComponentFixture, TestBed } from '@angular/core/testing';
 
import { MyComponentComponent } from './my-component.component';
 
describe('MyComponentComponent', () => {
  let component: MyComponentComponent;
  let fixture: ComponentFixture<MyComponentComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should calculate sum correctly', () => {
    component.calculateSum(3, 5);
    expect(component.result).toEqual(8);
  });
 
  it('should handle negative numbers correctly', () => {
    component.calculateSum(-3, 5);
    expect(component.result).toEqual(2);
  });
 
  it('should handle zero correctly', () => {
    component.calculateSum(0, 5);
    expect(component.result).toEqual(5);
  });
});