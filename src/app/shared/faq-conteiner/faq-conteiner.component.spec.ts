import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqConteinerComponent } from './faq-conteiner.component';

describe('FaqConteinerComponent', () => {
  let component: FaqConteinerComponent;
  let fixture: ComponentFixture<FaqConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqConteinerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
