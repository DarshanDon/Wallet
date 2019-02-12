require 'rails_helper'

describe 'Wallet' do
	let(:wallet) { create(:wallet, balance: 100) }

	it 'should not allow creating a wallet with no name' do
		wallet = Wallet.new({ balance: 100, name: nil })
		expect(wallet.save).to be_falsey
	end

	describe "#deposit" do
		it 'should deposit amount to the wallet' do
			expect { wallet.deposit(100) }.to change { wallet.balance }.by(100)
		end
	end
end
