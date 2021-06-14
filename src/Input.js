import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Show from './Show';
import WhiteTextTypography from './WhiteTextTypography';
import DAddLocationIcon from './DAddLocationIcon';
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

export default function Choose() {
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