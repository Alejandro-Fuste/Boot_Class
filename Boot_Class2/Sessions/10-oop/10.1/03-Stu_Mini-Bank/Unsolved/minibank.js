function MiniBank(balance) {
	this.balance = balance;
	(this.getBalance = function() {
		return this.balance;
	}),
		(this.printBalance = function() {
			console.log(`Balance: ${this.getBalance()}`);
		});
	this.statement = [ balance ];
	this.setBalance = function(value) {
		this.balance = value;
	};
	this.updateStatement = function(num) {
		this.statement.push(num);
	};
	this.getStatement = function() {
		return this.statement;
	};
	this.printStatment = function() {
		this.statement.forEach((eachBal) => {
			console.log(eachBal);
			// console.log(this.statement.join('\n'));
		});
	};

	this.deposit = function(value) {
		const newBalance = this.getBalance() + value;
		this.updateStatement(newBalance);
		this.setBalance(newBalance);
	};
	this.withdraw = function(value) {
		const newBalance = this.getBalance() - value;
		this.updateStatement(newBalance);
		this.setBalance(newBalance);
	};
}

const bank = new MiniBank(100);
bank.printBalance();
bank.deposit(50);
bank.printBalance();
bank.withdraw(100);
bank.printBalance();
bank.printStatment();
