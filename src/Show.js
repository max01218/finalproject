import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";

const WhiteTextField = withStyles({
    root: {
        '& .MuiInputBase-root': {
            color: 'white'
        },
        '& .MuiInputLabel-root': {
            color: 'white'
        },
    },
})(TextField);
export default function Show() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <WhiteTextField
                    autoComplete="city"
                    name="city"
                    color="secondary"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="city"
                    label="City"
                    autoFocus
                />
            </Grid>
            <Grid item xs={12}>
                <WhiteTextField
                    color="secondary"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="dist"
                    name="dist"
                    label="Dist"
                    autoComplete="dist"
                />
            </Grid>
            <Grid item xs={12}>
                <WhiteTextField
                    color="secondary"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="shopName"
                    label="shop name"
                    name="shopName"
                    autoComplete="shopName"
                />
            </Grid>
            <Grid item xs={12}>
                <WhiteTextField
                    color="secondary"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="date"
                    type="datetime-local"
                    id="date"
                    autoComplete="current-password"
                />
            </Grid>
        </Grid>
    )
}