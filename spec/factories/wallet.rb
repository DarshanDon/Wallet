FactoryBot.define do
	factory :wallet do
		balance { 0 }
		name { "Zero" }

		factory :wallets_with_transactions do
			transient do
				transactions_count { 5 }
			end

			after(:create) do |wallet, evaluator|
				create_list(:transaction, evaluator.transactions_count, wallet: wallet)
			end
		end
	end
end