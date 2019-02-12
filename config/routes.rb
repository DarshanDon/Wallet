Rails.application.routes.draw do
	# resource :wallets, only: [] do
	# 	post :deposit
	# end

	post 'wallets/:id/deposit' => 'wallets#deposit'
end
