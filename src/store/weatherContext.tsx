import { createContext } from 'react'
import { IWeatherContext } from './weatherContext.types'

const weatherContext = createContext({} as IWeatherContext)

export default weatherContext