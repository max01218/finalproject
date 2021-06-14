import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './Button';
import Typography from './Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
    'https://doqvf81n9htmm.cloudfront.net/data/crop_article/99154/shutterstock_1661197018.jpg_1140x855.jpg';

const styles = (theme) => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: '75% 25%',
        maxWidth: '100%',
        height: 'auto'
    },
    button: {
        minWidth: 200,
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
        },
    },
    more: {
        marginTop: theme.spacing(2),
    },
    fontcolor: {
        color: "#ffffff",

    }
});

function ProductHero(props) {
    const { classes } = props;

    return (
        <ProductHeroLayout backgroundClassName={classes.background}>
            {/* Increase the network loading priority of the background image. */}
            <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
            <Typography align="center" variant="h2" className={classes.fontcolor} >
                <b>做好足跡登記</b>
            </Typography>
            <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                努力做好每一天的防疫，為了每個人的健康，更為了整個大同社會!
            </Typography>
            <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.button}
                component="a"
                href="/login"
            >
                登入
            </Button>
            <Typography variant="body2" color="inherit" className={classes.more}>
                Pretect Everyone
            </Typography>
        </ProductHeroLayout>
    );
}

ProductHero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);