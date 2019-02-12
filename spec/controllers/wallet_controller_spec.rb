require 'rails_helper'

describe WalletsController do

	describe '#deposit' do
		let(:wallet) { FactoryBot.create(:wallet) }

		it 'should deposit amount to the wallet' do
			post :deposit, params: { id: wallet.id, amount: 100 }
			expect(response).to be_ok

			wallet.reload
			expect(wallet.balance).to eq(100)

			response_data = JSON.parse(response.body)
			expect(response_data['id']).to eq(wallet.id)
			expect(response_data['balance']).to eq(wallet.balance)
		end

		it 'should return error when trying to deposit negative amount' do
			post :deposit, params: { id: wallet.id, amount: -100 }
			expect(response).to be_bad_request

			response_data = JSON.parse(response.body)
			expect(response_data['error']).to eq('Invalid amount')
		end
	end

	describe "#withdraw" do
		let(:wallet) { FactoryBot.create(:wallet, balance: 100) }

		it 'should withdraw amount from the wallet' do
			post :withdraw, params: { id: wallet.id, amount: 100 }
			expect(response).to be_ok

			wallet.reload
			expect(wallet.balance).to eq(0)

			response_data = JSON.parse(response.body)
			expect(response_data['id']).to eq(wallet.id)
			expect(response_data['balance']).to eq(wallet.balance)
		end

		it 'should return error when trying to withdraw more amount than the wallet balance' do
			post :withdraw, params: { id: wallet.id, amount: 1000 }
			expect(response).to be_bad_request

			response_data = JSON.parse(response.body)
			expect(response_data['error']).to eq('Insufficient Balance')
		end
	end
end