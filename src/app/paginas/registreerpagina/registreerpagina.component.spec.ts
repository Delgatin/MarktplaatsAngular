import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreerpaginaComponent } from './registreerpagina.component';

describe('RegistreerpaginaComponent', () => {
  let component: RegistreerpaginaComponent;
  let fixture: ComponentFixture<RegistreerpaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreerpaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreerpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
