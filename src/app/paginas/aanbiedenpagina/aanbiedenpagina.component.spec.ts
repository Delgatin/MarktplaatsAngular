import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AanbiedenpaginaComponent } from './aanbiedenpagina.component';

describe('AanbiedenpaginaComponent', () => {
  let component: AanbiedenpaginaComponent;
  let fixture: ComponentFixture<AanbiedenpaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AanbiedenpaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AanbiedenpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
