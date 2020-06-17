import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreerpaginaComponent } from './registreerpagina.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RegistreerpaginaComponent', () => {
  let component: RegistreerpaginaComponent;
  let fixture: ComponentFixture<RegistreerpaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreerpaginaComponent ]
    })
    .compileComponents();
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreerpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('try ternairy', () => {
    const wachtwoord1 = 'wachtwoord1';
    const wachtwoord2 = 'wachtwoord1';
    // @ts-ignore
    expect(wachtwoord1 && wachtwoord2 && wachtwoord2 === wachtwoord1 ? null : true).toBe(null);
  });
});
