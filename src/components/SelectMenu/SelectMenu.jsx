    import React from 'react';
    import Select from "@mui/material/Select";
    import MenuItem from "@mui/material/MenuItem";
    import FormHelperText from "@mui/material/FormHelperText";
    import FormControl from "@mui/material/FormControl";

    const SelectMenu = ({defaultValue, helperText, menuItems, isDark, handleChange}) => {
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
                    data-testid='select-menu'
                >
                    {
                        menuItems.map((itemValue, idx) => {
                            return <MenuItem key={idx} value={itemValue} data-testid={itemValue}>{itemValue}</MenuItem>
                        })
                    }
                </Select>
                <FormHelperText
                    sx={{
                        color: `${isDark ? "#1a1a1a" : "#ffff"}`
                    }}>{helperText}</FormHelperText>
            </FormControl>
        )
    };

export default SelectMenu;