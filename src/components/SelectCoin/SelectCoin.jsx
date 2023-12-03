import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {coins} from '../../supported-coins';

const SelectCoin = ({coin, setCoin, isDark}) => {

    const handleChange = (e) => {
        setCoin(e.target.value);
    }

    return (
        <FormControl sx={{m: 1, minWidth: 120}}>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={coin}
                label="Age"
                onChange={handleChange}
                sx={{
                    color: `${!isDark ? "#1a1a1a" : "#ffff"}`,
                    backgroundColor: `${isDark ? "#1a1a1a" : "#ffff"}`,
                    ":focus": {borderColor: `${!isDark ? "#1a1a1a" : "#ffff"}`}
                }}
            >

                {
                    coins.map((coin, idx) => {
                        return <MenuItem key={idx} value={coin}>{coin}</MenuItem>
                    })
                }

            </Select>
            <FormHelperText
                sx={{
                    color: `${isDark ? "#1a1a1a" : "#ffff"}`
                }}>Choose a coin to show its price changes</FormHelperText>
        </FormControl>
    );
}

export default SelectCoin;