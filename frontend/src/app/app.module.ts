// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { NgxPaginationModule } from 'ngx-pagination';

// services, pipes and auth
import { UserService } from './services/user.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FilterInternalPipe } from './pipes/filter-internal.pipe';
import { FilterSupplierPipe } from './pipes/filter-supplier.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { InternalComponent } from './components/internal/internal.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { EditProfileComponent } from './components/user-profile/edit-profile/edit-profile.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PhotoCreateComponent } from './components/photos/photo-create/photo-create.component';
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { MenuCreateComponent } from './components/menu/menu-create/menu-create.component';
import { MenuListComponent } from './components/menu/menu-list/menu-list.component';
import { HeaderComponent } from './components/header/header.component';
import { SalesComponent } from './components/sales/sales.component';
import { CartComponent} from './components/cart/cart.component';
import { MenulistorderComponent } from './components/menulistorder/menulistorder.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderComponent } from './components/order/order.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CartComponent,
        MenulistorderComponent,
        CheckoutComponent,
        OrderComponent,
        SuppliersComponent,
        InternalComponent,
        UserComponent,
        SignUpComponent,
        UserProfileComponent,
        SignInComponent,
        FilterInternalPipe,
        SidenavComponent,
        ForgotPasswordComponent,
        EditProfileComponent,
        FilterSupplierPipe,
        ResetPasswordComponent,
        NotFoundComponent,
        PhotoCreateComponent,
        PhotoListComponent,
        MenuCreateComponent,
        MenuListComponent,
        HeaderComponent,
        SalesComponent,
        TruncatePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,
        NgxPaginationModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }, AuthGuard, UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
