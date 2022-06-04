import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
    Button,
    Card,
    CardContent,
    Grid,
    Link,
    Stack,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { useTheme } from '@material-ui/core/styles';

import BadgeIcon from '@mui/icons-material/Badge';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

import { IconFileAnalytics, IconCalendarEvent, IconBulb, IconReceipt2, IconFileDescription } from '@tabler/icons';
import { Avatar } from '@mui/material';

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        paddingTop: '20px',
        background: 'white',
        marginTop: '16px',
        marginBottom: '16px',
        overflow: 'hidden',
        boxShadow: theme.shadows[3],
        position: 'relative',
        '&:hover': {
            boxShadow: theme.shadows[8]
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '1500px',
            height: '610px',
            background: `linear-gradient(275.9deg, ${theme.palette.secondary[800]} -50.02%, rgba(145, 107, 216, 0) 180.58%)`,
            borderRadius: '250%',
            top: '-530px',
            right: '-530px'
        }
    },
    mainCard: {
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        width: '21cm',
        margin: '0.5cm auto',
        boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)',
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '1500px',
            height: '610px',
            background: `linear-gradient(275.9deg, ${theme.palette.secondary[800]} -50.02%, rgba(145, 107, 216, 0) 180.58%)`,
            borderRadius: '250%',
            top: '-500px',
            right: '-350px'
        }
    },
    tagLine: {
        color: theme.palette.grey[900],
        opacity: 0.6
    },
    avatarFirst: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.secondary.light,
        borderRadius: '20px',
        marginRight: '10px',
        height: '20px',
        width: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    avatarSecond: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        color: theme.palette.secondary.dark,
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: '20px',
        height: '8px',
        width: '8px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        color: theme.palette.white,
        backgroundColor: theme.palette.secondary.main,
        marginBottom: -10,
        textTransform: 'capitalize',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    }
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

function createData(name, calories, fat) {
    return { name, calories, fat };
}

const rows = [createData('Frozen yoghurt', 159, 6.0), createData('Ice cream sandwich', 237, 9.0), createData('Eclair', 262, 16.0)];

// ===========================|| PROFILE MENU - UPGRADE PLAN CARD ||=========================== //

const DietPlanSuggestionCard = (dietPlanSuggestionData) => {
    const classes = useStyles();
    console.log(dietPlanSuggestionData);
    console.log(dietPlanSuggestionData.dietPlanSuggestionData.name);
    const theme = useTheme();
    // let status;
    // if (dietPlanData.dietPlanData.isActive) {
    //     status = 'Active';
    // } else {
    //     status = 'InsActive';
    // }
    return (
        <Card className={classes.card}>
            <CardContent justifyContent="center" alignItems="center">
                <Grid container justifyContent="center" alignItems="center" direction="column" spacing={1}>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'left', margin: '5px' }}>
                        <Typography
                            color={theme.palette.secondary.main}
                            style={{
                                textShadow: '0px 0px 5px #D0B7FF',
                                textAlign: 'center',
                                marginTop: '-20px',
                                marginBottom: '0px'
                            }}
                            gutterBottom
                            variant="h4"
                        >
                            Total Calorie
                        </Typography>
                        <Typography variant="h5" fontSize="14px" textAlign="center" marginBottom="40px">
                            150 cal
                        </Typography>
                        {/* <Typography align="left" variant="subtitle1" style={{ maxWidth: '150px', minWidth: '150px' }}>
                            Total Calorie
                        </Typography>
                        <Typography align="left" variant="subtitle1" style={{ maxWidth: '100px', minWidth: '110px' }}>
                            150 cal
                        </Typography> */}
                    </div>
                </Grid>
                <div style={{ height: '20px' }} />
                {dietPlanSuggestionData.dietPlanSuggestionData.map((item, index) => (
                    <Grid container justifyContent="center" alignItems="center" direction="column" spacing={1}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'left', margin: '5px' }}>
                            <Avatar variant="rounded" className={classes.avatarFirst}>
                                <Avatar variant="rounded" className={classes.avatarSecond} />
                            </Avatar>
                            <div style={{ width: '20px' }} />
                            <Typography align="left" variant="subtitle1" style={{ maxWidth: '150px', minWidth: '150px' }}>
                                {dietPlanSuggestionData !== null ? item.food : 'NotFound'}
                            </Typography>
                            <Typography align="left" variant="subtitle1" style={{ maxWidth: '100px', minWidth: '110px' }}>
                                {dietPlanSuggestionData !== null ? item.amount.concat(' g') : 'NotFound'}
                            </Typography>
                            <Typography align="left" variant="subtitle1" style={{ maxWidth: '100px', minWidth: '110px' }}>
                                {dietPlanSuggestionData !== null ? item.calAmount.concat(' cal') : 'NotFound'}
                            </Typography>
                        </div>
                    </Grid>
                ))}
            </CardContent>
        </Card>
    );
};

export default DietPlanSuggestionCard;
