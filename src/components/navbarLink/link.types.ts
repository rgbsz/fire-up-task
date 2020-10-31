export interface ILinkStyled {
    active: boolean
}

export interface ILinkProps {
    text: string,
    link: string,
    active: ILinkStyled['active']
}