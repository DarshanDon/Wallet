Rails.application.routes.draw do
	post 'wallets/:id/deposit' => 'wallets#deposit'
	post 'wallets/:id/withdraw' => 'wallets#withdraw'
end
