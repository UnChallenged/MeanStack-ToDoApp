import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { SidenavService } from 'src/app/Services/sidenav.service';
import { animateText, onMainContentChange, onSideNavChange } from './animation';


interface Page {
  link: string;
  name: string;
  icon: string;
}
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss'],
  animations: [onSideNavChange, animateText,onMainContentChange]
})
export class SidenavbarComponent implements OnInit {
  public sideNavState: boolean = false;
  public linkText: boolean = false;
  public onSideNavChange!: boolean;

  public pages: Page[] = [
    {name: 'Inbox', link:'some-link', icon: 'inbox'},
    {name: 'Starred', link:'some-link', icon: 'star'},
    {name: 'Send email', link:'some-link', icon: 'send'},
  ]

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
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
