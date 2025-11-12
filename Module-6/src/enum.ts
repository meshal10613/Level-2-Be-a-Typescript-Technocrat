// enum

// set of fixed string leteral ek jaygay rakhe

enum UserRoles {
	Admin = "Admin",
	Editor = "Editor",
	Viewer = "Viewer",
}

// type UserRoles = "Admin" | "Editor" | "Viewer";

const canEdit = (role: UserRoles) => {
	if (role === UserRoles.Admin || role === UserRoles.Editor) {
		return true;
	} else {
		return false
	}
};

const isEdit = canEdit(UserRoles.Admin);
console.log(isEdit)