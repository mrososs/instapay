import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsInstapayComponent } from './what-is-instapay.component';

describe('WhatIsInstapayComponent', () => {
  let component: WhatIsInstapayComponent;
  let fixture: ComponentFixture<WhatIsInstapayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsInstapayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsInstapayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
