import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLadoEsquerdoComponent } from './component-lado-esquerdo.component';

describe('ComponentLadoEsquerdoComponent', () => {
  let component: ComponentLadoEsquerdoComponent;
  let fixture: ComponentFixture<ComponentLadoEsquerdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLadoEsquerdoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLadoEsquerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
