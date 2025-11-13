"use strict";
// enum
Object.defineProperty(exports, "__esModule", { value: true });
// set of fixed string leteral ek jaygay rakhe
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
// type UserRoles = "Admin" | "Editor" | "Viewer";
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
//# sourceMappingURL=enum.js.map