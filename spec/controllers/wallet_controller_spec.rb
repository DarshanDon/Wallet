require 'rails_helper'

describe WalletsController do
	describe '#deposit' do
		let(:wallet) { Wallet.create({ balance: 0 }) }

		it 'should deposit amount to the wallet' do
			post :deposit, params: { id: wallet.id, amount: 100 }
			expect(response).to be_ok

			wallet.reload
			expect(wallet.balance).to eq(100)

			response_data = JSON.parse(response.body)
			expect(response_data['id']).to eq(wallet.id)
			expect(response_data['balance']).to eq(wallet.balance)
		end
	end
end