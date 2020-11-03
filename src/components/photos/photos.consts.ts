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
import theme from "../../theme";

export const PHOTOS: IPhotoProps[] = [
    {
        src: FirstImage,
        described: false,
        color: theme.colors.photos.blue
    },
    {
        src: SecondImage,
        described: false,
        color: theme.colors.photos.orange
    },
    {
        src: ThirdImage,
        described: true,
        color: theme.colors.photos.green
    },
    {
        src: FourthImage,
        described: true,
        color: theme.colors.photos.purple
    }
]

export const PHOTOS_MD: IPhotoProps[] = [
    {
        src: FirstImageMedium,
        described: false,
        color: theme.colors.photos.blue
    },
    {
        src: ThirdImageSmall,
        described: true,
        color: theme.colors.photos.green
    },
    {
        src: SecondImageMedium,
        described: false,
        color: theme.colors.photos.orange
    },
    {
        src: FourthImageSmall,
        described: true,
        color: theme.colors.photos.purple
    }
]

export const PHOTOS_SM: IPhotoProps[] = [
    {
        src: FirstImageSmall,
        described: false,
        color: theme.colors.photos.blue
    },
    {
        src: SecondImageSmall,
        described: false,
        color: theme.colors.photos.orange
    },
    {
        src: ThirdImageSmall,
        described: true,
        color: theme.colors.photos.green
    },
    {
        src: FourthImageSmall,
        described: true,
        color: theme.colors.photos.purple
    }
]