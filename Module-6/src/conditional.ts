// conditional type: the type that depends on condition

type A = null;
type B = undefined;

type C = A extends null ? true : B extends undefined ? true : false;

type RichPeoplesVehicle = {
	car: string;
	bike: string;
	cng: string;
}

type CheckVehicle<T> = T extends keyof RichPeoplesVehicle ? true : false;

type HasBike = CheckVehicle<"bike">
