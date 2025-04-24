import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationTuteurAbdessalemComponent } from './presentation-tuteur-abdessalem.component';

describe('PresentationTuteurAbdessalemComponent', () => {
  let component: PresentationTuteurAbdessalemComponent;
  let fixture: ComponentFixture<PresentationTuteurAbdessalemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationTuteurAbdessalemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationTuteurAbdessalemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
