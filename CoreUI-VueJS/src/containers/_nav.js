export default [
    {
        _name: 'CSidebarNav',
        _children: [
            {
                _name: 'CSidebarNavItem',
                name: 'Dashboard',
                to: '/dashboard',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Catalog',
                route: '/catalog',
                icon: 'cil-puzzle',
                items: [
                    {
                        name: 'Category List',
                        to: '/catalog/categorylist',
                        icon: 'cil-puzzle',
                    },
                ],
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Order',
                route: '/order',
                icon: 'cil-puzzle',
                items: [
                    {
                        name: 'Order List By Price',
                        to: '/order/orderlistbyprice',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Order List By Package',
                        to: '/order/orderlistbypackage',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Active Cart List',
                        to: '/order/activecartlist',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Active Light Box List',
                        to: '/order/activelightboxlist',
                        icon: 'cil-puzzle',
                    },
                ],
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Customer',
                to: '/customer',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Photographer',
                route: '/photographer',
                icon: 'cil-puzzle',
                items: [
                    {
                        name: 'Photographer List',
                        to: '/photographer/photographerlist',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Review Image List',
                        to: '/photographer/reviewimagelist',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Photographer Payment List',
                        to: '/photographer/photographerpaymentlist',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Photographer Earning List',
                        to: '/photographer/photographerearninglist',
                        icon: 'cil-puzzle',
                    },
                ],
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Package',
                to: '/package',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Quote',
                to: '/quote',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Setting',
                route: '/setting',
                icon: 'cil-puzzle',
                items: [
                    {
                        name: 'Image Size & Price',
                        to: '/setting/imagesizeprice',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Photographer Setting',
                        to: '/setting/photographersetting',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Watermark Setting',
                        to: '/setting/watermarksetting',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Social Media',
                        to: '/setting/socialmedia',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Goal Setting',
                        to: '/setting/goalsetting',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Tax Setting',
                        to: '/setting/taxsetting',
                        icon: 'cil-puzzle',
                    },
                ],
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Offers',
                to: '/offers',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Inquiry',
                to: '/inquiry',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Account',
                route: '/account',
                icon: 'cil-puzzle',
                items: [
                    {
                        name: 'Sale',
                        to: '/account/sale',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Customers',
                        to: '/account/customers',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Customer Statements',
                        to: '/account/customerstatements',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Cash',
                        to: '/account/cash',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Employees',
                        to: '/account/employees',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Office Expense',
                        to: '/account/officeexpense',
                        icon: 'cil-puzzle',
                    },
                ],
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Zoho',
                route: '/zoho',
                icon: 'cil-puzzle',
                items: [
                    {
                        name: 'Purchase',
                        to: '/zoho/purchase',
                        icon: 'cil-puzzle',
                    },
                    {
                        name: 'Sales',
                        to: '/zoho/sales',
                        icon: 'cil-puzzle',
                    },
                ],
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Image Position',
                to: '/imageposition',
                icon: 'cil-speedometer',
            }
        ]
    }
]