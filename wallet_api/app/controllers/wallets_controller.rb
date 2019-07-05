class WalletsController < ApplicationController

	before_action :load_wallet, only: [:deposit, :withdraw]

	def show
		render json: Wallet.find(params[:id])
	end

	def deposit
		begin
			@wallet.deposit(params[:amount].to_f)
		rescue => error
			render json: { error: error.message }, status: 400 and return
		end
		render json: @wallet, status: 200
	end

	def withdraw
		begin
			@wallet.withdraw(params[:amount].to_f)
		rescue => error
			render json: { error: error.message }, status: 400 and return
		end
		render json: @wallet, status: 200
	end

	private

	def load_wallet
		@wallet = Wallet.find(params[:wallet_id])
	end
end