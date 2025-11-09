//? Union Type |

type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) => {
    if (role === "admin") {
        return "Admin Dashboard";
    } else if (role === "user") {
        return "User Dashboard";
    } else {
        return "Guest Dashboard";
    }
};

// console.log(getDashboard("user"));

//? Intersection Type &

type Employee = {
    id: string;
    name: string;
    phoneNumber: string;
};

type Manager = {
    designation: string;
    teamSize: number;
};

type EmployeeManager = Employee & Manager;

const Meshal: EmployeeManager = {
    id: "123",
    name: "Syed Mohiuddin Meshal",
    phoneNumber: "+880 1764447574",
    designation: "",
    teamSize: 20,
};
