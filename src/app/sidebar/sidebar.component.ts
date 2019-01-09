import { Component,ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SidebarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  
    
    typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  constructor(private breakpointObserver: BreakpointObserver,iconRegistry: MatIconRegistry,
     sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
        'client',
        sanitizer.bypassSecurityTrustResourceUrl('assets/client.svg'));

        iconRegistry.addSvgIcon(
          'setting',
          sanitizer.bypassSecurityTrustResourceUrl('assets/setting.svg'));

         iconRegistry.addSvgIcon(
          'myprofile',
           sanitizer.bypassSecurityTrustResourceUrl('assets/myprofile.svg'));

         iconRegistry.addSvgIcon(
          'disablenotification',
          sanitizer.bypassSecurityTrustResourceUrl('assets/notification.svg'));

          iconRegistry.addSvgIcon(
            'signout',
            sanitizer.bypassSecurityTrustResourceUrl('assets/signout.svg'));
  
          iconRegistry.addSvgIcon(
              'comment',
              sanitizer.bypassSecurityTrustResourceUrl('assets/comment.svg'));
           
          iconRegistry.addSvgIcon(
                'email',
                sanitizer.bypassSecurityTrustResourceUrl('assets/email.svg'));

           iconRegistry.addSvgIcon(
                'search',
                 sanitizer.bypassSecurityTrustResourceUrl('assets/search.svg'));
      
             iconRegistry.addSvgIcon(
                'down',
                 sanitizer.bypassSecurityTrustResourceUrl('assets/down.svg'));
        
  
     }

}
