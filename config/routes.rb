Rails.application.routes.draw do
	# get 'wallets/new' => 'wallets#new'
	# get 'wallets/:id' => 'wallets#balance'

	get 'wallets/:id' => 'wallets#show'
	post 'wallets/:id/deposit' => 'wallets#deposit'
	post 'wallets/:id/withdraw' => 'wallets#withdraw'

	# resources :wallets, only: [:show] do
	# 	post :deposit
	# 	post :withdraw
	# end

	get 'wallets/:id/transactions' => 'transactions#index'
end
