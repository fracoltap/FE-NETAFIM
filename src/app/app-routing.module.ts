import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './modules/users/users-list/users-list.component';
import { UsersFormComponent } from './modules/users/users-form/users-form.component';
import { UsersViewComponent } from './modules/users/users-view/users-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/users', pathMatch: 'full' },
  {
      path: 'main',
      children: [
        {
          path: 'users',
          children: [
          {
            path: '',
            component: UsersListComponent
          },
          {
            path: 'create',
            component: UsersFormComponent
          },
          {
            path: 'edit/:id',
            component: UsersFormComponent
          },
          {
            path: 'details/:id',
            component: UsersViewComponent
          },
        ],    
        },        
        { path: '', redirectTo: 'main/users', pathMatch: 'full' },
      ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
