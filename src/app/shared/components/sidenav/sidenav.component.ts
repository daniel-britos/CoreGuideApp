import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSplitModule } from 'angular-split';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterModule,
    AngularSplitModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatAccordion,
    MatTooltipModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export default class SidenavComponent {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));


    /* sidenav */
    @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav

    @ViewChild('sidenavEnd', { static: false }) sidenavEnd!: MatSidenav

    showLeftSidenav: boolean = true

    showRightSidenav: boolean = true

    mainArea: boolean = true
}
