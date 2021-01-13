import React, {useState} from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
   const [darknessValue, setDarknessValue] = useLocalStorage('darkness', 'off')
   return [darknessValue, setDarknessValue]
   
}
export default useDarkMode