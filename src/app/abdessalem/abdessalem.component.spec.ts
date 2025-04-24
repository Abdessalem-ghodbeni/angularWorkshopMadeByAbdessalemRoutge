import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdessalemComponent } from './abdessalem.component';

describe('AbdessalemComponent', () => {
  let component: AbdessalemComponent;
  let fixture: ComponentFixture<AbdessalemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbdessalemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbdessalemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
