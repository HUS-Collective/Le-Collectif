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
    imgPath: 'https://images.unsplash.com/photo-1616941351479-0072624fca9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
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
    imgPath: `https://images.unsplash.com/photo-1556139930-c23fa4a4f934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
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
    imgPath: 'https://images.unsplash.com/photo-1570475754561-4effe71c5084?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
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
    imgPath: 'https://images.unsplash.com/photo-1592499751912-afae31f5504b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
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
    imgPath: 'https://images.unsplash.com/photo-1637094434303-ebd436e27836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2086&q=80',
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
    imgPath: `https://images.unsplash.com/photo-1641351898219-fdb79d77153e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
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
    imgPath: 'https://images.unsplash.com/photo-1609562235121-b1249565916e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
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
    imgPath: 'https://images.unsplash.com/photo-1641355262431-021a396d4fe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
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
    imgPath: 'https://images.unsplash.com/photo-1607855085788-8ce8252146a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
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