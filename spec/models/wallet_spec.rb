require 'rails_helper'

RSpec::Matchers.define_negated_matcher :not_change, :change

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

		it 'should not deposit on a negative amount and throws an error' do
			expect { wallet.deposit(-100) }
				.to not_change { wallet.balance }
					    .and raise_exception 'Invalid amount'
		end
	end

	describe '#withdraw' do
		it 'should withdraw amount from the wallet' do
			expect { wallet.withdraw(60) }.to change { wallet.balance }.by(-60)
		end
	end
end
