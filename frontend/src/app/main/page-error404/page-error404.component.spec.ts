import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageError404Component } from './page-error404.component';

describe('PageError404Component', () => {
  let component: PageError404Component;
  let fixture: ComponentFixture<PageError404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageError404Component]
    });
    fixture = TestBed.createComponent(PageError404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
