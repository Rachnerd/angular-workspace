import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-workspace-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss']
})
export class SidebarContainerComponent implements OnInit {
  isOpen = false;

  constructor() {}

  open() {
    this.isOpen = true;
    console.log('asdsad')
  }

  close() {
    this.isOpen = false;
    console.log('closed')
  }

  ngOnInit() {}
}
