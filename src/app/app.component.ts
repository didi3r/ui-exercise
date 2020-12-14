import { Component, HostListener, OnInit } from '@angular/core';
import { EmailsService } from './services/emails.service';

const MOBILE_BREAKPOINT = 768;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menuOpened = true;

  constructor(private emails: EmailsService) {}

  ngOnInit(): void {
    this.emails.fetchEmails();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth < MOBILE_BREAKPOINT) {
      this.menuOpened = false;
    } else {
      this.menuOpened = true;
    }
  }
}
