import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

// material-ui
import { makeStyles, useTheme, withStyles } from '@material-ui/styles';
import { Box, Button, Card, Grid, TextField, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import MuiTypography from '@material-ui/core/Typography';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlagIcon from '@mui/icons-material/Flag';
import MapIcon from '@mui/icons-material/Map';

import { purple, grey } from '@mui/material/colors';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';

import {
    IconBrandTinder,
    IconToolsKitchen2,
    IconListCheck,
    IconBellRinging,
    IconPhoneCall,
    IconCash,
    IconBuildingCommunity,
    IconBrandCodesandbox,
    IconBuildingArch,
    IconUsers,
    IconReportAnalytics,
    IconReceipt
} from '@tabler/icons';
import { Autocomplete, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import HttpCommon from 'utils/http-common';
import { useNavigate } from 'react-router-dom';
// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

import { Payhere, AccountCategory, Customer, CurrencyType, PayhereCheckout, CheckoutParams } from 'payhere-js-sdk';
import { Store } from 'react-notifications-component';
import Lottie from 'react-lottie';
import * as success from 'assets/images/loading.json';

//= ==============================|| SHADOW BOX ||===============================//
let theme;

// Sandbox
Payhere.init('1217402', AccountCategory.SANDBOX);

// Live
// Payhere.init("12xxxxx",AccountCategory.LIVE)

// Visa card
// Visa : 4916217501611292

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: success.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.secondary.dark,
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: `linear-gradient(210.04deg, ${theme.palette.secondary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
            borderRadius: '50%',
            top: '-30px',
            right: '-140px'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: `linear-gradient(140.9deg, ${theme.palette.secondary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
            borderRadius: '50%',
            top: '-160px',
            right: '-100px'
        }
    },
    primary: {
        color: '#fff'
    },
    secondary: {
        color: theme.palette.primary.light,
        marginTop: '5px'
    },
    content: {
        zIndex: 1,
        padding: '20px !important'
    },
    backColor: theme.palette.secondary[800],
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.secondary[800],
        marginTop: '2px',
        fontSize: '120'
    },
    avatarRight: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.secondary[200]
        // zIndex: 1
    },
    cardHeading: {
        fontSize: '2.125rem',
        fontWeight: 500,
        marginRight: '8px',
        marginTop: '14px',
        marginBottom: '6px'
    },
    subHeading: {
        fontSize: '0.9rem',
        fontWeight: 500,
        color: theme.palette.grey
    },
    avatarCircle: {
        cursor: 'pointer',
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.secondary[200],
        color: theme.palette.secondary.dark,
        fontSize: '120'
    },
    circleIcon: {
        transform: 'rotate3d(1, 1, 1, 45deg)'
    },
    menuItem: {
        marginRight: '14px',
        fontSize: '1.25rem'
    },
    padding: {
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        color: theme.palette.white,
        marginTop: 20,
        backgroundColor: theme.palette.secondary.main,
        textTransform: 'capitalize',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    }
}));

//= ===========================|| UTILITIES SHADOW ||============================//

// const CustomTypography = withStyles({
//     root: {
//         color: 'black'
//     }
// })(MuiTypography);

const Account = () => {
    const classes = useStyles();
    const [plan, setPlan] = React.useState('');
    const [subscription, setSubscription] = React.useState(null);
    const [subscriptionTypes, setSubscriptionTypes] = React.useState(null);
    const [subscriptionPayments, setSubscriptionPayments] = React.useState(null);
    const [menuItems, setMenuItems] = React.useState([]);
    const [isDataLoading, setDataLoading] = React.useState(true);

    const navigate = useNavigate();
    const ownerName = 'Saman';
    const userId = 1;

    function getSubscriptionTypes() {
        // let arr = [];
        HttpCommon.get('/api/subscriptionType/').then((response) => {
            console.log(response.data.data);
            setSubscriptionTypes(response.data.data);
            response.data.data.forEach((element) => {
                menuItems.push({ label: element.type, value: element });
            });
        });
    }

    function getSubscription() {
        // let arr = [];
        HttpCommon.get('/api/subscription/getSubscriptionByUserId/1').then((response) => {
            console.log(response.data);
            console.log(response.data.data);
            console.log(response.data.data.isActive);
            setSubscription(response.data.data);
            HttpCommon.get('/api/subscriptionPayment/getSubscriptionPaymentByUserId/1').then((response) => {
                console.log(response.data.data);
                console.log(response.data.data.payment);
                setSubscriptionPayments(response.data.data.payment);
                setDataLoading(false);
            });
        });
    }

    function renewPlan() {
        // let arr = [];
        HttpCommon.put(`/api/subscription/RenewSubscription/${subscription.id}`, {
            subscriptionTypeId: plan.id
        })
            .then((response) => {
                console.log(response.data.data);
                getSubscription();
                Store.addNotification({
                    title: 'Subscription Type Changed!',
                    message: 'Subscription type changed successfully.',
                    type: 'success',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    },
                    width: 500
                });
            })
            .catch((error) => {
                // handle error
                console.log(error);
                Store.addNotification({
                    title: 'Error Occured!',
                    message: error.message,
                    type: 'danger',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    },
                    width: 500
                });
            });
    }

    useEffect(async () => {
        // getData();
        // console.log("token = " + token);
        // const config = {
        //     headers: { Authorization: `Bearer ${token}` }
        // };
        // if (token != null) {
        setDataLoading(true);
        getSubscription();
        getSubscriptionTypes();

        // } else {
        //     // navigate('/home')
        // }
    }, []);

    const handleChangePlan = (event, value) => {
        console.log(value);
        if (value !== null) {
            setPlan(value.value);
        }
    };

    return (
        <>
            {isDataLoading ? (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%'
                    }}
                >
                    <Lottie options={defaultOptions} height={400} width={400} />
                </div>
            ) : (
                <Grid spacing={gridSpacing}>
                    {/* bgcolor: 'secondary.main', */}
                    <SubCard sx={{ color: 'white' }} title="Subscription Detailes">
                        <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
                            <div style={{ height: '20px' }} />
                        </Grid>
                    </SubCard>
                    <div style={{ height: '20px' }} />
                </Grid>
            )}
        </>
    );
};

export default Account;
