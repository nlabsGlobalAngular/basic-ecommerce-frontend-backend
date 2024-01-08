import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DnavbarComponent } from './dnavbar/dnavbar.component';
import { DSidebarComponent } from './d-sidebar/d-sidebar.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, DnavbarComponent, DSidebarComponent],
  template: `
    <app-dnavbar></app-dnavbar>
    <div class="wrapper">
        <div class="row">
          <div class="col-3">           
            <app-d-sidebar></app-d-sidebar>
          </div>
          
            <div class="col-9"> 
              <div class="row">
                <router-outlet></router-outlet>
              </div>
            </div>
        </div>
    </div>
  `,
})
export class DashboardLayoutComponent {
}
