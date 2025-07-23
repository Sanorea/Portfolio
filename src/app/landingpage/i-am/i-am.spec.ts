import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAm } from './i-am';

describe('IAm', () => {
  let component: IAm;
  let fixture: ComponentFixture<IAm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IAm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IAm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
