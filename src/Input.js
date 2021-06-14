import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';

const WhiteTextTypography = withStyles({
    root: {
      color: "white"
    }
  })(Typography);
  
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
  
const DAddLocationIcon = withStyles({
    root:{
        color: 'white'
    },
})(AddLocationIcon)  

function Copyright() {
    return (
        <WhiteTextTypography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="red" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </WhiteTextTypography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.success.light,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Show() {
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
export default function Input() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <DAddLocationIcon />
                    </Avatar>
                    <WhiteTextTypography component="h1" variant="h5">
                        Where You Been
                    </WhiteTextTypography>
                    <form className={classes.form} noValidate>
                        {Show()}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            >
                            Submit
                        </Button>
                    </form>
                </div>
            <Box mt={2}>
            <Copyright />
            </Box>
        </Container>
    );
}