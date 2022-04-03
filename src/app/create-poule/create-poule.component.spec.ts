import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePouleComponent } from './create-poule.component';

describe('CreatePouleComponent', () => {
  let component: CreatePouleComponent;
  let fixture: ComponentFixture<CreatePouleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePouleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePouleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
