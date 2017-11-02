/**
 * @User
 * {
    "_id": "59faf475c59ebdad611d3fe9",
    "index": 0,
    "guid": "84081bdf-7cc1-4997-899c-3db92e7e240d",
    "isActive": true,
    "gender": "men",
    "pictureId": 51,
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/51.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
    },
    "age": 40,
    "eyeColor": "blue",
    "name": {
      "firstName": "Kristen",
      "lastName": "Poole",
      "fullName": "Kristen Poole"
    },
    "company": "REALMO",
    "email": "kristenpoole@realmo.com",
    "phone": "+1 (874) 503-2603",
    "address": "911 Metrotech Courtr, Yardville, Oklahoma, 3657",
    "about": "Voluptate sint qui exercitation laborum magna mollit commodo aute. Incididunt ipsum et est sit sint. Deserunt do enim labore tempor elit.\r\n",
    "registered": "2016-08-06T07:23:29 -02:00",
    "latitude": -30.765153,
    "longitude": -10.535983,
    "tags": [
      "est",
      "qui",
      "culpa",
      "eu",
      "ut",
      "commodo",
      "commodo"
    ],
    "friends": [
      {
        "id": 2,
        "name": "Schneider Alford"
      },
      {
        "id": 3,
        "name": "Maude Pope"
      },
      {
        "id": 4,
        "name": "Ana Booker"
      }
    ],
    "greeting": "Hello, Kristen! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
 */

export class UserName {
  firstName:string;
  lastName:string;
  fullName:string;
}

export class UserPicture {
  firstName:string;
  lastName:string;
  fullName:string;
}

export class User {
  _id:string;
  index:number;
  guid:string;
  isActive:boolean;
  gender:string;
  pictureId:number;
  picture:UserPicture;
  age:number;
  eyeColor:string;
  name:UserName;
  company:string;
  email:string;
  phone:string;
  address:string;
  about:string;
  registered:string;
  latitude:number;
  longitude:number;
  tags:any[];
  friends:any[];
  greeting:string;
  favoriteFruit:string;
}

