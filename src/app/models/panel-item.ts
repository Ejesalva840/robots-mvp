export interface PanelItem {
    displayName: string,
    displayColor: PanelType
}

// https://getbootstrap.com/docs/4.0/components/list-group/#contextual-classes
export enum PanelType {
    PRIMARY = 'list-group-item-primary',
    SECONDARY = 'list-group-item-secondary',
    SUCCESS = 'list-group-item-success',
    DANGER = 'list-group-item-danger',
    WARNING = 'list-group-item-warning',
    INFO = 'list-group-item-info',
    LIGHT = 'list-group-item-light',
    DARK = 'list-group-item-dark',
    DEFAULT = ''
}
