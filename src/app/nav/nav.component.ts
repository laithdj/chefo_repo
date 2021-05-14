import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { inject } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn = true;
  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc:Document) { }

  ngOnInit(): void {
  }
  login(){
    this.auth.loginWithRedirect();
  }
  logout(){
    this.auth.logout({returnTo: this.doc.location.origin});
  }
}
