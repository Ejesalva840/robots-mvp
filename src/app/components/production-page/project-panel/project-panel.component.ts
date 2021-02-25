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
