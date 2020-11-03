export type Status = boolean

export interface IMobileNavStyled {
    status: Status
}

export interface IMobileNavProps {
    status: Status,
    setStatus: () => void
}