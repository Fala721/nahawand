import { HomeIcon,StarIcon } from "@heroicons/react/24/outline"
import { Recentfile } from "./types";


export const profilecardlistdata = [
    {
        "name": 'settings'
    },
    {
        'name': 'profile'
    },
    {
        'name':'signout'
    }
];

export const maqamcardslist = [
    {
        "name": 'بيات',
        'icon': '',
        'numofsheets': 52
    },
    {
        'name': 'نهاوند',
        'icon': '',
        'numofsheets': 52
    },
    {
        'name':'راست',
        'icon': '',
        'numofsheets': 52
    },
    {
        "name": 'صبا',
        'icon': '',
        'numofsheets': 52
    },
    {
        'name': 'عجم',
        'icon': '',
        'numofsheets': 52
    },
    {
        'name':'سيكا',
        'icon': '',
        'numofsheets': 52
    },
    {
        'name':'حجاز',
        'icon': '',
        'numofsheets': 52
    }
]

export const sidenavlinks = [
    { name: 'الصفحه الرئيسية', href: '/homepage', icon: HomeIcon },
    { name: 'النوتات المفضلة', href: '/', icon: StarIcon, },
    { name: 'Customers', href: '/', icon: HomeIcon },
    { name: 'Customers', href: '/', icon: HomeIcon },
    { name: 'Customers', href: '/', icon: HomeIcon },
];

export const recentFilesData : Recentfile[] = [
    {
      id: 1,
      date: '2023-11-01',
      filename: 'Document1.pdf',
      author: 'John Doe',
      filetype: 'PDF',
    },
    {
      id: 2,
      date: '2023-11-02',
      filename: 'Spreadsheet.xlsx',
      author: 'Jane Smith',
      filetype: 'Excel',
    },
    {
      id: 3,
      date: '2023-11-03',
      filename: 'Presentation.pptx',
      author: 'Alex Johnson',
      filetype: 'PowerPoint',
    },
    {
      id: 4,
      date: '2023-11-04',
      filename: 'Image.jpg',
      author: 'Eva Williams',
      filetype: 'Image',
    },
    {
      id: 5,
      date: '2023-11-05',
      filename: 'CodeFile.js',
      author: 'Chris Miller',
      filetype: 'JavaScript',
    },
    // Add more data as needed
  ];