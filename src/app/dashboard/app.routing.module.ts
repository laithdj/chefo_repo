import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { AppComponent } from './app.component';


const routes: Route[] = [
    { path: '', component:AppComponent,children:
    [
      { path: 'dashboard', component: Dashboard1Component },
      { path: 'courses', loadChildren: () => import('./views/courses/courses.module').then(m => m.CoursesModule)},
    ]
 },

    { path: 'dashboards', children:
      [
        { path: 'v1', component: Dashboard1Component },
      ]
    },
    { path: 'courses', loadChildren: () => import('./views/courses/courses.module').then(m => m.CoursesModule)},
  /*
    { path: 'courses', children:
      [
        { path: 'courses', component: CoursesComponent },
        { path: 'create-course', component: CreateCourseComponent , children:
        [
          { path: 'step-1', component: Step1Component },
          { path: 'step-2', component: Step2Component },
          { path: 'step-3', component: Step3Component },
        ]
      },
      ]
    },*/
    { path: 'tables', children:
      [
        { path: 'table1', component: BasicTableComponent },
      ]
    },
    { path: 'maps', children:
      [
        { path: 'map1', component: Map1Component},
      ]
    },
  
    { path: 'modals', component: ModalsComponent},
    { path: '**', component: NotFoundComponent },
  
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
