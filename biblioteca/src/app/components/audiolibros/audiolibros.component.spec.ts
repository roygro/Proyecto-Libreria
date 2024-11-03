import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiolibrosComponent } from './audiolibros.component';

describe('AudiolibrosComponent', () => {
  let component: AudiolibrosComponent;
  let fixture: ComponentFixture<AudiolibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudiolibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiolibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
