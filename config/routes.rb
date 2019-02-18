Rails.application.routes.draw do
	resources :wallets, only: [:show] do
		post :deposit
		post :withdraw
		get :transactions, to: 'transactions#index'
	end
end
