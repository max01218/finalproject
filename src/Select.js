import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { LocationCity } from '@material-ui/icons';
import firebase from 'firebase';
import config from './config/config';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(10),
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function Selectitem() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="city">city</InputLabel>
                <Select
                    labelId="city"
                    id="city"
                    value={LocationCity}
                    onChange={handleChange}
                >
                    <MenuItem value={LocationCity}>Taipai</MenuItem>
                    <MenuItem value={LocationCity}>Taichung</MenuItem>
                    <MenuItem value={LocationCity}>Kaohsiung</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="area">area</InputLabel>
                <Select
                    labelId="area"
                    id="area"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="shop">shop</InputLabel>
                <Select
                    labelId="shop"
                    id="shop"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}