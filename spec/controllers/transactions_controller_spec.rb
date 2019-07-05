require 'rails_helper'

describe TransactionsController do

	it 'should return all transactions of wallet' do
		wallet = create(:wallets_with_transactions)

		get :index, params: { wallet_id: wallet.id }
		expect(response).to be_ok

		response_data = JSON.parse(response.body)
		expect(response_data.length).to eq(wallet.transactions.length)
	end
end