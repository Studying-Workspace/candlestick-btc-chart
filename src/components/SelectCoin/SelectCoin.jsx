import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { coins } from '../../supported-coins';

const SelectCoin = ({coin , setCoin})=>{

    const handleChange = (e)=>{
        setCoin(e.target.value) ; 
    }

    return(
        // <div>select</div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Coin</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={coin}
          label="Age"
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}

          {
            coins.map(coinId=> <MenuItem value={coinId}>{coinId}</MenuItem>)
          }

        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    );
}

export default SelectCoin ; 