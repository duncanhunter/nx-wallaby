import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        // imports: [RouterTestingModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
