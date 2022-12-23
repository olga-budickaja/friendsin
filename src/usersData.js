import avatar1 from "./assets/img/users/user1.jpg";
import avatar2 from "./assets/img/users/user2.jpg";
import avatar3 from "./assets/img/users/user3.jpg";
import avatar4 from "./assets/img/users/user4.jpg";
import avatar5 from "./assets/img/users/user5.jpg";
import avatar6 from "./assets/img/users/user6.jpg";
import avatar7 from "./assets/img/users/user7.jpg";
import avatar8 from "./assets/img/users/user8.jpg";
import avatar9 from "./assets/img/users/user9.jpg";
import avatar10 from "./assets/img/users/user10.jpg";
import avatar11 from "./assets/img/users/user11.jpg";

import bg1 from "./assets/img/backgrounds/bg1.jpg";
import bg2 from "./assets/img/backgrounds/bg2.jpg";
import bg3 from "./assets/img/backgrounds/bg3.jpg";
import bg4 from "./assets/img/backgrounds/bg4.jpg";
import bg5 from "./assets/img/backgrounds/bg5.jpg";
import bg6 from "./assets/img/backgrounds/bg6.jpg";
import bg7 from "./assets/img/backgrounds/bg7.jpg";
import bg8 from "./assets/img/backgrounds/bg8.jpg";
import bg9 from "./assets/img/backgrounds/bg9.jpg";
import bg10 from "./assets/img/backgrounds/bg10.jpg";
import bg11 from "./assets/img/backgrounds/bg11.jpg";

import img1 from "./assets/img/posts/post-1.jpg";
import img2 from "./assets/img/posts/post-2.jpg";
import img3 from "./assets/img/posts/post-3.jpg";
import img4 from "./assets/img/posts/post-4.jpg";
import img5 from "./assets/img/posts/post-5.jpg";
import img6 from "./assets/img/posts/post-6.jpg";
import img7 from "./assets/img/posts/post-7.jpg";
import img8 from "./assets/img/posts/post-8.jpg";
import img9 from "./assets/img/posts/post-9.jpg";
import img10 from "./assets/img/posts/post-10.jpg";

export const Users = [
    {
        id: 'jjpamzmDhecpei8U2b',
        name: 'Katrin Love',
        username: 'katy_love',
        avatar: avatar1,
        bg: bg1,
        following: [
            'cj8Wgeiuayv2Vpkgxr',
            'ih5ujjehKfmU7ticsb',
            'qt7ulkfffwx2hAgMdr',
            'mfdltvvRgmc6Sufa4n'
        ],
        followers: [
            'cj8Wgeiuayv2Vpkgxr',
            'ih5ujjehKfmU7ticsb',
            'qt7ulkfffwx2hAgMdr',
            'mfdltvvRgmc6Sufa4n',
            'jn63mgAjKbdvztwddk',
            'nrqpj3u6yvrlFfrObj'
        ],
        birthday: true,
        online: true
    },
    {
        id: 'cj8Wgeiuayv2Vpkgxr',
        name: 'Natalie Patrick',
        username: 'natali_kat',
        avatar: avatar2,
        bg: bg2,
        following: [
            'jjpamzmDhecpei8U2b',
            'cj8Wgeiuayv2Vpkgxr',
            'ih5ujjehKfmU7ticsb',
            'qt7ulkfffwx2hAgMdr',
            'mfdltvvRgmc6Sufa4n',
            'nrqpj3u6yvrlFfrObj'
        ],
        followers: [
            'cj8Wgeiuayv2Vpkgxr',
            'ih5ujjehKfmU7ticsb',
            'qt7ulkfffwx2hAgMdr',
            'nrqpj3u6yvrlFfrObj'
        ],
        birthday: false,
        online: true
    },
    {
        id: 'jn63mgAjKbdvztwddk',
        name: 'Stephen Marsh',
        username: 'stephen_marsh',
        avatar: avatar3,
        bg: bg3
    },
    {
        id: 'ih5ujjehKfmU7ticsb',
        name: 'Phoebe Crawford',
        username: 'phoebe♥',
        avatar: avatar4,
        bg: bg4
    },
    {
        id: 'Ze0rizhtCy7utxcvzu',
        name: 'Stanley Burns',
        username: 'qool_Stan',
        avatar: avatar5,
        bg: bg5
    },
    {
        id: 'nrqpj3u6yvrlFfrObj',
        name: 'Millicent Fletcher',
        username: 'millicent_puppy',
        avatar: avatar6,
        bg: bg6
    },
    {
        id: 'qt7ulkfffwx2hAgMdr',
        name: 'Gregory Johnson',
        username: 'gregory_johnson',
        avatar: avatar7,
        bg: bg7
    },
    {
        id: 'sqj6f3eciJrOkwcywl',
        name: 'Carmella Mccormick',
        username: 'mccormick_cam',
        avatar: avatar8,
        bg: bg8
    },
    {
        id: 'zkJr9dtewnfd7Uzhpf',
        name: 'Poppy Holt',
        username: 'poppy☺',
        avatar: avatar9,
        bg: bg9
    },
    {
        id: '1bboSjhozdL6yxiclk',
        name: 'Phebe Morrison',
        username: 'phebe♣☺♥',
        avatar: avatar10,
        bg: bg10
    },
    {
        id: 'mfdltvvRgmc6Sufa4n',
        name: 'Robert Dixon',
        username: 'robby_dix',
        avatar: avatar11,
        bg: bg11
    },
];

export const Posts = [
    {
        id: 1,
        postImg: img1,
        userId: 'nrqpj3u6yvrlFfrObj',
        date: '5 min ago',
        tag: 'it`s my tag',
        likes: 23,
        comments: 9,
        altImg: 'Puppy',
        body: 'Add 1 cup of frozen peas along with the mussels, if you likes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
    },
    {
        id: 2,
        postImg: img2,
        userId: '1bboSjhozdL6yxiclk',
        date: '2 days ago',
        tag: 'it`s my tag to',
        likes: 9,
        comments: 2,
        altImg: 'I`m happy',
        body: '☻ I likes do the sport...\n' +
            'Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
    },
    {
        id: 3,
        postImg: img3,
        userId: 'mfdltvvRgmc6Sufa4n',
        date: '1 hour ago',
        likes: 13,
        comments: 1,
        altImg: 'Qool man',
        body: 'This is qool sport, guise...\n' +
            'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
    },
    {
        id: 4,
        postImg: img4,
        userId: 'sqj6f3eciJrOkwcywl',
        date: '3 hours ago',
        tag: 'I wrote this tag',
        likes: 18,
        comments: 5,
        altImg: 'Dancing',
        body: 'Beautiful dancer...\n' +
            'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
    },
    {
        id: 5,
        postImg: img5,
        userId: 'ih5ujjehKfmU7ticsb',
        date: '23 min ago',
        tag: 'It`s me',
        likes: 8,
        comments: 2,
        altImg: 'my photo',
        body: 'Nice to meet you ☺...\n' +
            'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
    },
    {
        id: 6,
        postImg: img6,
        userId: 'jn63mgAjKbdvztwddk',
        date: '1 day ago',
        tag: 'My happiest',
        likes: 20,
        comments: 4,
        altImg: 'my daughter',
        body: 'My loveling sun...\n' +
            'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
    },
    {
        id: 7,
        postImg: img7,
        userId: 'zkJr9dtewnfd7Uzhpf',
        date: '17 min ago',
        tag: 'My happiest',
        likes: 5,
        comments: 0,
        altImg: 'my sister',
        body: 'We likes this world...\n' +
            'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
    },
    {
        id: 8,
        postImg: img8,
        userId: 'cj8Wgeiuayv2Vpkgxr',
        date: '45 min ago',
        likes: 6,
        comments: 1,
        altImg: 'my sister',
        body: 'We likes this world...\n' +
            'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
    },
    {
        id: 9,
        postImg: img9,
        userId: 'qt7ulkfffwx2hAgMdr',
        date: '11 min ago',
        tag: 'My brother',
        likes: 14,
        comments: 2,
        altImg: 'my sister',
        body: 'My brother`s family...\n' +
            'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
    },
    {
        id: 10,
        postImg: img10,
        userId: 'Ze0rizhtCy7utxcvzu',
        date: '5 days ago',
        likes: 34,
        comments: 11,
        altImg: 'I cooked',
        body: 'I likes beautiful eats...\n' +
            'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
    },
]