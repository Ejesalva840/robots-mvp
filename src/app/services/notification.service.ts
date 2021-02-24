import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private behaviorSubject = new BehaviorSubject<Notification | null>(null);

  constructor() { }
}
