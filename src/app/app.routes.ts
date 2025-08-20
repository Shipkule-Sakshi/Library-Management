// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentLoginComponent } from './components/login/studentlogin/studentlogin.component';
import { FacultyLoginComponent } from './components/login/facultylogin/facultylogin.component';
import { AddbooksComponent } from './components/addbooks/addbooks.component';
import { StatsComponent } from './components/stats/stats.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

// ✅ Declare routes here, do NOT import from another file
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },   // default route
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent }, // consistent naming
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'faculty-login', component: FacultyLoginComponent },
  { path: 'add-books', component: AddbooksComponent },
  { path: 'stats', component: StatsComponent },
  { path: '**', redirectTo: 'home' },  // fallback route
  { path: '', redirectTo: 'faculty-login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
