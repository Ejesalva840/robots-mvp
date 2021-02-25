import { Component, OnInit } from '@angular/core';
import { NotificationType } from 'src/app/models/notification';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-preview-panel',
  templateUrl: './preview-panel.component.html',
  styleUrls: ['./preview-panel.component.scss']
})
export class PreviewPanelComponent implements OnInit {

  active = 1;

  constructor(private notificationService: NotificationService) { }

  sendToServer() {
    this.notificationService.sendMessage({message: 'Sent to robot', messageType: NotificationType.INFO});
  }

  ngOnInit(): void {
  }

}
