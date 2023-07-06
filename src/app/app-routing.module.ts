import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { CadastroScheduleComponent } from './cadastro-schedule/cadastro-schedule.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'periodos', loadChildren: () => import('./periodos/periodos.module').then(m => m.PeriodosModule) },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'cadastro-schedule', component: CadastroScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
