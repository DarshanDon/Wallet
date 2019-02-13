class WalletsController < ApplicationController

	def deposit
		wallet = Wallet.find(params[:id])
		begin
			wallet.deposit(params[:amount].to_f)
		rescue => error
			render json: { error: error.message }, status: 400 and return
		end
		render json: wallet, status: 200
	end

	def withdraw
		wallet = Wallet.find(params[:id])
		begin
			wallet.withdraw(params[:amount].to_f)
		rescue => error
			render json: { error: error.message }, status: 400 and return
		end
		render json: wallet, status: 200
	end
end