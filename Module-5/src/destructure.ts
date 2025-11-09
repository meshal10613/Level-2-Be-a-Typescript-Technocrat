//? Object Destructuring------------------>
const user: {
    id: number;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    gender: string;
    favoriteColor: string;
} = {
    id: 123,
    name: {
        firstName: "Syed",
        middleName: "Mohiuddin",
        lastName: "Meshal",
    },
    gender: "male",
    favoriteColor: "Black",
};

// const lastName = user.name.lastName;

const {
    favoriteColor: myFavoriteColor,
    name: { middleName: myMiddleName },
} = user; //obj destructing and alias
// console.log(myFavoriteColor, myMiddleName)

//? arrya destructuring------------------->
const friends: string[] = ["karim", "rahim"];
// const myBestFriend = friends[1];
const [myBestFriend] = friends;

console.log(myBestFriend)