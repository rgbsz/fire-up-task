export interface IStyledItemProps {
    background: string,
    opacity: string
}

export interface IHeaderItemProps {
    className: string,
    icon: any,
    text: string,
    background: IStyledItemProps['background'],
    opacity: IStyledItemProps['opacity']
}