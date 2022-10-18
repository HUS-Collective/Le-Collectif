const USER_TABLE = {
    userId: 1,
    name: 'Ian',
    email: 'codesmith123@gmail.com',
    password: 'codesmith123'
}

const PHOTOS = {
    photoId: 1,
    photoName: "hus's masterpiece",
    artistName: "Hus",
    price: 0.01,
    imgPath: '../',
    views: 0,
    count: 3,
    tags: 'array of strings?',
    s3location: 'stretch'
}

const CART = {
    itemId: 1,
    userId: 1,
    photoId: 1
}

export {
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