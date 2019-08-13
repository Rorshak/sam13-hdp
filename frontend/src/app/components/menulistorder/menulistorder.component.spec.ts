import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulistorderComponent } from './menulistorder.component';

describe('MenulistorderComponent', () => {
  let component: MenulistorderComponent;
  let fixture: ComponentFixture<MenulistorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenulistorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulistorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
