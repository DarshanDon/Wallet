FactoryBot.define do
	factory :transaction do
		wallet { create(:wallet) }
		amount { 200 }
	end
end