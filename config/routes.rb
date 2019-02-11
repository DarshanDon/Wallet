Rails.application.routes.draw do
	resource :wallets, only: [] do
		post :deposit
	end
end
