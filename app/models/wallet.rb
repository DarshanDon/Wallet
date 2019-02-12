class Wallet < ApplicationRecord
	validates :name, presence: true

	def deposit(amount)
		self.balance += amount
		save
	end
end