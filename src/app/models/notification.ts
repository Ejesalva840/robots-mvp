export interface Notification {
    message: string,
    messageType: NotificationType
}

export enum NotificationType {
    WARNING = 'WARNING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    INFO = 'INFO'
}
