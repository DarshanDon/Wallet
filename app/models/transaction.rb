class Transaction < ApplicationRecord
	validates :wallet_id, presence: true
	validates :amount, presence: true
end