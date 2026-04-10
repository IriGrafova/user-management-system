import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TableComponent } from '../../components/table/table.component';
import { User } from '../../models/user';
import { TableColumn } from '../../models/table';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../../modals/add-user/add-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HeaderComponent, TableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  private httpClient = inject(HttpClient);
  private dialog = inject(MatDialog);

  users: User[] = [];

  columns: TableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Имя' },
    { key: 'email', label: 'Email' },
    { key: 'age', label: 'Возраст' },
    { key: 'createdAt', label: 'Дата создания' },
  ];

  openAddUserModal() {
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createUser(result);
      }
    });
  }

  createUser(userData: any) {
    this.httpClient.post('http://localhost:5143/api/users', userData)
      .pipe(take(1))
      .subscribe(() => {
        this.refreshUers();
      });
  }

  getUsers() {
    this.httpClient
      .get<User[]>('http://localhost:5143/api/users')
      .pipe(take(1))
      .subscribe((users) => {
        this.users = users.map(user => ({
          ...user,
          createdAt: this.formatDate(user.createdAt)
        }));
      });
  }

  formatDate(date: string | Date | undefined): string {
    if (!date) return '—';
    const formatDate = new Date(date);
    return formatDate.toLocaleDateString('ru-RU');
  }

  refreshUers() {
    this.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
