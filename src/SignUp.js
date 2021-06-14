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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';

const WhiteTextTypography = withStyles({
  root: {
    color: "white"
  }
})(Typography);

const WhiteCheckbox = withStyles({
  root: {
    color: "white"
  }
})(Checkbox);

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

const WhiteFormControlLabel = withStyles({
  root: {
    '& .MuiFormControlLabel-label': {
      color: 'white'
    },
  },
})(FormControlLabel);

const DLockOutlinedIcon = withStyles({
  root: {
    color: 'white'
  },
})(LockOutlinedIcon)

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

function show() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <WhiteTextField
          autoComplete="name"
          name="Name"
          color="secondary"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="Name"
          label="Name"
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
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
      </Grid>
      <Grid item xs={12}>
        <WhiteTextField
          color="secondary"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </Grid>
      <Grid item xs={12}>
        <WhiteFormControlLabel
          control={<WhiteCheckbox value="allowExtraEmails" />}
          label="I want to receive inspiration, marketing promotions and updates via email."
        />
      </Grid>
    </Grid>
  )
}

export default function SignUpSide() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <DLockOutlinedIcon />
        </Avatar>
        <WhiteTextTypography component="h1" variant="h5">
          Sign up
        </WhiteTextTypography>
        <form className={classes.form} noValidate>
          {show()}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}