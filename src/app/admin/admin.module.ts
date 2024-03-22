import {NgModule} from "@angular/core";
import { HomeComponent } from './home/home.component';
import {AdminRoutingModule} from "./admin-routing.module";

@NgModule({
    declarations: [
    HomeComponent
  ],
    imports: [AdminRoutingModule]
})
export class AdminModule {}
