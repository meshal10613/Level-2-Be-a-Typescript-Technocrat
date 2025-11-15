// getter & setter

class Bank {
	public readonly userId: number;
	public userName: string;
	protected userBalance: number; //? if this not use in another class then privet, otherwise protected
	constructor(userId: number, userName: string, userBalance: number){
		this.userId = userId;
		this.userName = userName;
		this.userBalance = userBalance;
	}

	// addBalance(balance: number){
	// 	this.userBalance += balance;
	// };
	//?setter
	set addBalance(ammount: number){
		this.userBalance += ammount;
	}

	//?getter
	get getBalance(){
		return this.userBalance;
	}

	removeBalance(balance: number){
		if(this.userBalance < balance){
			return console.log("Sorry! You've insufficent balance!")
		}
		this.userBalance -= balance;
	}
}

const meshal = new Bank(1001, "Meshal", 15000);
meshal.addBalance = 5000;
console.log(meshal.getBalance)
console.log(meshal)