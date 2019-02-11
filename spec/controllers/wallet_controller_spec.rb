require 'rails_helper'

describe WalletsController do
	describe '#deposit' do
		let(:wallet) { create(:wallet) }

		it 'should deposit amount to the wallet' do
			post :deposit, params: { amount: '100' }
			expect(response).to be_ok
			response_data = JSON.parse(response.body)
			expect(response_data['balance']).to eql("100")
		end
	end
end