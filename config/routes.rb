Rails.application.routes.draw do
	# get 'wallets/new' => 'wallets#new'
	# get 'wallets/:id' => 'wallets#balance'
	# resources
	get 'wallets/:id/show' => 'wallets#show'
	post 'wallets/:id/deposit' => 'wallets#deposit'
	post 'wallets/:id/withdraw' => 'wallets#withdraw'
end
