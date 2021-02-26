import { PanelItem, PanelType } from './../../../models/panel-item';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NotificationType } from 'src/app/models/notification';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.scss']
})
export class ProjectPanelComponent implements OnInit {

  @ViewChild('fileSelectorInput')
  fileSelectorInput!: ElementRef;
  
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
      const fileReader = new FileReader();

      fileReader.readAsText(selectedFile, "UTF-8");

      fileReader.onload = () => {
        const result = fileReader.result;
        console.log(result);
        console.log(JSON.parse(result));
      };

      // Error
      fileReader.onerror = (error) => {
        console.log(error);
        this.notificationService.sendMessage({message: 'Invalid file format', messageType: NotificationType.ERROR});
      };

      this.notificationService.sendMessage({message: 'File Selected', messageType: NotificationType.SUCCESS});
    } else {      
      this.notificationService.sendMessage({message: 'No file selected', messageType: NotificationType.ERROR});
    }

    this.fileSelectorInput.nativeElement.value = '';
  }

}
