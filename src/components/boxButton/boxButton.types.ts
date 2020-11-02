export type OnClick = () => void

export interface IBoxButton {
    right?: string,
    left?: string,
    bottom?: string,
    top?: string
}

export interface IBoxButtonProps extends IBoxButton {
    onClick: OnClick,
    text: string
}