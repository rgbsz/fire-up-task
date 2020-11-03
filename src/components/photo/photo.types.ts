export interface IPhotoStyled {
    color: string
}

export interface IPhotoProps {
    src: string,
    described: boolean,
    color: IPhotoStyled['color']
}