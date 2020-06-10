import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoekpaginaComponent } from './zoekpagina.component';

describe('ZoekpaginaComponent', () => {
  let component: ZoekpaginaComponent;
  let fixture: ComponentFixture<ZoekpaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoekpaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoekpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
