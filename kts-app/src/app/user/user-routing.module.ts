import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserOutletComponent } from './user-outlet/user-outlet.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
    {
        path: '',
        component: UserOutletComponent,
        children: [
            {
                path: 'users-list',
                component: UsersListComponent,
            },
            // ,
            // {
            //     path: '**',
            //     redirectTo: 'users-list',
            // },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
