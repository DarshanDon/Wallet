class RenameTableTransactions < ActiveRecord::Migration[5.2]
	def change
		rename_table :table_transactions, :transactions
	end
end
