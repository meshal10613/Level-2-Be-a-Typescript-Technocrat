//? spread operator-- array
const friends: string[] = ["Rahim", "Karim"];
const schoolFriends: string[] = ["Pintu", "Chintu", "Montu"];
const collegeFriends: string[] = ["Rupom", "Muhib"];
friends.push(...schoolFriends);
friends.push(...collegeFriends);

// const allFriends: string[] = [...friends, ...schoolFriends, ...collegeFriends];
// console.log(friends);

//? spread operator-- object
const user = {
    name: "Meshal",
    number: "01764447574",
};

const otherInfo = {
    gender: "male",
    hobby: "Gaming",
};

const userInfo = { ...user, ...otherInfo };
// console.log(userInfo);

//? rest operator
const sendInvite = (...friends: string[]) => {
    friends.forEach((f: string) => console.log(`Send invite to ${f}`));
};

sendInvite("Pintu", "Chintu", "Montu");
