"use strict";
// as const assertion
Object.defineProperty(exports, "__esModule", { value: true });
// enum UserRoles {
// 	Admin = "Admin",
// 	Editor = "Editor",
// 	Viewer = "Viewer",
// }
const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
//? access with value;
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};
const isEdit = canEdit(UserRoles.Admin);
console.log(isEdit);
//? if access with key then----> (keyof UserRoles)[keyof typeof UserRoles]
//# sourceMappingURL=asconst.js.map