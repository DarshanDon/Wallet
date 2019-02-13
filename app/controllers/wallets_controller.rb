class WalletsController < ApplicationController

	def deposit
		wallet = Wallet.find(params[:id])
		begin
			wallet.deposit(params[:amount].to_f)
		rescue
			render json: { error: 'Invalid amount' }, status: 400 and return
		end
		render json: wallet, status: 200
	end

	def withdraw
		wallet = Wallet.find(params[:id])
		begin
			wallet.withdraw(params[:amount].to_f)
		rescue => e
			render json: { error: e.message }, status: 400 and return
		end
		render json: wallet, status: 200
	end
end