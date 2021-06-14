import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from './AppBar';
import Toolbar, { styles as toolbarStyles } from './Toolbar';

const styles = (theme) => ({
    title: {
        fontSize: 24,
        display: "flex",
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: 'space-between',
    },
    left: {
        flex: 1,
    },
    leftLinkActive: {
        color: theme.palette.common.white,
    },
    right: {
        flex: 150, display: 'flex', justifyContent: 'flex-end',
    },
    rightLink: {
        fontSize: 16, color: theme.palette.common.white, marginLeft: theme.spacing(3),
    },
    AppBarcolor: {
        backgroundColor: '#102027', position: "fixed"
    },
});
function AppAppBar(props) {
    const { classes } = props;
    return (
        <div>
            <AppBar className={classes.AppBarcolor}>
                <Toolbar className={classes.toolbar} >
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        className={classes.title}
                        href="/main"
                    >
                        {'防疫自主登記表'}
                    </Link>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    );
}

AppAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AppAppBar);