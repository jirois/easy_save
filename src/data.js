import React from 'react';
import {
 
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaPinterest,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';

export const links = [
    {
        id: 1,
        url: '/',
        text: 'home',
        icon: <FaHome />,
    },
    {
        id: 2,
        url: '/team',
        text: 'team',
        icon: <FaUserFriends />,
    },
    {
        id: 3,
        url: '/projects',
        text: 'projects',
        icon: <FaFolderOpen />,
    },
    {
        id: 4,
        url: '/about',
        text: 'about',
        icon: <FaCalendarAlt />,
    },
    {
        id: 5,
        url: '/documents',
        text: 'documents',
        icon: <FaWpforms />,
    },
    ];
    
    export const social = [
    {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FaFacebook />,
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
    },
    {
        id: 3,
        url: 'https://www.twitter.com',
        icon: <FaLinkedin />,
    }
]

export const socials = [
    {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FaFacebook />,
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
    },
    {
        id: 3,
        url: 'https://www.twitter.com',
        icon: <FaLinkedin />,
    },
    {
        id: 4,
        url: 'https://www.twitter.com',
        icon: <FaPinterest />,
    }
]

export const teams = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/jinncy/image/upload/v1606221500/austin_pcio6n.jpg',
        name: 'Mr Austin',
        info: `Mr Austin is an avid believer of Nigeria and loves to help in anyway posible. Mr austin is very much invested in micro economy. This are what strengthen his convinction about saving to make wealth`,
        position: 'Project Manager'
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/jinncy/image/upload/v1606224474/omas_ajiri_efte93.jpg',
        name: 'Omas Ajiri',
        info: `Mr Omas is an avid believer of Nigeria and loves to help in anyway posible. He is also an interested candidate of the Nigeria presidency come 2033.`,
        position: 'Project Lead'
    }
    
]

