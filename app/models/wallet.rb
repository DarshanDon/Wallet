class Wallet < ApplicationRecord
	def deposit(amount)
		self.balance += amount
		save
	end
end