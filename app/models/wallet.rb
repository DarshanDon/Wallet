class Wallet < ApplicationRecord
	validates :name, presence: true

	def deposit(amount)
		raise 'Invalid amount' if amount < 0
		self.balance += amount
		save
	end

	def withdraw(amount)
		raise 'Invalid amount' if amount < 0
		raise 'Insufficient balance' if amount > self.balance
		self.balance -= amount
		save
	end
end