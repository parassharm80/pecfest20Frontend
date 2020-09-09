import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebsiteTeamRoutingModule} from "./website-team-routing";
import {WebsiteTeamComponent} from "./website-team.component";


@NgModule({
  declarations: [WebsiteTeamComponent],
  imports: [
    CommonModule,
    WebsiteTeamRoutingModule,

  ],
  exports: [
    
  ]
})
export class WebsiteTeamModule { }

