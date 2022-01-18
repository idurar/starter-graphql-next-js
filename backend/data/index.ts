const mainPhoto =
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&ix_id=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&h=400&q=60';

const photos = [mainPhoto];

export const users = [
  {
    _id: '1',
    name: 'Salah Lalami',
    email: 'hello@lalamisdn.com',
    photo:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--AksklHZW--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/661197/1fd0af9f-3b2f-4b12-a59e-edca17c567b7.jpeg',
  },
  {
    _id: '2',
    name: 'Wes bos',
    email: 'wes@wesbos.com',
    photo: 'https://pbs.twimg.com/profile_images/877525007185858562/7G9vGTca_400x400.jpg',
  },
  {
    _id: '3',
    name: 'kent c dods',
    email: 'kent@kcc.io',
    photo: 'https://pbs.twimg.com/profile_images/1444988463216922631/_IDffhy4i_400x400.jpg',
  },
];

export const reviews = [
  {
    _id: '1',
    author: users[0],
    feedback: 'amazing appartment , close to centre , restaurent, metro station',
    rate: 5,
    place: '1',
  },
  {
    _id: '2',
    author: users[0],
    feedback: 'really cool place , Thank you',
    rate: 5,
    place: '1',
  },
  {
    _id: '3',
    author: users[2],
    feedback: 'Just Love It',
    rate: 4,
    place: '1',
  },
];

export const places = [
  {
    _id: '1',
    owner: users[0],
    type: 'appartment',
    desciption: 'Cozy appatment with two bedrooms in central of London',
    mainPhoto,
    photos,
    priceByNight: 89,
    reviews,
  },
];
