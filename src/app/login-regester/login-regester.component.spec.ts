import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegesterComponent } from './login-regester.component';

describe('LoginRegesterComponent', () => {
  let component: LoginRegesterComponent;
  let fixture: ComponentFixture<LoginRegesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginRegesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRegesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
