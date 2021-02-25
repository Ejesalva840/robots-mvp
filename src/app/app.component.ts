import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert/alert';
import { Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { NotificationType } from './models/notification';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'production-mvp';
  staticAlertClosed = false;
  message = '';
  messageType: NotificationType = NotificationType.SUCCESS;

  notificationSubscription: Subscription;

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert | undefined;

  constructor(private notificationService: NotificationService) {
    this.notificationSubscription = this.notificationService.message$
    .subscribe(notification => {
      if (notification) {
        this.message = notification.message
        this.messageType = notification.messageType;
      }
    });

    this.notificationService.message$
      .pipe(debounceTime(4000))
      .subscribe(notification => {
        if (notification && this.selfClosingAlert) {
          console.log(notification);

          this.message = '';
        }
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if(this.notificationSubscription) {
      this.notificationSubscription.unsubscribe();
    }
  }
}
