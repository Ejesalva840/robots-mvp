import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-panel',
  templateUrl: './preview-panel.component.html',
  styleUrls: ['./preview-panel.component.scss']
})
export class PreviewPanelComponent implements OnInit {

  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
