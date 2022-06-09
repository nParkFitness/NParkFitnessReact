// assets
import {
    IconKey,
    IconReceipt2,
    IconBug,
    IconBellRinging,
    IconPhoneCall,
    IconCash,
    IconBuildingCommunity,
    IconBrandCodesandbox,
    IconBuildingArch,
    IconUsers,
    IconReportAnalytics,
    IconReceipt,
    IconToolsKitchen2,
    IconToolsKitchen1,
    IconCalendar,
    IconSubtask,
    IconBike
} from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconReceipt2,
    IconBug,
    IconBellRinging,
    IconPhoneCall,
    IconCash
};

// ===========================|| EXTRA PAGES MENU ITEMS ||=========================== //

function pagesRoute() {
    const type = localStorage.getItem('type');
    switch (type) {
        case 'Admin':
            return [
                {
                    id: 'subscriptionCreation',
                    title: 'SubscriptionTypes',
                    type: 'item',
                    url: '/pages/subscriptionTypes',
                    icon: IconReceipt,
                    breadcrumbs: false
                },
                {
                    id: 'employee-management',
                    title: 'Employee Managment',
                    type: 'item',
                    url: '/pages/employeeManagement',
                    icon: IconUsers,
                    breadcrumbs: false
                },
                {
                    id: 'notification',
                    title: 'Notification',
                    type: 'item',
                    url: '/pages/notification',
                    icon: IconBellRinging,
                    breadcrumbs: false
                },
                {
                    id: 'employee-management',
                    title: 'Employee Managment',
                    type: 'item',
                    url: '/pages/employeeManagement',
                    icon: IconUsers,
                    breadcrumbs: false
                },
                {
                    id: 'calorieCal',
                    title: 'Calorie Calculator',
                    type: 'item',
                    url: '/pages/calorieCal',
                    icon: IconToolsKitchen2,
                    breadcrumbs: false
                },
                {
                    id: 'report',
                    title: 'Reports',
                    type: 'collapse',
                    icon: IconReportAnalytics,
                    children: [
                        {
                            id: 'member-report',
                            title: 'Member Report',
                            type: 'item',
                            url: '/pages/report/memberReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'trainer-report',
                            title: 'Trainer Report',
                            type: 'item',
                            url: '/pages/report/trainerReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'branch-report',
                            title: 'Branch Report',
                            type: 'item',
                            url: '/pages/report/branchReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'gym-report',
                            title: 'Gym Report',
                            type: 'item',
                            url: '/pages/report/gymReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'admin-report',
                            title: 'Admin Report',
                            type: 'item',
                            url: '/pages/report/adminReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'payment-report',
                            title: 'Payment Report',
                            type: 'item',
                            url: '/pages/report/paymentReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                }
            ];
        case 'Owner':
            return [
                {
                    id: 'subscriptionPayment',
                    title: 'Subscription',
                    type: 'item',
                    url: '/pages/subscription',
                    icon: IconReceipt,
                    breadcrumbs: false
                },
                {
                    id: 'gym',
                    title: 'Gym',
                    type: 'item',
                    url: '/pages/gym',
                    icon: IconBike,
                    breadcrumbs: false
                },
                {
                    id: 'branch',
                    title: 'Branch',
                    type: 'item',
                    url: '/pages/branch',
                    icon: IconSubtask,
                    breadcrumbs: false
                },
                {
                    id: 'membership',
                    title: 'Membership',
                    type: 'item',
                    url: '/pages/membership',
                    icon: IconUsers,
                    breadcrumbs: false
                },
                {
                    id: 'services',
                    title: 'Services',
                    type: 'item',
                    url: '/pages/services',
                    icon: IconReportAnalytics,
                    breadcrumbs: false
                },
                {
                    id: 'employee-management',
                    title: 'Employee Managment',
                    type: 'item',
                    url: '/pages/employeeManagement',
                    icon: IconUsers,
                    breadcrumbs: false
                },
                {
                    id: 'notification',
                    title: 'Notification',
                    type: 'item',
                    url: '/pages/notification',
                    icon: IconBellRinging,
                    breadcrumbs: false
                },
                {
                    id: 'customerPayment',
                    title: 'Customer Payment',
                    type: 'item',
                    url: '/pages/customerPayment',
                    icon: icons.IconCash,
                    breadcrumbs: false
                },
                {
                    id: 'services',
                    title: 'Services',
                    type: 'item',
                    url: '/pages/services',
                    icon: IconReportAnalytics,
                    breadcrumbs: false
                },
                {
                    id: 'employee-management',
                    title: 'Employee Managment',
                    type: 'item',
                    url: '/pages/employeeManagement',
                    icon: IconUsers,
                    breadcrumbs: false
                },
                {
                    id: 'calorieCal',
                    title: 'Calorie Calculator',
                    type: 'item',
                    url: '/pages/calorieCal',
                    icon: IconToolsKitchen2,
                    breadcrumbs: false
                },
                {
                    id: 'report',
                    title: 'Reports',
                    type: 'collapse',
                    icon: IconReportAnalytics,
                    children: [
                        {
                            id: 'member-report',
                            title: 'Member Report',
                            type: 'item',
                            url: '/pages/report/memberReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'trainer-report',
                            title: 'Trainer Report',
                            type: 'item',
                            url: '/pages/report/trainerReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'branch-report',
                            title: 'Branch Report',
                            type: 'item',
                            url: '/pages/report/branchReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'gym-report',
                            title: 'Gym Report',
                            type: 'item',
                            url: '/pages/report/gymReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'admin-report',
                            title: 'Admin Report',
                            type: 'item',
                            url: '/pages/report/adminReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'payment-report',
                            title: 'Payment Report',
                            type: 'item',
                            url: '/pages/report/paymentReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                }
            ];
        case 'Manager':
            return [
                {
                    id: 'employee-management',
                    title: 'Employee Managment',
                    type: 'item',
                    url: '/pages/employeeManagement',
                    icon: IconUsers,
                    breadcrumbs: false
                },
                {
                    id: 'services',
                    title: 'Services',
                    type: 'item',
                    url: '/pages/services',
                    icon: IconReportAnalytics,
                    breadcrumbs: false
                },
                {
                    id: 'membership',
                    title: 'Membership',
                    type: 'item',
                    url: '/pages/membership',
                    icon: IconUsers,
                    breadcrumbs: false
                },
                {
                  id: 'branch',
                  title: 'Branch',
                  type: 'item',
                  url: '/pages/branch',
                  icon: IconSubtask,
                  breadcrumbs: false
                },
                {
                  id: 'schedule',
                  title: 'Schedule',
                  type: 'item',
                  url: '/pages/schedule',
                  icon: IconCalendar,
                  breadcrumbs: false
                },
                {
                    id: 'notification',
                    title: 'Notification',
                    type: 'item',
                    url: '/pages/notification',
                    icon: IconBellRinging,
                    breadcrumbs: false
                },
                {
                    id: 'customerPayment',
                    title: 'Customer Payment',
                    type: 'item',
                    url: '/pages/customerPayment',
                    icon: icons.IconCash,
                    breadcrumbs: false
                },
                {
                    id: 'services',
                    title: 'Services',
                    type: 'item',
                    url: '/pages/services',
                    icon: IconReportAnalytics,
                    breadcrumbs: false
                },
                {
                    id: 'attendance',
                    title: 'Attendance',
                    type: 'item',
                    url: '/pages/attendance',
                    icon: IconUsers,
                    breadcrumbs: false
                },
                {
                    id: 'employee-management',
                    title: 'Employee Managment',
                    type: 'item',
                    url: '/pages/employeeManagement',
                    icon: IconUsers,
                    breadcrumbs: false
                },
                {
                    id: 'calorieCal',
                    title: 'Calorie Calculator',
                    type: 'item',
                    url: '/pages/calorieCal',
                    icon: IconToolsKitchen2,
                    breadcrumbs: false
                },
                {
                    id: 'report',
                    title: 'Reports',
                    type: 'collapse',
                    icon: IconReportAnalytics,
                    children: [
                        {
                            id: 'member-report',
                            title: 'Member Report',
                            type: 'item',
                            url: '/pages/report/memberReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'trainer-report',
                            title: 'Trainer Report',
                            type: 'item',
                            url: '/pages/report/trainerReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'branch-report',
                            title: 'Branch Report',
                            type: 'item',
                            url: '/pages/report/branchReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'gym-report',
                            title: 'Gym Report',
                            type: 'item',
                            url: '/pages/report/gymReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'admin-report',
                            title: 'Admin Report',
                            type: 'item',
                            url: '/pages/report/adminReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'price',
                            title: 'Price',
                            type: 'item',
                            url: '/pages/price',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'payment-report',
                            title: 'Payment Report',
                            type: 'item',
                            url: '/pages/report/paymentReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                }
            ];
        case 'Trainer':
            return [
                {
                    id: 'notification',
                    title: 'Notification',
                    type: 'item',
                    url: '/pages/notification',
                    icon: IconBellRinging,
                    breadcrumbs: false
                },
                {
                    id: 'schedule',
                    title: 'Schedule',
                    type: 'item',
                    url: '/pages/schedule',
                    icon: IconCalendar,
                    breadcrumbs: false
                },
                {
                    id: 'dietPlan',
                    title: 'Diet Plan',
                    type: 'item',
                    url: '/pages/dietPlan',
                    icon: IconToolsKitchen2,
                    breadcrumbs: false
                },
                {
                    id: 'membership',
                    title: 'Membership',
                    type: 'item',
                    url: '/pages/membership',
                    icon: IconUsers,
                    breadcrumbs: false
                },
                {
                    id: 'services',
                    title: 'Services',
                    type: 'item',
                    url: '/pages/services',
                    icon: IconReportAnalytics,
                    breadcrumbs: false
                },
                {
                    id: 'attendance',
                    title: 'Attendance',
                    type: 'item',
                    url: '/pages/attendance',
                    icon: IconUsers,
                    breadcrumbs: false
                },
                {
                    id: 'calorieCal',
                    title: 'Calorie Calculator',
                    type: 'item',
                    url: '/pages/calorieCal',
                    icon: IconToolsKitchen2,
                    breadcrumbs: false
                },
                {
                    id: 'report',
                    title: 'Reports',
                    type: 'collapse',
                    icon: IconReportAnalytics,
                    children: [
                        {
                            id: 'member-report',
                            title: 'Member Report',
                            type: 'item',
                            url: '/pages/report/memberReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'trainer-report',
                            title: 'Trainer Report',
                            type: 'item',
                            url: '/pages/report/trainerReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'branch-report',
                            title: 'Branch Report',
                            type: 'item',
                            url: '/pages/report/branchReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'gym-report',
                            title: 'Gym Report',
                            type: 'item',
                            url: '/pages/report/gymReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'admin-report',
                            title: 'Admin Report',
                            type: 'item',
                            url: '/pages/report/adminReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'payment-report',
                            title: 'Payment Report',
                            type: 'item',
                            url: '/pages/report/paymentReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'price',
                            title: 'Price',
                            type: 'item',
                            url: '/pages/price',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                }
            ];
        default:
            return [
                {
                    id: 'customerPayment',
                    title: 'Customer Payment',
                    type: 'item',
                    url: '/pages/customerPayment',
                    icon: icons.IconCash,
                    breadcrumbs: false
                },
                {
                    id: 'subscriptionPayment',
                    title: 'Subscription',
                    type: 'item',
                    url: '/pages/subscription',
                    icon: IconReceipt,
                    breadcrumbs: false
                },
                {
                    id: 'subscriptionCreation',
                    title: 'SubscriptionTypes',
                    type: 'item',
                    url: '/pages/subscriptionTypes',
                    icon: IconReceipt,
                    breadcrumbs: false
                },
                {
                    id: 'notification',
                    title: 'Notification',
                    type: 'item',
                    url: '/pages/notification',
                    icon: IconBellRinging,
                    breadcrumbs: false
                },
                {
                    id: 'calorieCal',
                    title: 'Calorie Calculator',
                    type: 'item',
                    url: '/pages/calorieCal',
                    icon: IconToolsKitchen2,
                    breadcrumbs: false
                },
                {
                    id: 'report',
                    title: 'Reports',
                    type: 'collapse',
                    icon: IconReportAnalytics,
                    children: [
                        {
                            id: 'member-report',
                            title: 'Member Report',
                            type: 'item',
                            url: '/pages/report/memberReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'trainer-report',
                            title: 'Trainer Report',
                            type: 'item',
                            url: '/pages/report/trainerReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'branch-report',
                            title: 'Branch Report',
                            type: 'item',
                            url: '/pages/report/branchReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'gym-report',
                            title: 'Gym Report',
                            type: 'item',
                            url: '/pages/report/gymReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'admin-report',
                            title: 'Admin Report',
                            type: 'item',
                            url: '/pages/report/adminReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'payment-report',
                            title: 'Payment Report',
                            type: 'item',
                            url: '/pages/report/paymentReport',
                            external: true,
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'services',
                    title: 'Services',
                    type: 'item',
                    url: '/pages/services',
                    icon: IconReportAnalytics,
                    breadcrumbs: false
                },
                {
                    id: 'employee-management',
                    title: 'Employee Managment',
                    type: 'item',
                    url: '/pages/employeeManagement',
                    icon: IconUsers,
                    breadcrumbs: false
                },
                {
                    id: 'attendance',
                    title: 'Attendance',
                    type: 'item',
                    url: '/pages/attendance',
                    icon: IconUsers,
                    breadcrumbs: false
                }
            ];
    }
}

const pages = () => {
    const pages = {
        id: 'pages',
        title: 'Pages',
        caption: 'Pages Caption',
        type: 'group',
        children: pagesRoute()
    };
    return pages;

};

// const pages = {
//     id: 'pages',
//     title: 'Pages',
//     caption: 'Pages Caption',
//     type: 'group',
//     children: pagesRoute()
// };

export default pages;
