// modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { HomeComponent } from './components/home/home.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { InternalComponent } from './components/internal/internal.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { UserComponent } from './components/user/user.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CartComponent} from './components/cart/cart.component';
import { MenulistorderComponent } from './components/menulistorder/menulistorder.component';
import { AuthGuard } from './auth/auth.guard';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { EditProfileComponent } from './components/user-profile/edit-profile/edit-profile.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PhotoCreateComponent } from './components/photos/photo-create/photo-create.component';
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { MenuListComponent } from './components/menu/menu-list/menu-list.component';
import { MenuCreateComponent } from './components/menu/menu-create/menu-create.component';
import { SalesComponent } from './components/sales/sales.component';

const routes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  {
    path: 'forgot', component: UserComponent,
    children: [{ path: '', component: ForgotPasswordComponent }]
  },
  {
    path: 'reset/:token', component: UserComponent,
    children: [{ path: '', component: ResetPasswordComponent }]
  },
  {
    path: 'home', component: UserComponent,
    children: [{ path: '', component: HomeComponent }]
  },
  {
    path: 'cart', component: CartComponent,
    children: [{ path: '', component: CartComponent }]
  },
  {
    path: 'menulistorder', component: MenulistorderComponent,
    children: [{ path: '', component: MenulistorderComponent }]
  },
  {
    path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]
  },
  { path: 'photos', component: PhotoListComponent, canActivate: [AuthGuard] },
  { path: 'photos/create', component: PhotoCreateComponent, canActivate: [AuthGuard] },
  { path: 'photos/edit/:_id', component: PhotoCreateComponent, canActivate: [AuthGuard] },

  { path: 'menus', component: MenuListComponent, canActivate: [AuthGuard] },
  { path: 'menus/create', component: MenuCreateComponent, canActivate: [AuthGuard] },
  { path: 'menus/edit/:_id', component: MenuCreateComponent, canActivate: [AuthGuard] },

  { path: 'suppliers', component: SuppliersComponent, canActivate: [AuthGuard] },
  { path: 'internal', component: InternalComponent, canActivate: [AuthGuard] },
  { path: 'sales', component: SalesComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: EditProfileComponent, canActivate: [AuthGuard] },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
