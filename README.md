# User Management System

Fullstack приложение для управления пользователями. Таблица с пользователями, добавление новых через модальное окно.

## Технологии
- **Backend**: ASP.NET Core 8, Entity Framework Core, PostgreSQL
- **Frontend**: Angular 18, Angular Material

## Запуск проекта

### 1. База данных (PostgreSQL)
- Создать базу `UsersDB` - CREATE DATABASE UsersDB;

### 2. Backend
cd backend
dotnet restore
dotnet run

### 3. Frontend
cd frontend
npm install
ng serve