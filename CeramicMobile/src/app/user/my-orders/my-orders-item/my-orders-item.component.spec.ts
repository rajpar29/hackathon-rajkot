import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersItemComponent } from './my-orders-item.component';

describe('MyOrdersItemComponent', () => {
  let component: MyOrdersItemComponent;
  let fixture: ComponentFixture<MyOrdersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrdersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
