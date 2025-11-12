// as const assertion

// enum UserRoles {
// 	Admin = "Admin",
// 	Editor = "Editor",
// 	Viewer = "Viewer",
// }

const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
} as const;

//? access with value;
const canEdit = (role: keyof typeof UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else {
        return false;
    }
};

const isEdit = canEdit(UserRoles.Admin);
console.log(isEdit);

//? if access with key then----> (keyof UserRoles)[keyof typeof UserRoles]
