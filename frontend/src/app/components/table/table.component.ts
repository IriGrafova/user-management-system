import { Component, Input, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { TableColumn } from '../../models/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent<T> implements OnInit {
  @Input() tableData: T[] = [];
  @Input() tableColumns: TableColumn[] = [];
  @Input() emptyMessage: string = 'Нет данных';

  displayedColumns: string[] = [];

  ngOnInit() {
    this.displayedColumns = this.tableColumns.map(columns => columns.key);
  }
}
