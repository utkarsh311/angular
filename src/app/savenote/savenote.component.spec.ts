import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavenoteComponent } from './savenote.component';

describe('SavenoteComponent', () => {
  let component: SavenoteComponent;
  let fixture: ComponentFixture<SavenoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavenoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
