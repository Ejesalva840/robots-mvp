import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private behaviorSubject = new BehaviorSubject<Notification|null>(null);
  message$ = this.behaviorSubject.asObservable()

  constructor() { }

  sendMessage(message: Notification) {
    this.behaviorSubject.next(message);
  }
}
