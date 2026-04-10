import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
// import { ModalService } from '../../services/modal.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() openAddModal = new EventEmitter<void>();
  @Output() refreshTable = new EventEmitter<void>();

  onAddClick() {
    this.openAddModal.emit();
  }
  
  onRefreshClick() {
    this.refreshTable.emit();
  }
}
