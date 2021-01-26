import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledateComponent } from './tabledate.component';

describe('TabledateComponent', () => {
  let component: TabledateComponent;
  let fixture: ComponentFixture<TabledateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabledateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabledateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
