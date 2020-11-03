export type OnClick = () => void

export interface IBoxButton {
    right?: string,
    left?: string,
    bottom?: string,
    top?: string,
    active: boolean,
    color: string
}

export interface IBoxButtonProps extends IBoxButton {
    onClick: OnClick,
    text: string,
    active: boolean,
    color: string
}