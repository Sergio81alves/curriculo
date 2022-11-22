import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAbilidadesComponent } from './component-abilidades.component';

describe('ComponentAbilidadesComponent', () => {
  let component: ComponentAbilidadesComponent;
  let fixture: ComponentFixture<ComponentAbilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentAbilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAbilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
