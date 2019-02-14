class Wallet < ApplicationRecord
	has_many :transactions
	validates :name, presence: true

	def deposit(amount)
		raise 'Invalid amount' if amount < 0
		self.balance += amount
		save
		Transaction.create({ amount: amount, wallet: self })
	end

	def withdraw(amount)
		raise 'Invalid amount' if amount < 0
		raise 'Insufficient balance' if amount > self.balance
		self.balance -= amount
		save
	end
end