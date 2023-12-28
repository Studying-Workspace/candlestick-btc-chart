import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useChart } from '../../context/ChartContext';

const SelectMenu = ({defaultValue, setValue , helperText, menuItems}) => {

    const {isDark} = useChart() ; 

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <FormControl sx={{m: 1, minWidth: 120}}>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={defaultValue}
                label="Age"
                onChange={handleChange}
                sx={{
                    color: `${!isDark ? "#1a1a1a" : "#ffff"}`,
                    backgroundColor: `${isDark ? "#1a1a1a" : "#ffff"}`,
                    ":focus": {borderColor: `${!isDark ? "#1a1a1a" : "#ffff"}`}
                }}
            >

                {
                    menuItems.map((itemValue, idx) => {
                        return <MenuItem key={idx} value={itemValue}>{itemValue}</MenuItem>
                    })
                }

            </Select>
            <FormHelperText
                sx={{
                    color: `${isDark ? "#1a1a1a" : "#ffff"}`
                }}>{helperText}</FormHelperText>
        </FormControl>
    );
}

export default SelectMenu;