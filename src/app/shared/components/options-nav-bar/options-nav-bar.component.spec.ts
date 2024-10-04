import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsNavBarComponent } from './options-nav-bar.component';

describe('OptionsNavBarComponent', () => {
  let component: OptionsNavBarComponent;
  let fixture: ComponentFixture<OptionsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionsNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
