class DropTransactions < ActiveRecord::Migration[5.2]
	def change
		drop_table :transactions
	end
end
