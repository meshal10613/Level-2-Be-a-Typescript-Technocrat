// access => modify

class BankAccount {
	public readonly userId: number;
	public userName: string;
	protected userBalance: number; //? if this not use in another class then privet, otherwise protected
	constructor(userId: number, userName: string, userBalance: number){
		this.userId = userId;
		this.userName = userName;
		this.userBalance = userBalance;
	}

	addBalance(balance: number){
		this.userBalance += balance;
	};

	removeBalance(balance: number){
		if(this.userBalance < balance){
			return console.log("Sorry! You've insufficent balance!")
		}
		this.userBalance -= balance;
	}
}

const meshalAccount = new BankAccount(1001, "Meshal", 15000);
// meshalAccount.removeBalance(50000);
// console.log(meshalAccount)

// class StudentBankAccount extends BankAccount {
// 	test(){
// 		this.userBalance
// 	}
// }