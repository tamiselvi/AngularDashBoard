import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  path: "user",
  component: UserComponent,
  children : [
    {
      path : "list",
      component : UserListComponent
    },
    {
      path : "create",
      component : UserCreateComponent
    },
    {
      path : "edit/:id",
      component : UserEditComponent
    },
    {
      path : "view/:id",
      component : UserViewComponent
    }
  ]
}, {
  path: "product",
  component: ProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
