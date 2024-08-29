import { HiOutlineHome, HiOutlineMail, HiOutlineUsers } from 'react-icons/hi';
import {
  TbCalendar,
  TbChartHistogram,
  TbFile,
  TbFileInvoice,
  TbLockAccess,
  TbUsers,
} from 'react-icons/tb';
import { FaRegCalendarAlt, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import {
  RiFileList3Line,
  RiHeartLine,
  RiImageLine,
  RiLockPasswordLine,
  RiMedicineBottleLine,
  RiMoneyDollarCircleLine,
  RiStethoscopeLine,
  RiUserHeartLine,
  RiUserLine,
} from 'react-icons/ri';
import {
  MdListAlt,
  MdOutlineAttachMoney,
  MdOutlineCampaign,
  MdOutlineInventory2,
  MdOutlineTextsms,
} from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiCalendar, BiUserPlus } from 'react-icons/bi';
import { FiGrid, FiUsers, FiBox } from 'react-icons/fi'; // Example for diamond icon, adjust as needed
import { FaRegGem} from 'react-icons/fa';
import { MdOutlineSettings } from 'react-icons/md';
import { BsGraphUp, BsGear } from 'react-icons/bs';
import {  RiArticleLine } from 'react-icons/ri';
import { GiNotebook } from 'react-icons/gi';
import { BiNews } from 'react-icons/bi';

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
    path: '/expert',
    icon: GiNotebook, // Notebook icon
  },
  {
    title: 'Diet Plans',
    path: '/diet-plans',
    icon: RiArticleLine, // Document icon
  },
  {
    title: 'Ingredients',
    path: '/ingredients',
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
    title: 'Blogs',
    path: '/blogs',
    icon: BiNews, // Blog/Newspaper icon
  },
  {
    title: 'Ecommerce',
    path: '/ecommerce',
    icon: BiNews, // Ecommerce icon
  },

];
export const memberData = [
  {
    id: 1,
    title: 'Hugo Lloris',
    image: '/images/user1.png',
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
    image: '/images/user10.png',
    admin: false,
    email: 'sanchez@gmail.com',
    phone: '+1 234 567 899',
    gender: 'Male',
    Plan: '12 Months of premium',
    status: 'Active',
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

export const campaignData = [
  {
    id: 1,
    title: 'Offer on routine Checkup',
    date: '3 days ago',
    type: 'email',
    sendTo: 'All Patients',
    action: {
      subject: 'Delight patients with a free routine checkup',
      message:
        'Dear Patient, We are delighted to offer you a free routine checkup. Please visit our clinic to avail this offer. Thank you. and have a nice day. and welcome to our clinic.',
      subHeader: 'Offer on routine Checkup',
      header: 'How to avail this offer?',
      footer: 'This offer is valid till 30th June, 2021',
    },
  },
  {
    id: 2,
    title: 'Britam Insurance Offer',
    date: '8 days ago',
    type: 'whatsapp',
    sendTo: 'Britam Patients',
    action: {
      message:
        'Hellow Patient, are you looking for a free routine checkup? We are delighted to offer you a free routine checkup. Please visit our clinic to avail this offer. Thank you.',
    },
  },
  {
    id: 3,
    title: 'NHCF Insurance Offer',
    date: '10 days ago',
    type: 'sms',
    sendTo: 'NHCF Patients',
    action: {
      message:
        'Hola, Delight patient with NHCF Insurance, We are delighted to offer you a free routine checkup. Please visit our clinic to avail this offer. Thank you.',
    },
  },
  {
    id: 4,
    title: 'MCB card patients offer',
    date: '15 days ago',
    type: 'sms',
    sendTo: 'Cash Patients',
    action: {
      message:
        'Delight Patient, now get 50% off on routine checkup. Thank you. and have a nice day. and welcome to our clinic.',
    },
  },
  {
    id: 5,
    title: 'Braces Offer',
    date: '12 days ago',
    type: 'email',
    sendTo: 'Britam Patients',
    action: {
      subject: 'Delight patients with a free routine checkup',
      message:
        'Dear Patient, Britam Insurance is delighted to offer you a free routine checkup. Please visit our clinic to avail this offer. Thank you. and have a nice day. and welcome to our clinic.',
      subHeader: 'Braces Offer for Britam Patients',
      header: 'Now get braces at 50% off',
      footer: 'This offer is valid till 30th June, 2021',
    },
  },
  {
    id: 6,
    title: 'Teeth Whitening Offer',
    date: '20 days ago',
    type: 'whatsapp',
    sendTo: 'All Patients',
    action: {
      message:
        'Hola, Delight patient with Teeth Whitening Offer, We are delighted to offer you a free routine checkup. Please visit our clinic to avail this offer. Thank you.',
    },
  },
];
export const servicesData = [
  {
    id: 1,
    name: 'Select service.. ',
  },
  {
    id: 2,
    name: 'Root Canal',
    price: 40000,
    date: '23 June, 2021',
    status: true,
  },
  {
    id: 3,
    name: 'Teeth Whitening',
    price: 20000,
    date: '12 Jan, 2022',
    status: true,
  },
  {
    id: 4,
    name: 'routine Implants',
    price: 50000,
    date: '11 April, 2023',
    status: false,
  },
  {
    id: 5,
    name: 'routine Crowns',
    price: 34000,
    date: '10 Agst, 2021',
    status: true,
  },
  {
    id: 6,
    name: 'routine Bridges',
    price: 10400,
    date: '23 June, 2021',
    status: false,
  },
  {
    id: 7,
    name: 'routine Veneers',
    price: 150000,
    date: '09 Dec, 2023',
    status: false,
  },
  {
    id: 8,
    name: 'routine Braces',
    price: 23000,
    date: '05 Feb, 2019',
    status: true,
  },
  {
    id: 9,
    name: 'routine Sealants',
    price: 40000,
    date: '16 Nov, 2022',
    status: true,
  },
  {
    id: 10,
    name: 'Dentures',
    price: 19000,
    date: '02 Jun, 2022',
    status: false,
  },
  {
    id: 11,
    name: 'Tooth Extraction',
    price: 160000,
    date: '23 June, 2021',
    status: true,
  },
];

export const invoicesData = [
  {
    id: 206719,
    to: memberData[5],
    total: 6070,
    createdDate: '12/06/2021',
    dueDate: '16/06/2021',
    items: [
      {
        id: 1,
        name: servicesData[0].name,
        price: 500,
        description:
          'Root Canal Treatment with X-Ray and Consultation is included in this package',
      },
      {
        id: 2,
        name: servicesData[1].name,
        price: 300,
        description: 'Teeth Whitening Treatment',
      },
      {
        id: 3,
        name: servicesData[2].name,
        price: 260,
        description: 'routine Implants Treatment',
      },
      {
        id: 4,
        name: servicesData[3].name,
        price: 190000,
        description: 'routine Crowns Treatment',
      },
      {
        id: 5,
        name: servicesData[4].name,
        price: 15000,
        description: 'routine Bridges Treatment',
      },
    ],
  },
  {
    id: 198772,
    to: memberData[6],
    total: 5000,
    createdDate: '10/02/2023',
    dueDate: '14/02/2023',
    items: [
      {
        id: 1,
        name: servicesData[3].name,
        price: 190000,
        description: 'routine Crowns Treatment',
      },
      {
        id: 2,
        name: servicesData[4].name,
        price: 15000,
        description: 'routine Bridges Treatment',
      },
      {
        id: 3,
        name: servicesData[8].name,
        price: 20000,
        description: 'Dentures Treatment',
      },
      {
        id: 4,
        name: servicesData[3].name,
        price: 190000,
        description: 'routine Crowns Treatment',
      },
    ],
  },
  {
    id: 456789,
    to: memberData[7],
    total: 10000,
    createdDate: '09/01/2023',
    dueDate: '13/01/2023',
    items: [
      {
        id: 1,
        name: servicesData[5].name,
        price: 5000,
        description: 'routine Veneers Treatment',
      },
      {
        id: 2,
        name: servicesData[6].name,
        price: 16000,
        description: 'routine Braces Treatment',
      },
      {
        id: 3,
        name: servicesData[7].name,
        price: 10000,
        description: 'routine Sealants Treatment',
      },
      {
        id: 4,
        name: servicesData[8].name,
        price: 20000,
        description: 'Dentures Treatment',
      },
    ],
  },
  {
    id: 876543,
    to: memberData[4],
    total: 19000,
    createdDate: '08/01/2023',
    dueDate: '12/01/2023',
    items: [
      {
        id: 1,
        name: servicesData[5].name,
        price: 5000,
        description: 'routine Veneers Treatment',
      },
      {
        id: 2,
        name: servicesData[6].name,
        price: 16000,
        description: 'routine Braces Treatment',
      },
      {
        id: 3,
        name: servicesData[7].name,
        price: 10000,
        description: 'routine Sealants Treatment',
      },
      {
        id: 4,
        name: servicesData[8].name,
        price: 20000,
        description: 'Dentures Treatment',
      },
      {
        id: 5,
        name: servicesData[3].name,
        price: 190000,
        description: 'routine Crowns Treatment',
      },
      {
        id: 6,
        name: servicesData[4].name,
        price: 15000,
        description: 'routine Bridges Treatment',
      },
    ],
  },
];

export const appointmentsData = [
  {
    id: 1,
    time: '2 hrs later',
    user: memberData[4],
    from: '10:00 AM',
    to: '12:00 PM',
    hours: 2,
    status: 'Pending',
    doctor: memberData[0],
    date: 'Jun 12, 2021',
  },
  {
    id: 2,
    time: '1 hrs ago',
    user: memberData[5],
    from: '13:00 Pm',
    to: '18:00 PM',
    hours: 5,
    status: 'Cancel',
    doctor: memberData[1],
    date: 'Feb 24, 2021',
  },
  {
    id: 3,
    time: '2 hrs ago',
    user: memberData[6],
    from: '10:00 AM',
    to: '12:00 PM',
    hours: 2,
    status: 'Approved',
    doctor: memberData[2],
    date: 'Mar 12, 2023',
  },
  {
    id: 4,
    time: '3 hrs later',
    user: memberData[7],
    from: '06:00 AM',
    to: '08:00 AM',
    hours: 3,
    status: 'Pending',
    doctor: memberData[3],
    date: 'Apr 06, 2023',
  },
  {
    id: 5,
    time: '4 hrs ago',
    user: memberData[3],
    from: '10:00 AM',
    to: '12:00 PM',
    hours: 7,
    status: 'Approved',
    doctor: memberData[4],
    date: 'May 18, 2023',
  },
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

export const notificationsData = [
  {
    id: 1,
    action: 1,
    user: memberData[0],
    time: '2 hours ago',
  },
  {
    id: 2,
    action: 2,
    user: memberData[1],
    time: '2 days ago',
  },
  {
    id: 3,
    action: 1,
    user: memberData[2],
    time: '3 days ago',
  },
  {
    id: 4,
    action: 2,
    user: memberData[3],
    time: '4 days ago',
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