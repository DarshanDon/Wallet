class CreateTableTransactions < ActiveRecord::Migration[5.2]
	def change
		create_table :table_transactions do |t|
			t.integer :wallet_id
			t.float :amount, scale: 2
			t.timestamps
		end
	end
end
