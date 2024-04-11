import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqConteiner2Component } from './faq-conteiner2.component';

describe('FaqConteiner2Component', () => {
  let component: FaqConteiner2Component;
  let fixture: ComponentFixture<FaqConteiner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqConteiner2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqConteiner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
