import React from "react"
import { useRecoilValue, useRecoilState } from "recoil"
import { dataState, themeState, checkedState } from '../atoms'
import Typefilter from './Typefilter'
import Yearfilter from './Yearfilter'
import Switch from '@mui/material/Switch';

export default function Filters() {
    const data = useRecoilValue(dataState)
    const [theme, setTheme] = useRecoilState(themeState)
    const [checked, setChecked] = useRecoilState(checkedState)
    
    const handleChange = (event) => {
        setChecked(!checked);
        (theme === "light" ? setTheme("dark") : setTheme("light"))
      };

    return (
        <div className="filterbox">
            <Typefilter data={data} />
            <Yearfilter data={data} />
            <div className="switch">
                Switch Theme
                <Switch
                    checked={checked}
                    onChange={() => handleChange()}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
        </div>
    )
}