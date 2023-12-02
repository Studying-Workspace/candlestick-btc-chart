import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {coins} from '../../supported-coins';

const SelectCoin = ({coin, setCoin}) => {

    const handleChange = (e) => {
        setCoin(e.target.value);
    }

    return (
        <FormControl sx={{m: 1, minWidth: 120}}>
            <InputLabel
                id="demo-simple-select-helper-label"
                sx={{
                    color: "#000",
                    border: "2px solid #000",
                    backgroundColor: "#fff",
                    padding: "0 10px",
                    borderBottom: "none",
                }}
            >Coin</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={coin}
                label="Age"
                onChange={handleChange}
                sx={{
                    color: "#000",
                    backgroundColor: "#fff",
                    ":focus": {borderColor: "#fff"}
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
                    color: "#fff"
                }}>Choose a coin to show its price changes</FormHelperText>
        </FormControl>
    );
}

export default SelectCoin;