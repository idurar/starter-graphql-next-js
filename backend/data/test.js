const users = [
  {
    id: '1',
    name: 'Salah Lalami',
    email: 'hello@lalamisdn.com',
    photo:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--AksklHZW--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/661197/1fd0af9f-3b2f-4b12-a59e-edca17c567b7.jpeg',
  },
  {
    id: '2',
    name: 'Wes bos',
    email: 'wes@wesbos.com',
    photo: 'https://pbs.twimg.com/profile_images/877525007185858562/7G9vGTca_400x400.jpg',
  },
  {
    id: '3',
    name: 'kent c dods',
    email: 'kent@kcc.io',
    photo: 'https://pbs.twimg.com/profile_images/1444988463216922631/IDffhy4i_400x400.jpg',
  },
];
const reviews = [
  {
    id: '1',
    author: users[0],
    feedback: 'amazing appartment , close to centre , restaurent, metro station',
    rate: 5,
    place: '1',
  },
  {
    id: '2',
    author: users[0],
    feedback: 'really cool place , Thank you',
    rate: 5,
    place: '1',
  },
  {
    id: '3',
    author: users[2],
    feedback: 'Just Love It',
    rate: 4,
    place: '1',
  },
];

console.log(reviews.filter((x) => x.author.id == '1'));
