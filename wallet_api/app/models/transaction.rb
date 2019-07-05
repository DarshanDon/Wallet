class Transaction < ApplicationRecord
	belongs_to :wallet
	validates :wallet, presence: true
	validates :amount, presence: true
end