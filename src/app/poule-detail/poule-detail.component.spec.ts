import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PouleDetailComponent } from './poule-detail.component';

describe('PouleDetailComponent', () => {
  let component: PouleDetailComponent;
  let fixture: ComponentFixture<PouleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PouleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PouleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
