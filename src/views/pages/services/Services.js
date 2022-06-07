import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Button,
    Grid,
    Autocomplete,
    Stack
} from '@material-ui/core';
import React, { useEffect, useState, useRef } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import MuiAlert from '@mui/material/Alert';
import EditableRow from './component/EditableRowService';
import ReadOnlyRow from './component/ReadOnlyServiceRow';
import { Search } from '@material-ui/icons';
import HttpCommon from 'utils/http-common';

import { Store } from 'react-notifications-component';
import 'animate.css/animate.min.css';
import { useNavigate } from 'react-router';

/* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const gymArray = [];
const bodyparts = ['ABS', 'Back', 'Biceps', 'Chest', 'Forearm', 'Hips', 'Legs', 'Shoulder', 'Triceps'];
const status = ['Availble', 'Not Available'];

function ServiceType() {
    const [userType, setUserType] = useState();
    const [serviceData, setServiceData] = useState([]);
    const [BranchId, setBranchId] = useState();
    const [branchArray, setBranchArray] = useState([]);
    const [serviceName, setServiceName] = useState(null);
    const [serviceStatus, setServiceStatus] = useState(null);
    const [bodyPart, setBodyPart] = useState(null);
    const [addButton, setAddButtonDisable] = useState(true);
    const [editableServiceName, setEditableServiceName] = useState();
    const [editableServiceStatus, setEditableServiceStatus] = useState(null);
    const [editableBodyPart, setEditableBodyPart] = useState(null);
    const [editServiceId, setEditServiceId] = useState(null);
    const [showTable, setShowTable] = useState(true);
    // Create and get my reference in Add New Subscription type
    const mainCard2Ref = useRef(null);
    const mainCard1Ref = useRef(null);
    const navigate = useNavigate();

    function unauthorizedlogin() {
        localStorage.clear();
        navigate('/', { replace: true });
    }

    function getGym() {
        const link = '/api/gym/getAllGymByUserId/';
        const key = localStorage.getItem('userID');
        const url = link + key;
        console.log(url);
        HttpCommon.get(url)
            .then((res) => {
                res.data.data.map((row) => gymArray.push({ label: row.name, value: row.id }));
                console.log(gymArray);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function getServices() {
        const link = '/api/user/';
        const key = localStorage.getItem('userID');
        const url = link + key;
        console.log(url);
        HttpCommon.get(url)
            .then((res) => {
                console.log(res.data.data.branchId);
                setBranchId(res.data.data.branchId);
                const link2 = '/api/serviceType/getServiceTypeByBranchId/';
                const key2 = res.data.data.branchId;
                const url2 = link2 + key2;
                console.log(url2);
                HttpCommon.get(url2)
                    .then((res) => {
                        setServiceData(res.data.data.serviceType);
                        setShowTable(false);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        setUserType(localStorage.getItem('type'));
        if (localStorage.getItem('type') === 'Admin') {
            unauthorizedlogin();
        } else if (localStorage.getItem('type') === 'Owner') {
            getGym();
        } else if (localStorage.getItem('type') === 'Manager' || localStorage.getItem('type') === 'Trainer') {
            getServices();
        }
    }, []);

    const handleGymSelect = (event, newValue) => {
        if (newValue !== null) {
            console.log(newValue.value);

            const link = '/api/branch/getBranchByGymId/';
            const key = newValue.value;
            const url = link + key;
            console.log(url);
            HttpCommon.get(url)
                .then((res) => {
                    const tempArr = [];
                    res.data.data.forEach((element) => {
                        tempArr.push({ label: element.name, value: element.id });
                    });
                    setBranchArray(tempArr);
                    console.log(tempArr);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleBranchSelect = (event, newValue) => {
        if (newValue !== null) {
            setBranchId(newValue.value);
        }
    };

    const handleSearch = () => {
        const link = '/api/serviceType/getServiceTypeByBranchId/';
        const key = BranchId;
        const url = link + key;
        HttpCommon.get(url)
            .then((res) => {
                setServiceData(res.data.data.serviceType);
                setShowTable(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Scroll to myRef view
    const executeScroll = () => {
        mainCard2Ref.current.scrollIntoView();
    };

    const addButtonClickExecuteScroll = () => {
        mainCard1Ref.current.scrollIntoView();
    };

    const handleServiceName = (event) => {
        setServiceName(event.target.value);
    };

    const handleServiceStatus = (event, newValue) => {
        console.log(newValue);
        setServiceStatus(newValue);
    };

    const handleBodyPart = (event, newValue) => {
        setBodyPart(newValue);
        if (serviceName != null && serviceStatus != null) {
            setAddButtonDisable(false);
        }
    };

    const handleAddFormSubmit = () => {
        HttpCommon.post('/api/serviceType/', {
            name: serviceName,
            status: serviceStatus,
            bodyPart,
            branchId: BranchId
        })
            .then((res) => {
                handleSearch();

                Store.addNotification({
                    title: 'Successfully Done!',
                    message: 'New Service Added Successfully',
                    type: 'success',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    },
                    width: 500
                });
            })
            .catch((error) => {
                console.log(error);

                Store.addNotification({
                    title: 'Fail !',
                    message: 'Fill all required Data',
                    type: 'danger',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    },
                    width: 500
                });
            });

        setServiceName(null);
        setServiceStatus(null);
        setBodyPart(null);
        addButtonClickExecuteScroll();
    };

    const handleEditFormSubmit = () => {
        const link = '/api/serviceType/';
        const key = editServiceId;
        const url = link + key;

        HttpCommon.put(url, {
            name: editableServiceName,
            status: editableServiceStatus,
            bodyPart: editableBodyPart
        })
            .then((res) => {
                handleSearch();

                Store.addNotification({
                    title: 'Successfully Done!',
                    message: 'Service Edited Successfully',
                    type: 'success',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    },
                    width: 500
                });
            })
            .catch((error) => {
                console.log(error);

                Store.addNotification({
                    title: 'Fail !',
                    message: error,
                    type: 'danger',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    },
                    width: 500
                });
            });

        setEditServiceId(null);
    };

    const handleEditClick = (event, row) => {
        setEditServiceId(row.id);

        setEditableServiceName(row.name);
        setEditableServiceStatus(row.status);
        setEditableBodyPart(row.bodyPart);
    };

    const handleCancelClick = () => {
        setEditServiceId(null);
    };

    return (
        <>
            <MainCard title="Services" ref={mainCard1Ref}>
                <>
                    {userType === 'Owner' ? (
                        <>
                            <Stack direction="row" spacing={2}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={gymArray}
                                    onChange={handleGymSelect}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Gym" />}
                                />
                                {branchArray.length > 0 ? (
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo2"
                                        options={branchArray}
                                        onChange={handleBranchSelect}
                                        sx={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="Branch" />}
                                    />
                                ) : (
                                    <></>
                                )}

                                <Button variant="contained" startIcon={<Search />} size="large" onClick={handleSearch}>
                                    Search
                                </Button>
                            </Stack>
                            <div style={{ height: 50 }} />
                        </>
                    ) : (
                        <></>
                    )}
                    {userType !== 'Trainer' ? (
                        <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                            <AnimateButton>
                                <Button disableElevation size="medium" variant="contained" color="secondary" onClick={executeScroll}>
                                    Add New Service
                                </Button>
                            </AnimateButton>
                        </Grid>
                    ) : (
                        <></>
                    )}

                    <div style={{ height: 10 }} />
                    <TableContainer component={Paper} hidden={showTable}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead sx={{ backgroundColor: '#512da8' }}>
                                <TableRow>
                                    <TableCell sx={{ color: 'white' }}>Name</TableCell>
                                    <TableCell align="center" sx={{ color: 'white' }}>
                                        Status
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: 'white' }}>
                                        Body Part
                                    </TableCell>
                                    {userType !== 'Trainer' ? <TableCell align="right" /> : <></>}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {serviceData != null ? (
                                    serviceData.map((row) => (
                                        <React.Fragment key={row.id}>
                                            {editServiceId === row.id ? (
                                                <EditableRow
                                                    editableServiceName={editableServiceName}
                                                    editableServiceStatus={editableServiceStatus}
                                                    editableBodyPart={editableBodyPart}
                                                    setEditableServiceName={setEditableServiceName}
                                                    setEditableServiceStatus={setEditableServiceStatus}
                                                    setEditableBodyPart={setEditableBodyPart}
                                                    handleCancelClick={handleCancelClick}
                                                    handleEditFormSubmit={handleEditFormSubmit}
                                                />
                                            ) : (
                                                <ReadOnlyRow row={row} handleEditClick={handleEditClick} userType={userType} />
                                            )}
                                        </React.Fragment>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            </MainCard>
            <div style={{ height: 10 }} />
            {userType !== 'Trainer' ? (
                <MainCard title="Add New Service" ref={mainCard2Ref}>
                    <TextField
                        required
                        fullWidth
                        value={serviceName}
                        onChange={handleServiceName}
                        label="Name"
                        margin="dense"
                        name="name"
                        color="secondary"
                    />

                    <Autocomplete
                        value={serviceStatus}
                        onChange={handleServiceStatus}
                        id="controllable-states-demo"
                        options={status}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Status"
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                name="bodyPart"
                                color="secondary"
                            />
                        )}
                    />

                    <Autocomplete
                        value={bodyPart}
                        onChange={handleBodyPart}
                        id="controllable-states-demo"
                        options={bodyparts}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Body Part"
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                name="bodyPart"
                                color="secondary"
                            />
                        )}
                    />

                    <Grid container direction="row" justifyContent="flex-end" spacing={3}>
                        <Grid item>
                            <Button
                                disableElevation
                                onClick={handleAddFormSubmit}
                                size="medium"
                                variant="contained"
                                color="secondary"
                                disabled={addButton}
                            >
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </MainCard>
            ) : (
                <></>
            )}
            <div style={{ height: 50 }} />
        </>
    );
}

export default ServiceType;
