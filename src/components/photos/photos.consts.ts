import { IPhotoProps } from "../photo/photo.types";

import FirstImage from '../../images/desktop1.png'
import FirstImageMedium from '../../images/tablet1.png'
import FirstImageSmall from '../../images/phone1.png'
import SecondImage from '../../images/desktop2.png'
import SecondImageMedium from '../../images/tablet2.png'
import SecondImageSmall from '../../images/phone2.png'
import ThirdImage from '../../images/desktop3.png'
import ThirdImageSmall from '../../images/tablet3.png'
import FourthImage from '../../images/desktop4.png'
import FourthImageSmall from '../../images/tablet4.png'

export const PHOTOS: IPhotoProps[] = [
    {
        src: FirstImage,
        described: false
    },
    {
        src: SecondImage,
        described: false,
    },
    {
        src: ThirdImage,
        described: true,
    },
    {
        src: FourthImage,
        described: true
    }
]

export const PHOTOS_MD: IPhotoProps[] = [
    {
        src: FirstImageMedium,
        described: false
    },
    {
        src: ThirdImageSmall,
        described: true,
    },
    {
        src: SecondImageMedium,
        described: false,
    },
    {
        src: FourthImageSmall,
        described: true
    }
]

export const PHOTOS_SM: IPhotoProps[] = [
    {
        src: FirstImageSmall,
        described: false
    },
    {
        src: SecondImageSmall,
        described: false,
    },
    {
        src: ThirdImageSmall,
        described: true,
    },
    {
        src: FourthImageSmall,
        described: true
    }
]