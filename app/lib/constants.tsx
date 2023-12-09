import { HomeIcon,StarIcon } from "@heroicons/react/24/outline"
import { KeyNote, Recentfile } from "./types";


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
        "value":'Bayat',
        'icon': '',
        'numofsheets': 52
    },
    {
        'name': 'نهاوند',
        "value":'Nahawand',
        'icon': 'public/icons/nahawand-clef.png',
        'numofsheets': 52
    },
    {
        'name':'راست',
        "value":'Rast',
        'icon': '',
        'numofsheets': 52
    },
    {
        "name": 'صبا',
        "value":'Saba',
        'icon': '',
        'numofsheets': 52
    },
    {
        'name': 'عجم',
        "value":'Ajam',
        'icon': '',
        'numofsheets': 52
    },
    {
        'name':'سيكا',
        "value":'Sika',
        'icon': '',
        'numofsheets': 52
    },
    {
        'name':'حجاز',
        "value":'Hijaz',
        'icon': '',
        'numofsheets': 52
    },
    {
        'name':'كرد',
        "value":'Kurd',
        'icon': '',
        'numofsheets': 52
    }
]

export const sidenavlinks = [
    { name: 'الصفحه الرئيسية', href: '/homepage', icon: HomeIcon },
    { name: 'النوتات المفضلة', href: '/', icon: StarIcon, },
    { name: 'نوتاتي', href: '/homepage/sheets', icon: HomeIcon },
    { name: 'بروفايلي', href: '/', icon: HomeIcon },
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
//    | 'Do Dieze' | 'Do 1/2 Bemol' | 'Do 1/2 Dieze' | 'Re' | 'Re Bemol' | 'Re Dieze' | 'Re 1/2 Bemol' | 'Mi' | 'Mi Bemol' | 'Mi Dieze' | 'Mi 1/2 Bemol' | 'Mi 1/2 Dieze' | 'Fa' | 'Fa Bemol' | 'Fa Dieze' | 'Fa 1/2 Bemol' | 'Fa 1/2 Dieze' | 'Sol' | 'Sol Bemol' | 'Sol Dieze' | 'Sol 1/2 Bemol' | 'Sol 1/2 Dieze' | 'La' | 'La Bemol' | 'La Dieze' | 'La 1/2 Bemol' | 'La 1/2 Dieze' | 'Si' | 'Si Bemol' | 'Si Dieze' | 'Si 1/2 Bemol' | 'Si 1/2 Dieze'
export const KeyNotes : KeyNote[] = [
    {
        name: 'دو',
        value: 'Do'
    },
    {
        name: 'ري',
        value: 'Re'
    },
    {
        name: 'مي',
        value: 'Mi'
    },
    {
        name: 'فا',
        value: 'Fa'
    },
    {
        name: 'صول',
        value: 'Sol'
    },
    {
        name: 'لا',
        value: 'La'
    },
    {
        name: 'سي',
        value: 'Si'
    },
    {
        name: 'دو بيمول',
        value: 'Do Bemol'
    },
    {
        name: 'دو دييز',
        value: 'Do Dieze'
    },
    
]