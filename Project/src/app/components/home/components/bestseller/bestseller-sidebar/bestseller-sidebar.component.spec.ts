import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellerSidebarComponent } from './bestseller-sidebar.component';

describe('BestsellerSidebarComponent', () => {
  let component: BestsellerSidebarComponent;
  let fixture: ComponentFixture<BestsellerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellerSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
