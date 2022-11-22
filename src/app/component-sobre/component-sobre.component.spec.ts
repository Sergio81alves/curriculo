import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSobreComponent } from './component-sobre.component';

describe('ComponentSobreComponent', () => {
  let component: ComponentSobreComponent;
  let fixture: ComponentFixture<ComponentSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSobreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
