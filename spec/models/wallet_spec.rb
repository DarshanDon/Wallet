describe 'Wallet' do
	let(:wallet) { create(:wallet, balance: 100) }

	describe "#deposit" do
		it 'should deposit amount to the wallet' do
			expect { wallet.deposit(100) }.to change { wallet.balance }.by(100)
		end
	end
end