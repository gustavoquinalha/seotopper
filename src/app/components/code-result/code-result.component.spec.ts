import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeResultComponent } from './code-result.component';

describe('CodeResultComponent', () => {
  let component: CodeResultComponent;
  let fixture: ComponentFixture<CodeResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
