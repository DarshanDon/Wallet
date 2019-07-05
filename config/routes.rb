Rails.application.routes.draw do
	resources :wallets, only: [:show] do
		post :deposit
		post :withdraw
		resources :transactions, only: [:index]
	end
end
