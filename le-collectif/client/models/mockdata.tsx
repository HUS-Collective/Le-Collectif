const USER_TABLE = {
  userId: 1,
  name: 'Ian',
  email: 'codesmith123@gmail.com',
  password: 'codesmith123'
}

interface Photos {
  photoId: number,
  photoName: string,
  artistName: string,
  price: number,
  imgPath: string,
  views: number,
  count: number,
  tags: string,
  s3location: string,
}

const PHOTOS: Photos[] = [{
    photoId: 1,
    photoName: "hus's masterpiece",
    artistName: "Hus",
    price: 0.01,
    imgPath: 'https://images.unsplash.com/photo-1665881769209-9ebd73ab7b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    views: 0,
    count: 3,
    tags: 'array of strings?',
    s3location: 'stretch'
  },
  {
    photoId: 2,
    photoName: "ian's masterpiece",
    artistName: "Ian",
    price: 0.01,
    imgPath: `https://images.unsplash.com/photo-1666043073961-6112c7e1646c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60} alt={props.photoName`,
    views: 0,
    count: 3,
    tags: 'array of strings?',
    s3location: 'stretch'
  },
  {
    photoId: 3,
    photoName: "evan's masterpiece",
    artistName: "Evan",
    price: 0.01,
    imgPath: 'https://images.unsplash.com/photo-1665881769209-9ebd73ab7b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    views: 0,
    count: 3,
    tags: 'array of strings?',
    s3location: 'stretch'
  },
  {
    photoId: 4,
    photoName: "yuey's masterpiece",
    artistName: "Yuey",
    price: 0.01,
    imgPath: 'https://images.unsplash.com/photo-1665881769209-9ebd73ab7b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    views: 0,
    count: 3,
    tags: 'array of strings?',
    s3location: 'stretch'
  },
  {
    photoId: 5,
    photoName: "hus's masterpiece",
    artistName: "Hus",
    price: 0.01,
    imgPath: 'https://images.unsplash.com/photo-1665947823432-fabb5e9631bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    views: 0,
    count: 3,
    tags: 'array of strings?',
    s3location: 'stretch'
  },
  {
    photoId: 6,
    photoName: "ian's masterpiece",
    artistName: "Ian",
    price: 0.01,
    imgPath: `https://images.unsplash.com/photo-1665881769209-9ebd73ab7b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60`,
    views: 0,
    count: 3,
    tags: 'array of strings?',
    s3location: 'stretch'
  },
  {
    photoId: 7,
    photoName: "evan's masterpiece",
    artistName: "Evan",
    price: 0.01,
    imgPath: 'https://images.unsplash.com/photo-1665881769209-9ebd73ab7b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    views: 0,
    count: 3,
    tags: 'array of strings?',
    s3location: 'stretch'
  },
  {
    photoId: 8,
    photoName: "yuey's masterpiece",
    artistName: "Yuey",
    price: 0.01,
    imgPath: 'https://images.unsplash.com/photo-1666067654612-603aeaaab991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    views: 0,
    count: 3,
    tags: 'array of strings?',
    s3location: 'stretch'
  },
  {
    photoId: 9,
    photoName: "hus's masterpiece",
    artistName: "Hus",
    price: 0.01,
    imgPath: 'https://images.unsplash.com/photo-1665881769209-9ebd73ab7b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    views: 0,
    count: 3,
    tags: 'array of strings?',
    s3location: 'stretch'
  },

]

const CART = {
    itemId: 1,
    userId: 1,
    photoId: 1
}

export default {
    USER_TABLE,
    PHOTOS,
    CART
}

// const {
//     userId,
//     name,
//     email,
//     password }
//     = USER_TABLE;

//const {itemId, userId, photoId} = CART;

// const {
//   photoId,
//   photoName,
//   artistName,
//   price,
//   imgPath,
//   views,
//   count,
//   tags,
//   s3location }
//   = PHOTOS;