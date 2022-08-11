import {Component, Input, OnInit} from '@angular/core';
import {IFormCheckboxInputComponent} from "@hoi/components-form-inputs";

@Component({
  selector: 'app-toggle-cell',
  templateUrl: './toggle-cell.component.html',
  styleUrls: ['./toggle-cell.component.scss']
})
export class ToggleCellComponent implements OnInit {

  constructor() { }
  @Input() config!: IFormCheckboxInputComponent;

  ngOnInit(): void {
  }

}
