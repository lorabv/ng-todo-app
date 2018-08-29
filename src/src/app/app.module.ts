import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './todo-list.service';
import { TodoListStorageService } from './todo-list-storage.service';
import { AuthService } from './auth.service';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InputComponent, ItemComponent, ListManagerComponent, AuthComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TodoListService, TodoListStorageService, AuthService]
})
export class AppModule { }
