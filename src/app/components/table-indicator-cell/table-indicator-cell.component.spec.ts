import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIndicatorCellComponent } from './table-indicator-cell.component';

describe('TableIndicatorCellComponent', () => {
  let component: TableIndicatorCellComponent;
  let fixture: ComponentFixture<TableIndicatorCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableIndicatorCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIndicatorCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
