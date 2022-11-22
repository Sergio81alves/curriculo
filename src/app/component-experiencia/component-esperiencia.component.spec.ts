import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEsperienciaComponent } from './component-esperiencia.component';

describe('ComponentEsperienciaComponent', () => {
  let component: ComponentEsperienciaComponent;
  let fixture: ComponentFixture<ComponentEsperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEsperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentEsperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
