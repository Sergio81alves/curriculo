import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEducacaoComponent } from './component-educacao.component';

describe('ComponentEducacaoComponent', () => {
  let component: ComponentEducacaoComponent;
  let fixture: ComponentFixture<ComponentEducacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEducacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentEducacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
