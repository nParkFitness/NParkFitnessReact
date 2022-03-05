import React, { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@material-ui/core';

// project imports
import IncomeCard from '../dashboard-component/IncomeCard';
import SmallDarkCard from '../dashboard-component/SmallDarkCard';
import AttendanceCard from '../dashboard-component/AttendanceCard';
import MemberCard from '../dashboard-component/MemberCard';
import SmallLightCard from '../dashboard-component/SmallLightCard';
import ServiceCard from '../dashboard-component/ServiceCard';
// import PopularCard from '../Default/PopularCard';
import TotalOrderLineChartCard from '../Default/TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../Default/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../Default/TotalIncomeLightCard';
import TotalGrowthBarChart from '../dashboard-component/TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

import HttpCommon from 'utils/http-common';
import { Store } from 'react-notifications-component';

import Lottie from 'react-lottie';
import * as success from 'assets/images/loading.json';
// ===========================|| DEFAULT DASHBOARD ||=========================== //

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: success.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const TrainerDashboard = () => {
    const [isLoading, setLoading] = useState(false);
    const [isDataLoading, setDataLoading] = useState(true);
    const [memberCount, setMemberCount] = useState();
    const [serviceCount, setServiceCount] = useState();
    const [exMemberCount, setExMemberCount] = useState();
    const [trainerCount, setTrainerCount] = useState();
    const [memberData, setMemberData] = useState();
    const [attendanceCount, setAttendanceCount] = useState();
    const [incomeCount, setIncomeCount] = useState();
    const [serviceData, setServiceData] = useState();
    const [pendingScheduleCount, setPendingScheduleCount] = useState();
    const [pendingDietCount, setPendingDietCount] = useState();

    const branchId = 1;
    const userId = 4;

    function getTrainerDashboard() {
        // let arr = [];

        HttpCommon.get(`/api/serviceType/getServiceTypeByBranchId/${branchId}`).then((response1) => {
            console.log(response1.data.data);
            setServiceData(response1.data.data);
            HttpCommon.post(`api/dashboard/getMemberDetails/${userId}`, { branchId }).then(async (response) => {
                console.log(response.data.data);
                setMemberCount(response.data.data.memberCount);
                setServiceCount(response.data.data.serviceCount);
                setExMemberCount(response.data.data.exMemberCount);
                setMemberData(response.data.data.memberData);

                let body = {
                    chartMonthData: [],
                    chartYearData: [],
                    monthCount: 0,
                    yearCount: 0
                };
                if (response.data.data.attendanceCount !== null) {
                    const monthArr = [];
                    const yearArr = [];
                    let monthCount = 0;
                    let yearCount = 0;
                    await Promise.all(
                        response.data.data.attendanceCount.attendanceMonth.map((element) => {
                            monthCount += element.count;
                            return monthArr.push(element.count);
                        })
                    );

                    await Promise.all(
                        response.data.data.attendanceCount.attendanceYear.map((element) => {
                            yearCount += element.count;
                            return yearArr.push(element.count);
                        })
                    );

                    body = { monthArr, yearArr, monthCount, yearCount };
                }

                setAttendanceCount(body);
                let tempScheduleCount = 0;
                let tempDietCount = 0;
                await Promise.all(
                    response.data.data.memberData.map((element) => {
                        if (!element.isDietAvailable) {
                            tempDietCount += 1;
                        }
                        if (element.scheduleExpireDate !== null) {
                            const d1 = Date.parse(element.scheduleExpireDate);
                            const today = new Date().toISOString().slice(0, 10);
                            console.log('element.scheduleExpireDate<today');
                            console.log(element.scheduleExpireDate < today);
                            if (element.scheduleExpireDate < today) {
                                tempScheduleCount += 1;
                            }
                        } else {
                            tempScheduleCount += 1;
                        }
                        return 0;
                    })
                );
                setPendingDietCount(tempDietCount);
                setPendingScheduleCount(tempScheduleCount);

                console.log('Is It Done2');

                setDataLoading(false);
                // setLoading(false);
            });
        });
    }

    useEffect(() => {
        getTrainerDashboard();
    }, []);

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
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <IncomeCard isLoading={isLoading} amount={memberCount} title="Total Assigned Member Count" />
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <AttendanceCard isLoading={isLoading} data={attendanceCount} />
                            </Grid>
                            <Grid item lg={4} md={12} sm={12} xs={12}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item sm={6} xs={12} md={12} lg={12}>
                                        <SmallDarkCard
                                            isLoading={isLoading}
                                            amount={`${serviceCount} Services`}
                                            title="Total Services In Branch"
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12} md={12} lg={12}>
                                        <SmallLightCard
                                            isLoading={isLoading}
                                            amount={`${pendingScheduleCount} Schedules`}
                                            title="Total Pending Schedules"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sm={12} md={12} lg={4}>
                                <MemberCard isLoading={isLoading} data={memberData} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={4}>
                                <ServiceCard isLoading={isLoading} data={serviceData} />
                            </Grid>
                            <Grid item lg={4} md={12} sm={12} xs={12}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item sm={6} xs={12} md={12} lg={12}>
                                        <SmallDarkCard
                                            isLoading={isLoading}
                                            amount={`${pendingDietCount} Diet Plan`}
                                            title="Total Pending Diet Plan"
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12} md={12} lg={12}>
                                        <SmallLightCard
                                            isLoading={isLoading}
                                            amount={`${exMemberCount} Membership`}
                                            title="Total Expired Memberships"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default TrainerDashboard;
