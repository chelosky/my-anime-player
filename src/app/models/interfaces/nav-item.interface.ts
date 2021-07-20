export interface NavItem {
    displayName: string;
    disabled?: boolean;
    iconName: string;
    customIcon?: boolean;
    route?: string;
    children?: NavItem[];
}