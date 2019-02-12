class CreateWallets < ActiveRecord::Migration[5.2]
	def change
		create_table :wallets do |t|
			t.float :balance, scale: 2, default: 0
			t.timestamps
		end
	end
end
