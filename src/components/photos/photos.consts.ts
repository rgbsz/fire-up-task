import { IPhotoProps } from "../photo/photo.types";

import FirstImage from '../../images/desktop1.png'
import SecondImage from '../../images/desktop2.png'
import ThirdImage from '../../images/desktop3.png'
import FourthImage from '../../images/desktop4.png'

export const PHOTOS: IPhotoProps[] = [
    {
        src: FirstImage,
        described: false
    },
    {
        src: SecondImage,
        described: false
    },
    {
        src: ThirdImage,
        described: true
    },
    {
        src: FourthImage,
        described: true
    }
]