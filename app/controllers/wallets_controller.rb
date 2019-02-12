class WalletsController < ApplicationController

	def deposit
		wallet = Wallet.find(params[:id])
		wallet.deposit(params[:amount].to_f)
		render json: wallet, status: 200
	end
end