class Wallet < ApplicationRecord
	validates :name, presence: true

	def deposit(amount)
		raise 'Invalid amount' if amount < 0
		self.balance += amount
		save
	end
end