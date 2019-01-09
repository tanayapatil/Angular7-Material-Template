import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1,data:"tanaya"},
          { title: 'Card 2', cols: 1, rows: 1,data:"patil" },
          { title: 'Card 3', cols: 1, rows: 1,data:"abc" },
          { title: 'Card 4', cols: 1, rows: 1,data:"xyz" }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1,data:"tanaya" },
        { title: 'Card 2', cols: 1, rows: 1,data:"patil" },
        { title: 'Card 3', cols: 1, rows: 2,data:"abc" },
        { title: 'Card 4', cols: 1, rows: 1,data:"xyz" }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
