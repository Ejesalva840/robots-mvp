export interface Notification {
    message: string,
    messageType: NotificationType
}

export enum NotificationType {
    WARNING = 'warning',
    SUCCESS = 'success',
    ERROR = 'danger',
    INFO = 'info'
}
