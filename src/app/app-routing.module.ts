import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImageComponent} from "./image/image.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },

    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },

    {
        path: 'image',
        component: ImageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
