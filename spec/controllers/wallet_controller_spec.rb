require 'rails_helper'

describe WalletsController do

	describe "#show" do
		let(:wallet) { FactoryBot.create(:wallet) }
		it 'should return a single wallet' do
			get :show, params: { id: wallet.id }
			expect(response).to be_ok
			actual = JSON.parse(response.body)
			expect(actual['id']).to eq(wallet.id)
			expect(actual['balance']).to eq(wallet.balance)
		end
	end

	describe "#new" do
		it 'should create a new wallet' do
			get :new
			expect(response).to be_ok

		end
	end

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
			expect(response_data['error']).to eq('Insufficient balance')
		end

		it 'should return error when trying to withdraw negative amount' do
			post :withdraw, params: { id: wallet.id, amount: -100 }
			expect(response).to be_bad_request

			response_data = JSON.parse(response.body)
			expect(response_data['error']).to eq('Invalid amount')
		end
	end
end