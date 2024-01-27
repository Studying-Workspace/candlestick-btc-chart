import * as React from 'react';
import {useChartContext} from '../../context/ChartContext';
import SelectMenu from './SelectMenu';

const SelectMenuContainer = ({defaultValue, setValue, helperText, menuItems}) => {

    const {isDark} = useChartContext();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <SelectMenu
            defaultValue={defaultValue}
            helperText={helperText}
            menuItems={menuItems}
            isDark={isDark}
            handleChange={handleChange}
        />
    );
}

export default SelectMenuContainer;