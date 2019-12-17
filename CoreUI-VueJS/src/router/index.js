import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

const Home = () => import('@/views/Home')

// Views
const Dashboard = () => import('@/views/Dashboard')
const Login = () => import('@/views/Login')

//CateLog
const CategoryList = () => import('@/views/catalog/CategoryList')
//const ActiveImageList = () => import('@/views/catalog/imagelist/ActiveImageList')
//const AddSingleImage = () => import('@/views/catalog/imagelist/AddSingleImage')

//Order
const OrderListByPrice = () => import('@/views/order/OrderListByPrice')
const OrderListByPackage = () => import('@/views/order/OrderListByPackage')
const ActiveCartList = () => import('@/views/order/ActiveCartList')
const ActiveLightBoxList = () => import('@/views/order/ActiveLightBoxList')

const Customer = () => import('@/views/Customer')

//Photographer
const PhotographerList = () => import('@/views/photographer/PhotographerList')
const ReviewImageList = () => import('@/views/photographer/ReviewImageList')
const PhotographerPaymentList = () => import('@/views/photographer/PhotographerPaymentList')
const PhotographerEarningList = () => import('@/views/photographer/PhotographerEarningList')

const Package = () => import('@/views/Package')

const Quote = () => import('@/views/Quote')

//Setting
const ImageSizePrice = () => import('@/views/setting/ImageSizePrice')
const PhotographerSetting = () => import('@/views/setting/PhotographerSetting')
const WatermarkSetting = () => import('@/views/setting/WatermarkSetting')
const SocialMedia = () => import('@/views/setting/SocialMedia')
const GoalSetting = () => import('@/views/setting/GoalSetting')
const TaxSetting = () => import('@/views/setting/TaxSetting')

const Offers = () => import('@/views/Offers')

const Inquiry = () => import('@/views/Inquiry')

//Account
const Sale = () => import('@/views/account/Sale')
const Customers = () => import('@/views/account/Customer')
const CustomerStatements = () => import('@/views/account/CustomerStatements')
const Cash = () => import('@/views/account/Cash')
const Employees = () => import('@/views/account/Employees')
const OfficeExpense = () => import('@/views/account/OfficeExpense')

//Zoho
const Purchase = () => import('@/views/zoho/Purchase')
const Sales = () => import('@/views/zoho/Sale')

const ImagePosition = () => import('@/views/ImagePosition')

Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

function configRoutes() {
    return [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },  
        {
            path: '/',
            name: 'Home',
            component: TheContainer,
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                },
                {
                    path: 'catalog',
                    redirect: '/catalog/categorylist',
                    name: 'Catalog',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'categorylist',
                            name: 'Category List',
                            component: CategoryList
                        },
                    ]
                },
                {
                    path: '/order',
                    redirect: '/order/orderlistbyprice',
                    name: 'Order',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'orderlistbyprice',
                            name: 'Order List By Price',
                            component: OrderListByPrice
                        },
                        {
                            path: 'orderlistbypackage',
                            name: 'Order List By Package',
                            component: OrderListByPackage
                        },
                        {
                            path: 'activecartlist',
                            name: 'Active Cart List',
                            component: ActiveCartList
                        },
                        {
                            path: 'activelightboxlist',
                            name: 'Active Light Box List',
                            component: ActiveLightBoxList
                        }
                    ]
                },
                {
                    path: 'customer',
                    name: 'Customer',
                    component: Customer
                },
                {
                    path: '/photographer',
                    redirect: '/photographer/photographerlist',
                    name: 'Photographer',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'photographerlist',
                            name: 'Photographer List',
                            component: PhotographerList
                        },
                        {
                            path: 'reviewimagelist',
                            name: 'Review Image List',
                            component: ReviewImageList
                        },
                        {
                            path: 'photographerpaymentlist',
                            name: 'Photographer Payment List',
                            component: PhotographerPaymentList
                        },
                        {
                            path: 'photographerearninglist',
                            name: 'Photographer Earning List',
                            component: PhotographerEarningList
                        }
                    ]
                },
                {
                    path: 'package',
                    name: 'Package',
                    component: Package
                },
                {
                    path: 'quote',
                    name: 'Quote',
                    component: Quote
                },
                {
                    path: '/setting',
                    redirect: '/setting/imagesizeprice',
                    name: 'Setting',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'imagesizeprice',
                            name: 'Image Size & Price',
                            component: ImageSizePrice
                        },
                        {
                            path: 'photographersetting',
                            name: 'Photographer Setting',
                            component: PhotographerSetting
                        },
                        {
                            path: 'watermarksetting',
                            name: 'Watermark Setting',
                            component: WatermarkSetting
                        },
                        {
                            path: 'socialmedia',
                            name: 'Social Media',
                            component: SocialMedia
                        },
                        {
                            path: 'goalsetting',
                            name: 'Goal Setting',
                            component: GoalSetting
                        },
                        {
                            path: 'taxsetting',
                            name: 'Tax Setting',
                            component: TaxSetting
                        }
                    ]
                },
                {
                    path: 'offers',
                    name: 'Offers',
                    component: Offers
                },
                {
                    path: 'inquiry',
                    name: 'Inquiry',
                    component: Inquiry
                },
                {
                    path: '/account',
                    redirect: '/account/sale',
                    name: 'Account',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'sale',
                            name: 'Sale',
                            component: Sale
                        },
                        {
                            path: 'customers',
                            name: 'Customers',
                            component: Customers
                        },
                        {
                            path: 'customerstatements',
                            name: 'Customer Statements',
                            component: CustomerStatements
                        },
                        {
                            path: 'cash',
                            name: 'Cash',
                            component: Cash
                        },
                        {
                            path: 'employees',
                            name: 'Employees',
                            component: Employees
                        },
                        {
                            path: 'officeexpense',
                            name: 'Office Expense',
                            component: OfficeExpense
                        }
                    ]
                },
                {
                    path: '/zoho',
                    redirect: '/zoho/purchase',
                    name: 'Zoho',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'purchase',
                            name: 'Purchase',
                            component: Purchase
                        },
                        {
                            path: 'sales',
                            name: 'Sale',
                            component: Sales
                        }
                    ]
                },
                {
                    path: 'imageposition',
                    name: 'Image Position',
                    component: ImagePosition
                },
            ]
        }
    ]
}

