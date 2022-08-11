import {Component, OnInit} from '@angular/core';
import {
  GenericTableHeaderSortingTypes,
  IGenericTableComponent,
  IGenericTableSectionComponent
} from "@hoi/components-ui";
import {BehaviorSubject} from "rxjs";
import {TableCellComponent} from "../table-cell/table-cell.component";
import {TableIndicatorCellComponent} from "../table-indicator-cell/table-indicator-cell.component";
import {ToggleCellComponent} from "../toggle-cell/toggle-cell.component";
import {FormCheckboxInputComponent, IFormCheckboxInputComponent} from "@hoi/components-form-inputs";
import addDays from 'date-fns/addDays';
import {addWeeks, format, startOfWeek} from "date-fns";

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.scss']
})
export class TableWrapperComponent implements OnInit {

  constructor() {
    this.constructHeader()
  }

  private ToggleConfig: IFormCheckboxInputComponent = {
    toggleView: true,
    label: 'Toggle'

  }
  // Sections worden best afgehandeld door aparte mappers
  public sections: IGenericTableSectionComponent[] = [
    {
      sectionTitle: 'Titel 1',
      rows: [
        {
          cellComponents: [
            {component: TableIndicatorCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
          ]
        },
        {
          cellComponents: [
            {component: TableIndicatorCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
            {component: TableCellComponent, config: undefined},
          ]
        }
      ]
    },
    {
      sectionTitle: 'Toggles 1',
      rows: [
        {
          // Objects.Assign to kill the references
          cellComponents: [
            {component: TableIndicatorCellComponent, config: undefined},
            {component: ToggleCellComponent, config: Object.assign({}, this.ToggleConfig)},
            {component: ToggleCellComponent, config: Object.assign({}, this.ToggleConfig)},
            {component: ToggleCellComponent, config: Object.assign({}, this.ToggleConfig)},
            {component: ToggleCellComponent, config: Object.assign({}, this.ToggleConfig)},
            {component: ToggleCellComponent, config: Object.assign({}, this.ToggleConfig)},
            {component: ToggleCellComponent, config: Object.assign({}, this.ToggleConfig)},
            {component: ToggleCellComponent, config: Object.assign({}, this.ToggleConfig)},
          ]
        },
        {
          cellComponents: [
            {component: TableIndicatorCellComponent, config: undefined},
            {component: FormCheckboxInputComponent, config: {label: 'Checkbox'}},
            {component: FormCheckboxInputComponent, config: {label: 'Checkbox'}},
            {component: FormCheckboxInputComponent, config: {label: 'Checkbox'}},
            {component: FormCheckboxInputComponent, config: {label: 'Checkbox'}},
            {component: FormCheckboxInputComponent, config: {label: 'Checkbox'}},
            {component: FormCheckboxInputComponent, config: {label: 'Checkbox'}},
            {component: FormCheckboxInputComponent, config: {label: 'Checkbox'}},
          ]
        }
      ]
    }
  ]


  dateHeaderClicked = (index: number) => {
    this.tableConfig.headerConfig.selectedIndex = index

  }

  ngOnInit(): void {
  }

  monday = startOfWeek(new Date(), {weekStartsOn: 1})
  private constructHeader = () => {

    let dates: Date[] = []
    for (let i = 0; i < 7; i++) {
      dates.push(addDays(this.monday, i))
    }
    this.dateHeaderObservable.next(dates.map(date => {
      return {
        date: date,
        // Date format
        label: format(date, 'dd LLLL')
      }
    }))
    this.monday = addWeeks(this.monday, 1)
  }
  // Date controls komen van extern
  dateHeaderObservable = new BehaviorSubject<{
    label: string;
    date: Date;
  }[]>([])
  sectionConfigsObs = new BehaviorSubject<IGenericTableSectionComponent[]>(this.sections)
  tableConfig: IGenericTableComponent = {
    headerConfig: {
      dateHeaderObservable: this.dateHeaderObservable,
      stickySectionConfigs: new BehaviorSubject<IGenericTableSectionComponent[]>([]),
      selectedSortingType: GenericTableHeaderSortingTypes.NONE,
      headerButtonConfig: {
        text: 'next week',
        clickFunction: this.constructHeader
      }
    },
    sectionConfigs: this.sectionConfigsObs
  }
}
