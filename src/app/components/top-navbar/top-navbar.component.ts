import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/Services/sidenav.service';
import { animateText, onMainContentChange, onSideNavChange } from 'src/app/components/top-navbar/animation';
interface Page {
  link: string;
  name: string;
  icon: string;
}
@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
  animations: [onSideNavChange, animateText,onMainContentChange]
})
export class TopNavbarComponent implements OnInit {
  //  @Input() sidenav!: MatSidenav;
   @ViewChild(MatSidenav)
 sidenav!: MatSidenav;
  public sideNavState: boolean = false;
  public linkText: boolean = false;
  public onSideNavChange: boolean=false;
  public hidesidebar:string='none';

  public pages: Page[] = [
    {name: 'Dashboard', link:'dashboard', icon: 'inbox'},
    {name: 'Starred', link:'some-link', icon: 'star'},
    {name: 'Send email', link:'some-link', icon: 'send'},
  ]
  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      // this.onSideNavChange = res;
      if(res)
      {
        this.hidesidebar='open'
      }
      else
      {
        this.hidesidebar='close'
      }
    })
    
   }

  ngOnInit(): void {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}
