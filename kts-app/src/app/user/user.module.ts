import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOutletComponent } from './user-outlet/user-outlet.component';
import { UserRoutingModule } from './user-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    declarations: [UserOutletComponent, UsersListComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        TableModule,
        DialogModule,
        FormsModule,
        ToolbarModule,
        ButtonModule,
        InputTextModule,
    ],
    providers: [UserService],
})
export class UserModule {}
