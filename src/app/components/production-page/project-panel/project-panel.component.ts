import { PanelItem, PanelType } from './../../../models/panel-item';
import { Component, OnInit } from '@angular/core';
import { NotificationType } from 'src/app/models/notification';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.scss']
})
export class ProjectPanelComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  defaultData: PanelItem[] = [
    {displayName: 'Front Wall', displayColor: PanelType.DEFAULT },
    {displayName: '2 x 2 Window', displayColor: PanelType.SECONDARY },
    {displayName: '2 x 34 Wall', displayColor: PanelType.SUCCESS },
    {displayName: '2 - Door', displayColor: PanelType.SUCCESS },
    {displayName: 'Rear 23', displayColor: PanelType.DEFAULT },
    {displayName: 'Rear 63', displayColor: PanelType.DANGER },
    {displayName: 'Front_Exit', displayColor: PanelType.WARNING },
    {displayName: 'Front_Entrance', displayColor: PanelType.LIGHT },
    {displayName: 'Side Wall', displayColor: PanelType.INFO },
    {displayName: 'Side Exit', displayColor: PanelType.DARK }
  ]

  ngOnInit(): void {
  }

  fileSelected(event: any) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {

      this.notificationService.sendMessage({message: 'File Selected', messageType: NotificationType.SUCCESS});
    } else {      
      this.notificationService.sendMessage({message: 'No file selected', messageType: NotificationType.ERROR});
    }
  }

}
