import {  HiOutlineMail } from 'react-icons/hi';
import {
  TbCalendar,
  TbChartHistogram,
  TbFile,
  TbLockAccess,
  TbUsers,
} from 'react-icons/tb';
import {  FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import {
  RiFileList3Line,
  RiHeartLine,
  RiImageLine,
  RiLockPasswordLine,
  RiMoneyDollarCircleLine,
  RiStethoscopeLine,
  RiUserLine,
} from 'react-icons/ri';
import {
  MdOutlineAttachMoney,
  MdOutlineCampaign,
  MdOutlineTextsms,
} from 'react-icons/md';
import { BiCalendar, BiUserPlus } from 'react-icons/bi';
import { FiGrid, FiUsers, FiBox } from 'react-icons/fi'; // Example for diamond icon, adjust as needed
import { FaRegGem} from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import {  RiArticleLine } from 'react-icons/ri';
import { GiNotebook } from 'react-icons/gi';
import { BiNews } from 'react-icons/bi';
import { Subtitles } from 'lucide-react';

export const MenuDatas = [
  {
    title: 'Dashboard',
    path: '/',
    icon: FiGrid, // Square grid icon
  },
  {
    title: 'Vendors',
    path: '/vendors',
    icon: FaRegGem, // Gem/Diamond icon
  },
  {
    title: 'Subscription',
    path: '/subscription',
    icon: FaRegGem, // Gem/Diamond icon (same as above)
  },  
  {
    title: 'Add Expert',
    path: '/expertsBoard',
    icon: FaRegGem, // Gem/Diamond icon (same as above)
  
  }, 
  {
    title: 'E Commerce',
    path: '/store',
    icon: FaRegGem, // Gem/Diamond icon (same as above)
  }, 
 
  {
    title: 'Users',
    path: '/patients',
    icon: FiUsers, // Group of users icon
  },
  {
    title: 'Sliders',
    path: '/sliders',
    icon: FiBox, // Image/Slider icon
  },
  {
    title: 'Expert',
    path: '/experts',
    icon: GiNotebook, // Notebook icon
  },
  {
    title: 'Analtics',
    path: '/analytics',
    icon: GiNotebook, // Notebook icon
  },
  {
    title: 'Diet Plans',
    path: '/dietplans',
    icon: RiArticleLine, // Document icon
  },
  {
    title: 'Healthy recipes',
    path: '/healthyrecipes',
    icon: RiArticleLine, // Document icon
  },
  {
    title: 'Coupons & Offer',
    path: '/coupons',
    icon: RiArticleLine, // Document icon
  },
  {
    title: 'Ingredients',
    path: '/ingredients',
    icon: GiNotebook, // Ingredient icon
  },
  {
    title: 'Product',
    path: '/product',
    icon: GiNotebook, // Ingredient icon
  },
  {
    title: 'Activity',
    path: '/activity',
    icon: BsGraphUp, // Graph icon
  },
  {
    title: 'Podcasts',
    path: '/podcasts',
    icon: MdOutlineCampaign, // Microphone/Podcast icon
  },
  {
    title: 'Notification',
    path: '/notification',
    icon: MdOutlineCampaign, // Microphone/Podcast icon
  },

  {
    title: 'Blogs',
    path: '/blogs',
    icon: BiNews, // Blog/Newspaper icon
  },
  {
    title: 'Questionars',
    path: '/questionars',
    icon: BiNews, // Ecommerce icon
  },
  {
    title: 'Video',
    path: '/videos',
    icon: BiNews, // Ecommerce icon
  },

];
export const orders = [
  {
    id: '#Order-11414',
    item: 'MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate',
    customerName: 'Mayur kamble',
    date: '12/10/2001',
    paymentInfo: 'Debit Card',
    price: '₹ 3,099',
    commission: '₹ 399',
    status: 'Processing',
    image: '/images/1 (1.png)', // Placeholder for the product image
  },
  {
    id: '#Order-11415',
    item: 'MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate',
    customerName: 'Mayur kamble',
    date: '12/10/2001',
    paymentInfo: 'Debit Card',
    price: '₹ 3,099',
    commission: '₹ 399',
    status: 'Shipping',
    image: '/images/1 (1.png)', // Placeholder for the product image
  },
  {
    id: '#Order-11416',
    item: 'MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate',
    customerName: 'Mayur kamble',
    date: '12/10/2001',
    paymentInfo: 'Debit Card',
    price: '₹ 3,099',
    commission: '₹ 399',
    status: 'Delivered',
    image: '/images/1 (1.png)', // Placeholder for the product image
  },
  {
    id: '#Order-11419',
    item: 'MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate',
    customerName: 'Mayur kamble',
    date: '12/10/2001',
    paymentInfo: 'Debit Card',
    price: '₹ 3,099',
    commission: '₹ 399',
    status: 'Delivered',
    image: '/images/1 (1.png)', // Placeholder for the product image
  },
  {
    id: '#Order-11418',
    item: 'MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate',
    customerName: 'Mayur kamble',
    date: '12/10/2001',
    paymentInfo: 'Debit Card',
    price: '₹ 3,099',
    commission: '₹ 399',
    status: 'Shipping',
    image: '/images/1 (1.png)', // Placeholder for the product image
  },
  // Add more orders here...
];


export const adminInfo = {
  profile: {
      fullName: "David Gupta",
      mobile: "+44 (13) 1234 123",
      email: "alchemistmanips@gmail.com",
      location: "United States",
      image:'/images/hero.png'
  },
  subAdmins: [
      { name: "Esthera Jackson", email: "EstheraJackson@gmail.com", product: "Ecommerce" },
      { name: "Esthera Jackson", email: "EstheraJackson@gmail.com", product: "Expert" },
      { name: "Esthera Jackson", email: "EstheraJackson@gmail.com", product: "Vendor" },
      { name: "Esthera Jackson", email: "EstheraJackson@gmail.com", product: "Vendor" }
  ],
};

export const community = [
  {
    id: 1,
    name: "John Deo",
    level: "Level 8",
    image: '/images/hero.png',
    progress: 90,
    achievements: ["🐢", "🐢", "🐢", "🐢", "🐢"],
  },
  {
    id: 2,
    name: "Shelby Goode",
    image: '/images/hero.png',
    level: "Level 5",
    progress: 79,
    achievements: ["🐢", "🐢", "🐢", "🐢"],
  },
  {
    id: 3,
    name: "Robert Bacins",
    image: '/images/hero.png',
    level: "Level 4",
    progress: 78,
    achievements: ["🐢", "🐢", "🐢"],
  },
  {
    id: 4,
    name: "John Carlio",
    image: '/images/hero.png',
    level: "Level 3",
    progress: 20,
    achievements: ["🐢", "🐢", "🐢", "🌅"],
  },
]
export const memberData = [
  {
    id: 1,
    title: 'Hugo Lloris',
    image: '/images/hero.png',
    admin: false,
    email: 'hugolloris@gmail.com',
    phone: '+1 234 567 890',
    gender: 'Male',
    Plan: '6 Months of inclusive',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Harry Kane',
    image: '/images/user2.png',
    admin: true,
    email: 'harrykane@gmail.com',
    phone: '+1 234 567 891',
    gender: 'Male',
    Plan: '12 Months of premium',
    status: 'Active',
  },
  {
    id: 3,
    title: 'Son Heung-min',
    image: '/images/user3.png',
    admin: false,
    email: 'sonhm@gmail.com',
    phone: '+1 234 567 892',
    gender: 'Male',
    Plan: '3 Months of basic',
    status: 'Inactive',
  },
  {
    id: 4,
    title: 'Dele Alli',
    image: '/images/user4.png',
    admin: false,
    email: 'delealli@gmail.com',
    phone: '+1 234 567 893',
    gender: 'Male',
    Plan: '1 Year of premium',
    status: 'Active',
  },
  {
    id: 5,
    title: 'Jan Vertonghen',
    image: '/images/user5.png',
    admin: true,
    email: 'vertonghen@gmail.com',
    phone: '+1 234 567 894',
    gender: 'Male',
    Plan: '6 Months of inclusive',
    status: 'Pending',
  },
  {
    id: 6,
    title: 'Christian Eriksen',
    image: '/images/user6.png',
    admin: false,
    email: 'eriksen@gmail.com',
    phone: '+1 234 567 895',
    gender: 'Male',
    Plan: '12 Months of premium',
    status: 'Active',
  },
  {
    id: 7,
    title: 'Toby Alderweireld',
    image: '/images/user7.png',
    admin: false,
    email: 'toby.alderweireld@gmail.com',
    phone: '+1 234 567 896',
    gender: 'Male',
    Plan: '3 Months of basic',
    status: 'Inactive',
  },
  {
    id: 8,
    title: 'Moussa Sissoko',
    image: '/images/user8.png',
    admin: true,
    email: 'sissoko@gmail.com',
    phone: '+1 234 567 897',
    gender: 'Male',
    Plan: '1 Year of premium',
    status: 'Active',
  },
  {
    id: 9,
    title: 'Lucas Moura',
    image: '/images/user9.png',
    admin: false,
    email: 'lucasmoura@gmail.com',
    phone: '+1 234 567 898',
    gender: 'Male',
    Plan: '6 Months of inclusive',
    status: 'Pending',
  },
  {
    id: 10,
    title: 'Davinson Sánchez',
    image: '/images/hero0.png',
    admin: false,
    email: 'sanchez@gmail.com',
    phone: '+1 234 567 899',
    gender: 'Male',
    Plan: '12 Months of premium',
    status: 'Active',
  },
];
export const plansData = [
  {
    title: 'PREMIUM',
    price: '₹1,500',
    features: ['All in one', 'Yoga', 'Home Workout', 'Nutrition', 'Expert Consultation', 'Ecommerce', 'Diet plan'],
    isPremium: true,
  },
  {
    title: 'BASIC',
    price: '₹1,000',
    features: ['Yoga', 'Home Workout', 'Nutrition', 'Expert Consultation', 'Ecommerce', 'Diet plan','Mindfull'],
    excluded: ['Ecommerce', 'Diet plan',''],
  },
  {
    title: 'STARTER',
    price: '₹500',
    features: ['Yoga', 'Home Workout','Mindfull', 'Nutrition', 'Expert Consultation', 'Ecommerce', 'Diet plan',],
    excluded: ['Nutrition', 'Expert Consultation',  'Diet plan'],
  },
];
export const couponData = [
  {
    id: 1,
    discountCode: "Yonta10",
    discountDescription: "Offer 10% off the purchase price",
    couponType: "Buy X get Y",
    useLimit: "Single use",
    lastModified: "12/10/2001",
    status: "Inactive",
  },
  {
    id: 2,
    discountCode: "Winter50",
    discountDescription: "50% off for winter season items",
    couponType: "Seasonal",
    useLimit: "Multi-use",
    lastModified: "01/12/2023",
    status: "Active",
  },
  {
    id: 3,
    discountCode: "FreeShip",
    discountDescription: "Free shipping on all orders above $50",
    couponType: "Shipping",
    useLimit: "Single use",
    lastModified: "05/08/2023",
    status: "Active",
  },
  {
    id: 4,
    discountCode: "SUMMER20",
    discountDescription: "20% off on summer collection",
    couponType: "Seasonal",
    useLimit: "Single use",
    lastModified: "15/06/2023",
    status: "Inactive",
  },
  {
    id: 5,
    discountCode: "FIRSTBUY",
    discountDescription: "5% off on your first purchase",
    couponType: "First Purchase",
    useLimit: "Single use",
    lastModified: "10/11/2023",
    status: "Active",
  },
  {
    id: 6,
    discountCode: "FREEMASK",
    discountDescription: "Free mask with every purchase",
    couponType: "Gift with Purchase",
    useLimit: "Single use",
    lastModified: "22/07/2023",
    status: "Inactive",
  },
  {
    id: 7,
    discountCode: "MEGASALE",
    discountDescription: "30% off during the mega sale",
    couponType: "Event",
    useLimit: "Multi-use",
    lastModified: "05/09/2023",
    status: "Active",
  },
  {
    id: 8,
    discountCode: "NEWYEAR20",
    discountDescription: "20% off for New Year's Sale",
    couponType: "Seasonal",
    useLimit: "Multi-use",
    lastModified: "02/01/2023",
    status: "Inactive",
  },
  {
    id: 9,
    discountCode: "BLACKFRIDAY",
    discountDescription: "50% off for Black Friday",
    couponType: "Event",
    useLimit: "Single use",
    lastModified: "25/11/2023",
    status: "Active",
  },
  {
    id: 10,
    discountCode: "CYBERDEAL",
    discountDescription: "40% off during Cyber Monday",
    couponType: "Event",
    useLimit: "Single use",
    lastModified: "28/11/2023",
    status: "Inactive",
  },
];
export  const discountTypes = [
  {
    title: "Amount off Products",
    description: "Discount specific Products or collection of products",
    route: "/couponsadd"
  },
  {
    title: "Buy X get Y",
    description: "Discount products based on a customer’s purchase",
    route: "/couponsaddX"
  },
  {
    title: "Amount off order",
    description: "Discount the total order amount",
    route: "/couponsaddorder"
  },
];

export const data = [
  { name: 'Fitness', value: 19000 },
  { name: 'Ingredients', value: 25000 },
  { name: 'Yoga', value: 180000 },
  { name: 'Workout', value: 200000 },
  { name: 'Ingredients', value: 150000 },
  { name: 'Nutration', value: 18000 },
  { name: 'Diet', value: 40000 },
  { name: 'Workout', value: 200000 },

];

export const dataMonth = [
  { name: 'Jan', value: 19000 },
  { name: 'Feb', value: "2500" },
  { name: 'Mar', value: 18000 },
  { name: 'Apr', value: 22000 },
  { name: 'May', value: 3000 },
  { name: 'Jun', value: 20000 },
  { name: 'Jul', value: 2000 },
];
export const vendordata=[
  {
    BusinessName:"Muscleblaze",
    BusinessType:"Supplier",
    Product:"26",
    TotalOrders:"896",
    RevenueGenerated:"₹5.265",
    UnitSold:"5966",
    Location:"Mumbai"
  },
  {
    BusinessName:"As it is",
    BusinessType:"Merchandise",
    Product:"26",
    TotalOrders:"1896",
    RevenueGenerated:"₹2.265",
    UnitSold:"5966",
    Location:"Mumbai"
  },
  {
    BusinessName:"Muscleblaze",
    BusinessType:"Supplier",
    Product:"26",
    TotalOrders:"896",
    RevenueGenerated:"₹3.265",
    UnitSold:"5966",
    Location:"Mumbai"
  },
  {
    BusinessName:"On Nutrition",
    BusinessType:"Supplier",
    Product:"26",
    TotalOrders:"3896",
    RevenueGenerated:"₹6.465",
    UnitSold:"5966",
    Location:"Mumbai"
  },
  {
    BusinessName:"Muscleblaze",
    BusinessType:"Supplier",
    Product:"26",
    TotalOrders:"8196",
    RevenueGenerated:"₹5.865",
    UnitSold:"5966",
    Location:"Mumbai"
  },
]
export const vendorListdata=[
  {
    BusinessName:"Muscleblaze",
    BusinessType:"Supplier",
    Product:"26",
    TotalOrders:"896",
    RevenueGenerated:"₹5.265",
    JoinedDate:"28/11/2023",
    Location:"Mumbai"
  },
  {
    BusinessName:"As it is",
    BusinessType:"Merchandise",
    Product:"26",
    TotalOrders:"1896",
    RevenueGenerated:"₹2.265",
    JoinedDate:"28/11/2023",

    Location:"Mumbai"
  },
  {
    BusinessName:"Muscleblaze",
    BusinessType:"Supplier",
    Product:"26",
    TotalOrders:"896",
    RevenueGenerated:"₹3.265",
    JoinedDate:"28/11/2023",
    Location:"Mumbai"
  },
  {
    BusinessName:"On Nutrition",
    BusinessType:"Supplier",
    Product:"26",
    TotalOrders:"3896",
    RevenueGenerated:"₹6.465",
    JoinedDate:"28/11/2023",
    Location:"Mumbai"
  },
  {
    BusinessName:"Muscleblaze",
    BusinessType:"Supplier",
    Product:"26",
    TotalOrders:"8196",
    RevenueGenerated:"₹5.865",
    JoinedDate:"28/11/2023",
    Location:"Mumbai"
  },
  {
    BusinessName:"Muscleblaze",
    BusinessType:"Supplier",
    Product:"26",
    TotalOrders:"8196",
    RevenueGenerated:"₹5.865",
    JoinedDate:"28/11/2023",
    Location:"Mumbai"
  },
  {
    BusinessName:"Muscleblaze",
    BusinessType:"Supplier",
    Product:"26",
    TotalOrders:"8196",
    RevenueGenerated:"₹5.865",
    JoinedDate:"28/11/2023",
    Location:"Mumbai"
  },
  {
    BusinessName:"Muscleblaze",
    BusinessType:"Supplier",
    Product:"26",
    TotalOrders:"8196",
    RevenueGenerated:"₹5.865",
    JoinedDate:"28/11/2023",
    Location:"Mumbai"
  },
]
 export const products = [
  {
    id: 1,
    name: "MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate",
    price: "₹ 4,299",
    unitsSold: "3956 units sold",
    image: "/images/1 (1).png", // Replace this with actual product image link
  },
  {
    id: 2,
    name: "MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate",
    price: "₹ 4,299",
    unitsSold: "3956 units sold",
    image: "/images/1 (1).png", // Replace this with actual product image link
  },
  {
    id: 3,
    name: "MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate",
    price: "₹ 4,299",
    unitsSold: "3956 units sold",
    image: "/images/1 (1).png", // Replace this with actual product image link
  },
  {
    id: 4,
    name: "MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate",
    price: "₹ 4,299",
    unitsSold: "3956 units sold",
    image: "/images/1 (1).png", // Replace this with actual product image link
  },
];
 export const productData1 = [
  {
    id: 1,
    name: "MuscleBlaze Biozyme Performance Whey",
    weight: "2 KG",
    flavour: "Rich Chocolate",
    expiryDate: "12/10/2021",
    stock: 24,
    mrp: "₹ 3,099",
    price: "₹ 2,799",
    category: "Protein", // Add category
    subCategory: "Whey", // Add subcategory
    image: "/path/to/image1", // Replace with actual image path
  },
  {
    id: 2,
    name: "MuscleBlaze Biozyme Isolate Whey",
    weight: "2 KG",
    flavour: "Vanilla",
    expiryDate: "15/11/2022",
    stock: 18,
    mrp: "₹ 4,199",
    price: "₹ 3,999",
    category: "Protein", // Add category
    subCategory: "Isolate", // Add subcategory
    image: "/path/to/image2",
  },
  // Add more products with different categories and subcategories
];



export const notificationsData = [
  {
    dateFrom: "30/07/2013",
    dateTo: "23/04/2016",
    section: "User",
    frequency: "Custom",
    link: "/notification1",
    content: "Get your diet with our professional Nutritionist. Book an appointment now!"
  },
  {
    dateFrom: "01/01/2024",
    dateTo: "31/12/2024",
    section: "Expert",
    frequency: "Monthly",
    link: "/notification2",
    content: "Exclusive tips from experts to enhance your wellness. Subscribe for monthly updates!"
  },
  {
    dateFrom: "15/03/2024",
    dateTo: "15/06/2024",
    section: "Nutritionist appointment",
    frequency: "Weekly",
    link: "/notification3",
    content: "Weekly nutrition tips and advice from top nutritionists. Stay informed and healthy!"
  },
  {
    dateFrom: "01/05/2024",
    dateTo: "30/09/2024",
    section: "User",
    frequency: "Bi-weekly",
    link: "/notification4",
    content: "Special offers and discounts tailored just for you. Don't miss out on exclusive deals!"
  },
  {
    dateFrom: "10/06/2024",
    dateTo: "15/12/2024",
    section: "Custom",
    frequency: "Daily",
    link: "/notification5",
    content: "Daily health tips and motivational quotes to keep you inspired throughout the day."
  },
  {
    dateFrom: "01/09/2024",
    dateTo: "31/12/2024",
    section: "Expert, Nutritionist appointment",
    frequency: "Monthly",
    link: "/notification6",
    content: "Book your consultation with our top nutritionists and experts. Get personalized advice every month!"
  }
];
export const VendorProductListData = [
  {
    image:'/images/1 (1).png',
    item: "MuscleBlaze Biozyme Performance Whey",
    weight: "2KG",
    flavour: "rich Chocolate",
    expiryDate: "23/04/2016",
    stock:"24",
    mrp: "₹ 3,099",
    price: "₹ 2,799"
  },
  {
    image:'/images/1 (1).png',
    item: "MuscleBlaze Biozyme Performance Whey",
    weight: "2KG",
    flavour: "rich Chocolate",
    expiryDate: "23/04/2016",
    stock:"24",
    mrp: "₹ 3,099",
    price: "₹ 2,799"
  },
  {
    image:'/images/1 (1).png',
    item: "MuscleBlaze Biozyme Performance Whey",
    weight: "2KG",
    flavour: "rich Chocolate",
    expiryDate: "23/04/2016",
    stock:"24",
    mrp: "₹ 3,099",
    price: "₹ 2,799"
  },
  {
    image:'/images/1 (1).png',
    item: "MuscleBlaze Biozyme Performance Whey",
    weight: "2KG",
    flavour: "rich Chocolate",
    expiryDate: "23/04/2016",
    stock:"24",
    mrp: "₹ 3,099",
    price: "₹ 2,799"
  },
  {
    image:'/images/1 (1).png',
    item: "MuscleBlaze Biozyme Performance Whey",
    weight: "2KG",
    flavour: "rich Chocolate",
    expiryDate: "23/04/2016",
    stock:"24",
    mrp: "₹ 3,099",
    price: "₹ 2,799"
  },
  {
    image:'/images/1 (1).png',
    item: "MuscleBlaze Biozyme Performance Whey",
    weight: "2KG",
    flavour: "rich Chocolate",
    expiryDate: "23/04/2016",
    stock:"24",
    mrp: "₹ 3,099",
    price: "₹ 2,799"
  },
];

export const sortsDatas = {
  status: [
    {
      id: 1,
      name: 'Status...',
    },
    {
      id: 2,
      name: 'Pending',
    },
    {
      id: 3,
      name: 'Approved',
    },
    {
      id: 4,
      name: 'Cancelled',
    },
  ],
  method: [
    {
      id: 1,
      name: 'Payment method',
    },
    {
      id: 2,
      name: 'Master Card',
    },
    {
      id: 3,
      name: 'Visa Card',
    },
    {
      id: 4,
      name: 'Visa Card',
    },
  ],
  currency: [
    {
      id: 1,
      name: 'Select Currency',
    },
    {
      id: 2,
      name: 'USD (US Dollar)',
    },
    {
      id: 3,
      name: 'Pkr(pakistani rupee)',
    },
    {
      id: 4,
      name: 'Pkr (pakistani rupee)',
    },
  ],
  instractions: [
    {
      id: 1,
      name: 'Select Instraction',
    },
    {
      id: 2,
      name: 'After Meal',
    },
    {
      id: 3,
      name: 'Before Meal',
    },
  ],
  measure: [
    {
      id: 1,
      name: 'Select Measure',
    },
    {
      id: 2,
      name: 'mg',
    },
    {
      id: 3,
      name: 'ml',
    },
    {
      id: 4,
      name: 'gm',
    },
    {
      id: 5,
      name: 'kg',
    },
    {
      id: 6,
      name: 'lb',
    },
    {
      id: 7,
      name: 'tbsp',
    },
    {
      id: 8,
      name: 'tablet',
    },
    {
      id: 9,
      name: 'capsule',
    },
  ],
  stocks: [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Available',
    },
    {
      id: 3,
      name: 'Out of Stock',
    },
  ],
  service: [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Enabled',
    },
    {
      id: 3,
      name: 'Disabled',
    },
  ],
  title: [
    {
      id: 1,
      name: 'Dr.',
    },
    {
      id: 2,
      name: 'Mr.',
    },
    {
      id: 3,
      name: 'Mrs.',
    },
    {
      id: 4,
      name: 'Ms.',
    },
  ],
  filterPatient: [
    {
      id: 1,
      name: 'Sort by...',
    },
    {
      id: 2,
      name: 'Newest Patients',
    },
    {
      id: 3,
      name: 'Oldest Patients',
    },
  ],
  genderFilter: [
    {
      id: 1,
      name: 'Gender...',
    },
    {
      id: 2,
      name: 'Female',
    },
    {
      id: 3,
      name: 'Male',
    },
  ],
  bloodTypeFilter: [
    {
      id: 1,
      name: 'Blood Type...',
    },
    {
      id: 2,
      name: 'A+',
    },
    {
      id: 3,
      name: 'A-',
    },
    {
      id: 4,
      name: 'B+',
    },
    {
      id: 5,
      name: 'B-',
    },
    {
      id: 6,
      name: 'AB+',
    },
    {
      id: 7,
      name: 'AB-',
    },
    {
      id: 8,
      name: 'O+',
    },
    {
      id: 9,
      name: 'O-',
    },
  ],
  dosage: [
    {
      id: 1,
      name: 'Morning (M)',
      value: 'morning',
    },
    {
      id: 2,
      name: 'Afternoon (A)',
      value: 'afternoon',
    },
    {
      id: 3,
      name: 'Evening (E)',
      value: 'evening',
    },
  ],
};


export const expertsTypeData = [

  { id: 1,name: 'Dietician', value: 7 },
    {id: 2, name: 'Physio', value: 30 },
    {id: 3, name: 'Fitness', value: 45 },
    {id: 4, name: 'Medical', value: 25 },
];
export const regionData = [
  { name: 'East', value: 25 },
  { name: 'West', value: 30 },
  { name: 'North', value: 25 },
  { name: 'South', value: 20 },
];


export const appointmentsData = [
  { name: 'Voice Call', value: 70 },
  { name: 'Video Call', value: 30 },
];
export const ExpertsappointmentsData = [
  {
    "AppointmentID": "A001",
    "PhoneNumber": "+33757005467",
    "Slot": "Morning",
    "Time": "10 am - 10:30 am",
    "Appointment": "John Deo",
    "Price": "Rs 250",
    "Yonta": "Rs 399",
    "Username": "john_deo"
  },
  {
    "AppointmentID": "A002",
    "PhoneNumber": "+33757005468",
    "Slot": "Afternoon",
    "Time": "1 pm - 1:30 pm",
    "Appointment": "Alice Smith",
    "Price": "Rs 300",
    "Yonta": "Rs 450",
    "Username": "alice_smith"
  },
  {
    "AppointmentID": "A003",
    "PhoneNumber": "+33757005469",
    "Slot": "Evening",
    "Time": "5 pm - 5:30 pm",
    "Appointment": "Bob Johnson",
    "Price": "Rs 350",
    "Yonta": "Rs 500",
    "Username": "bob_johnson"
  },
  {
    "AppointmentID": "A004",
    "PhoneNumber": "+33757005470",
    "Slot": "Morning",
    "Time": "9 am - 9:30 am",
    "Appointment": "Carol White",
    "Price": "Rs 275",
    "Yonta": "Rs 425",
    "Username": "carol_white"
  },
  {
    "AppointmentID": "A005",
    "PhoneNumber": "+33757005471",
    "Slot": "Afternoon",
    "Time": "2 pm - 2:30 pm",
    "Appointment": "David Brown",
    "Price": "Rs 325",
    "Yonta": "Rs 475",
    "Username": "david_brown"
  },
  {
    "AppointmentID": "A006",
    "PhoneNumber": "+33757005472",
    "Slot": "Evening",
    "Time": "6 pm - 6:30 pm",
    "Appointment": "Emma Davis",
    "Price": "Rs 400",
    "Yonta": "Rs 550",
    "Username": "emma_davis"
  },
  {
    "AppointmentID": "A007",
    "PhoneNumber": "+33757005473",
    "Slot": "Morning",
    "Time": "11 am - 11:30 am",
    "Appointment": "Frank Wilson",
    "Price": "Rs 250",
    "Yonta": "Rs 399",
    "Username": "frank_wilson"
  }
];


export const transactionData = [
  {
    id: 1,
    user: memberData[0],
    date: 'Mar 12, 2022',
    amount: 1000,
    status: 'Paid',
    method: 'master card',
    doctor: memberData[3],
  },
  {
    id: 2,
    user: memberData[1],
    date: 'Agus 12, 2023',
    amount: 2300,
    status: 'Paid',
    method: 'master card',
    doctor: memberData[4],
  },
  {
    id: 3,
    user: memberData[2],
    date: 'Jan 06, 2024',
    amount: 1200,
    status: 'Pending',
    method: 'master card',
    doctor: memberData[5],
  },
  {
    id: 4,
    user: memberData[3],
    date: 'Feb 18, 2025',
    amount: 1400,
    status: 'Cancel',
    method: 'master card',
    doctor: memberData[6],
  },
  {
    id: 5,
    user: memberData[4],
    date: 'Mar 12, 2026',
    amount: 1230,
    status: 'Pending',
    method: 'master card',
    doctor: memberData[7],
  },
  {
    id: 6,
    user: memberData[5],
    date: 'Apr 12, 2027',
    amount: 1000,
    status: 'Paid',
    method: 'Visa Card',
    doctor: memberData[0],
  },
  {
    id: 7,
    user: memberData[6],
    date: 'May 12, 2028',
    amount: 8900,
    status: 'Cancel',
    method: 'Visa Card',
    doctor: memberData[1],
  },
  {
    id: 8,
    user: memberData[7],
    date: 'Jun 12, 2029',
    amount: 1000,
    status: 'Pending',
    method: 'Visa Card',
    doctor: memberData[2],
  },
];

export const dashboardCards = [
  {
    id: 1,
    title: 'Total Patients',
    icon: TbUsers,
    value: 1600,
    percent: 45.06,
    color: ['bg-subMain', 'text-subMain', '#66B5A3'],
    datas: [92, 80, 45, 15, 49, 77, 70, 51, 110, 20, 90, 60],
  },
  {
    id: 2,
    title: 'Appointments',
    icon: TbCalendar,
    value: 130,
    percent: 25.06,
    color: ['bg-yellow-500', 'text-yellow-500', '#F9C851'],
    datas: [20, 50, 75, 15, 108, 97, 70, 41, 50, 20, 90, 60],
  },
  {
    id: 3,
    title: 'Emporium',
    icon: TbFile,
    value: 4160,
    percent: 65.06,
    color: ['bg-green-500', 'text-green-500', '#34C759'],
    datas: [92, 80, 45, 15, 49, 77, 70, 51, 110, 20, 90, 60],
  },
  {
    id: 4,
    title: 'Total Earnings',
    icon: MdOutlineAttachMoney,
    value: 4590,
    percent: 45.06,
    color: ['bg-red-500', 'text-red-500', '#FF3B30'],
    datas: [20, 50, 75, 15, 108, 97, 70, 41, 50, 20, 90, 60],
  },
];

export const shareData = [
  {
    id: 1,
    icon: HiOutlineMail,
    title: 'Email',
    description: 'Send to patient email address',
  },
  {
    id: 2,
    icon: MdOutlineTextsms,
    title: 'SMS',
    description: 'Send to patient phone number',
  },
  {
    id: 3,
    icon: FaWhatsapp,
    title: 'WhatsApp',
    description: 'Send to patient WhatsApp account',
  },
  {
    id: 4,
    icon: FaTelegramPlane,
    title: 'Telegram',
    description: 'Send to patient Telegram account',
  },
];

export const medicineData = [
  {
    id: 1,
    name: 'Calci-C',
    measure: 'Tablet',
    stock: 400,
    price: 300,
    status: 'Available',
    instraction: 'After meal',
  },
  {
    id: 2,
    name: 'Amoxicillin',
    measure: 'Capsule',
    stock: 200,
    price: 23,
    status: 'Available',
    instraction: 'After meal',
  },
  {
    id: 3,
    name: 'Himalaya Facewash',
    measure: '100 gram',
    stock: 0,
    price: 500,
    status: 'Out of stock',
    instraction: 'written on product',
  },
  {
    id: 4,
    name: 'Herbal Massage',
    measure: '250 gram',
    stock: 370,
    price: 3500,
    status: 'Available',
    instraction: 'written on product',
  },
  {
    id: 5,
    name: 'skin brightning',
    measure: 'gram',
    stock: 0,
    price: 1200,
    status: 'In stock',
    instraction: 'written on product',
  },
  {
    id: 6,
    name: 'Ponds  Organics Serum',
    measure: 'ml',
    stock: 123,
    price: 1500,
    status: 'Available',
    instraction: 'depends  on the skin type',
  },
  {
    id: 7,
    name: 'Nevia  Moisturizing Cream',
    measure: 'g',
    stock: 13,
    price: 300,
    status: 'Available',
    instraction: 'depends  on the skin type and weather condition',
  },
  {
    id: 8,
    name: 'Gold en Glow  Hair Oil',
    measure: 'ml',
    stock: 10,
    price: 200,
    status: 'Available',
    instraction: 'depends  on hair type',
  },
];

export const patientTab = [
  {
    id: 1,
    title: 'Medical Records',
    icon: TbChartHistogram,
  },
  {
    id: 2,
    title: 'Appointments',
    icon: BiCalendar,
  },
  {
    id: 3,
    title: 'Invoices',
    icon: RiFileList3Line,
  },
  {
    id: 4,
    title: 'Payments',
    icon: RiMoneyDollarCircleLine,
  },
  {
    id: 5,
    title: 'Images',
    icon: RiImageLine,
  },
  {
    id: 6,
    title: 'routine Chart',
    icon: RiStethoscopeLine,
  },
  {
    id: 7,
    title: 'Patient Information',
    icon: RiUserLine,
  },
  {
    id: 8,
    title: 'Health Information',
    icon: RiHeartLine,
  },
];

export const doctorTab = [
  {
    id: 1,
    title: 'Personal Information',
    icon: RiUserLine,
  },
  {
    id: 2,
    title: 'Patients',
    icon: BiUserPlus,
  },
  {
    id: 3,
    title: 'Appointments',
    icon: BiCalendar,
  },
  {
    id: 4,
    title: 'Payments',
    icon: RiMoneyDollarCircleLine,
  },
  {
    id: 5,
    title: 'Invoices',
    icon: RiFileList3Line,
  },
  {
    id: 6,
    title: 'Access Control',
    icon: TbLockAccess,
  },
  {
    id: 7,
    title: 'Change Password',
    icon: RiLockPasswordLine,
  },
];

export const medicalRecodData = [
  {
    id: 1,
    date: '13, Jan 2021',
    amount: 150000,
    data: [
      {
        id: 1,
        title: 'Complaint',
        value: 'Bleeding Gums, Toothache, bad breath',
      },
      {
        id: 2,
        title: 'Diagnosis',
        value: 'Gingivitis, Caries, Periodontitis',
      },
      {
        id: 3,
        title: 'Treatment',
        value: 'Filling, Post&Core, Implant, Extraction',
      },
      {
        id: 4,
        title: 'Prescription',
        value: 'Paracetamol, Amoxicillin, Ibuprofen, Aspirin',
      },
    ],
    attachments: [
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
    ],
    vitalSigns: [
      'Blood Pressure: 120/80 mmHg',
      'Pulse Rate: 80 bpm',
      'Respiratory Rate: 16 bpm',
      'Temperature: 36.5 °C',
      'Oxygen Saturation: 98%',
    ],
  },
  {
    id: 2,
    date: '10, Feb 2022',
    amount: 300000,
    data: [
      {
        id: 1,
        title: 'Complaint',
        value: 'Food impaction, Replacing Missing Teeth, bad breath',
      },
      {
        id: 2,
        title: 'Diagnosis',
        value: 'Caries, Periodontitis, Malocclusion',
      },
      {
        id: 3,
        title: 'Treatment',
        value: 'Superficial Scaling, Root Planing, Extraction',
      },
      {
        id: 4,
        title: 'Prescription',
        value: 'Benzocaine, Lidocaine, Mepivacaine, Prilocaine',
      },
    ],
    attachments: [
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
    ],
    vitalSigns: [
      'Weight: 60 kg',
      'Height: 170 cm',
      'BMI: 20.76 kg/m2',
      'Blood Pressure: 120/80 mmHg',
    ],
  },
  {
    id: 3,
    date: '20, Mar 2022',
    amount: 500000,
    data: [
      {
        id: 1,
        title: 'Complaint',
        value: 'Broken Teeth, Bridge, Cap in the front teeth',
      },
      {
        id: 2,
        title: 'Diagnosis',
        value: 'Unspecified Gingival Recession, Unspecified Caries',
      },
      {
        id: 3,
        title: 'Treatment',
        value: 'Consultation, Scaling, Root Planing, Extraction',
      },
      {
        id: 4,
        title: 'Prescription',
        value: 'Gingival Gel, Chlorhexidine, Fluoride, Calcium',
      },
    ],
    attachments: [
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
    ],
    vitalSigns: [
      'Temperature: 36.5 °C',
      'Oxygen Saturation: 98%',
      'Blood Pressure: 120/80 mmHg',
      'Pulse Rate: 80 bpm',
      'Respiratory Rate: 16 bpm',
    ],
  },
  {
    id: 4,
    date: '10, Apr 2022',
    amount: 760000,
    data: [
      {
        id: 1,
        title: 'Complaint',
        value: 'Toothache, bad breath, Bleeding Gums',
      },
      {
        id: 2,
        title: 'Diagnosis',
        value: 'Necrotizing Ulcerative Gingivitis, Periodontitis',
      },
      {
        id: 3,
        title: 'Treatment',
        value: 'Crowns, Bridges, Veneers, Implants',
      },
      {
        id: 4,
        title: 'Prescription',
        value: 'Tramadol, Codeine, Morphine, Oxycodone',
      },
    ],
    attachments: [
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
    ],
    vitalSigns: [
      'Sugar Level: 120 mg/dL',
      'Oxygen Saturation: 98%',
      'Cholesterol: 200 mg/dL',
      'Blood Pressure: 120/80 mmHg',
    ],
  },
];

export const doctorsData = [
  {
    id: 1,
    user: memberData[0],
    title: 'Dr.',
  },
  {
    id: 2,
    user: memberData[1],
    title: 'Dr.',
  },
  {
    id: 3,
    user: memberData[2],
    title: 'Dr.',
  },
  {
    id: 4,
    user: memberData[3],
    title: 'Dr.',
  },
];

export const receptionsData = [
  {
    id: 1,
    user: memberData[6],
    title: 'Dr.',
  },
  {
    id: 2,
    user: memberData[7],
    title: 'Dr.',
  },
  {
    id: 3,
    user: memberData[5],
    title: 'Dr.',
  },
  {
    id: 4,
    user: memberData[4],
    title: 'Dr.',
  },
  {
    id: 5,
    user: memberData[2],
    title: 'Dr.',
  },
  {
    id: 6,
    user: memberData[1],
    title: 'Dr.',
  },
];

export const ExpertData = [
  {
    profilePicture: "https://via.placeholder.com/150",
    name: "Jane Smith",
    mobileNumber: "98123 45678",
    totalRevenue: 7420,
    monthlyRevenue: 1100,
    appointments: 520,
    rating: 4.1,
    education: "Jane Smith",
    slotPrice: 300,
    category: "Personal Trainer",
    location: "Downtown, City",
    commission: "Personal Trainer",
    bankName: "Personal Trainer",
    ifscCode: "Personal Trainer",
    branchName: "Personal Trainer",
    certificates: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    profilePicture: "https://via.placeholder.com/150",
    name: "Mike Johnson",
    mobileNumber: "98765 43210",
    totalRevenue: 5590,
    monthlyRevenue: 850,
    appointments: 390,
    rating: 4.5,
    education: "Mike Johnson",
    slotPrice: 270,
    category: "Yoga Instructor",
    location: "Uptown, City",
    commission: "Yoga Instructor",
    bankName: "Yoga Instructor",
    ifscCode: "Yoga Instructor",
    branchName: "Yoga Instructor",
    certificates: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    profilePicture: "https://via.placeholder.com/150",
    name: "Sarah Lee",
    mobileNumber: "97234 56789",
    totalRevenue: 6450,
    monthlyRevenue: 1020,
    appointments: 450,
    rating: 4.2,
    education: "Sarah Lee",
    slotPrice: 320,
    category: "Nutritionist",
    location: "Central, City",
    commission: "Nutritionist",
    bankName: "Nutritionist",
    ifscCode: "Nutritionist",
    branchName: "Nutritionist",
    certificates: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    profilePicture: "https://via.placeholder.com/150",
    name: "David Brown",
    mobileNumber: "99887 65432",
    totalRevenue: 4800,
    monthlyRevenue: 720,
    appointments: 350,
    rating: 4.0,
    education: "David Brown",
    slotPrice: 290,
    category: "Fitness Coach",
    location: "Suburbs, City",
    commission: "Fitness Coach",
    bankName: "Fitness Coach",
    ifscCode: "Fitness Coach",
    branchName: "Fitness Coach",
    certificates: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    profilePicture: "https://via.placeholder.com/150",
    name: "Emily Davis",
    mobileNumber: "98765 12345",
    totalRevenue: 5300,
    monthlyRevenue: 800,
    appointments: 400,
    rating: 4.3,
    education: "Emily Davis",
    slotPrice: 310,
    category: "Health Coach",
    location: "Northside, City",
    commission: "Health Coach",
    bankName: "Health Coach",
    ifscCode: "Health Coach",
    branchName: "Health Coach",
    certificates: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    profilePicture: "https://via.placeholder.com/150",
    name: "Chris Wilson",
    mobileNumber: "97654 32109",
    totalRevenue: 7200,
    monthlyRevenue: 950,
    appointments: 470,
    rating: 4.4,
    education: "Chris Wilson",
    slotPrice: 340,
    category: "Wellness Expert",
    location: "Eastside, City",
    commission: "Wellness Expert",
    bankName: "Wellness Expert",
    ifscCode: "Wellness Expert",
    branchName: "Wellness Expert",
    certificates: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    profilePicture: "https://via.placeholder.com/150",
    name: "Olivia Martinez",
    mobileNumber: "97531 24680",
    totalRevenue: 6000,
    monthlyRevenue: 900,
    appointments: 430,
    rating: 4.6,
    education: "Olivia Martinez",
    slotPrice: 330,
    category: "Personal Trainer",
    location: "Westside, City",
    commission: "Personal Trainer",
    bankName: "Personal Trainer",
    ifscCode: "Personal Trainer",
    branchName: "Personal Trainer",
    certificates: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  }
];



export  const MetricCardData = [
    { title: 'Net Revenue', value: '₹ 8,96,065', change: '+10.05%', description: 'since last month' },
    { title: 'App Downloads', value: '6,065 M', change: '+5.03%', description: 'from last year' },
    { title: 'Avg Session Duration', value: '6,065 Mins', change: '+8.00%', description: 'in the last 6 months' },
    { title: 'Monthly Logins', value: '6,065', change: '+3.5%', description: 'from last month' },
  ];
