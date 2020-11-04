export interface ILinkStyled {
    active: 1 | 0
}

export interface ILinkProps {
    text: string,
    link: string,
    active: ILinkStyled['active']
}