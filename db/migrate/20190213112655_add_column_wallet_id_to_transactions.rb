class AddColumnWalletIdToTransactions < ActiveRecord::Migration[5.2]
	def change
		add_column :transactions, :wallet_id, :string
		add_column :transactions, :amount, :float
	end
end
