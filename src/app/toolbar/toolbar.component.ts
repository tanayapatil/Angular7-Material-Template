import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );


  constructor(private breakpointObserver: BreakpointObserver, iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
      {
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
    
        iconRegistry.addSvgIcon(
          'close',
          sanitizer.bypassSecurityTrustResourceUrl('assets/close.svg'));
    
        iconRegistry.addSvgIcon(
          'dashboard',
          sanitizer.bypassSecurityTrustResourceUrl('assets/dashboards.svg'));
    
        iconRegistry.addSvgIcon(
          'material',
          sanitizer.bypassSecurityTrustResourceUrl('assets/materialui.svg'));
    
        iconRegistry.addSvgIcon(
          'app',
          sanitizer.bypassSecurityTrustResourceUrl('assets/app.svg'));
    
        iconRegistry.addSvgIcon(
          'forms',
          sanitizer.bypassSecurityTrustResourceUrl('assets/forms.svg'));
    
        iconRegistry.addSvgIcon(
          'table',
          sanitizer.bypassSecurityTrustResourceUrl('assets/table.svg'));
    
        iconRegistry.addSvgIcon(
          'widgets',
          sanitizer.bypassSecurityTrustResourceUrl('assets/widgets.svg'));
    
        iconRegistry.addSvgIcon(
          'admin',
          sanitizer.bypassSecurityTrustResourceUrl('assets/admin.svg'));
    
      }
     }

     

    
     

  ngOnInit() {
  }

}
