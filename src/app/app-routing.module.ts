import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/adminPages/dashboard/dashboard.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '', pathMatch: 'full', redirectTo: '' },
  // USUARIO LOGUEADO
  {
    path: 'home',
    component: SidebarComponent,
    //Sidebar
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
