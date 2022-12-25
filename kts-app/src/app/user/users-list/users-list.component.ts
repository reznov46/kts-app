import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
    usersList!: User[];
    userDialog: boolean = false;
    user: User = {};

    columns = [
        {
            field: 'username',
            header: 'Username',
            style: { width: '200px' },
            dataType: 'text',
        },
        {
            field: 'createdAt',
            header: 'Utworzony',
            dataType: 'date',
        },
        {
            field: 'maintanance',
            header: '',
            dataType: 'maintanance',
        },
    ];
    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers() {
        this.userService.getUsers().subscribe((res: any) => {
            this.usersList = res;
        });
    }

    hideDialog() {
        this.userDialog = false;
    }

    editUser(user: User) {
        console.log(user);
        this.user = { ...user };
        this.userDialog = true;
    }

    saveUser() {
        if (this.user._id === undefined) {
            this.userService.postUser(this.user).subscribe((res: User) => {
                console.log(res);
                this.getUsers();
                this.hideDialog();
            });
            return;
        }
        this.userService.patchUser(this.user).subscribe((res: User) => {
            console.log(res);
            this.getUsers();
            this.hideDialog();
        });
    }
    openNew() {
        this.user = {};
        this.userDialog = true;
    }
}
