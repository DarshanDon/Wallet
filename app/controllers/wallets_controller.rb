class WalletsController < ApplicationController

	def show
		wallet = load_wallet
		render json: wallet
	end

	def new
		wallet = Wallet.create({ balance: 0 })
		render json: wallet, status: 200
	end

	def balance
		wallet = load_wallet
		render json: wallet, status: 200
	end

	def deposit
		wallet = load_wallet
		begin
			wallet.deposit(params[:amount].to_f)
		rescue => error
			render json: { error: error.message }, status: 400 and return
		end
		render json: wallet, status: 200
	end

	def withdraw
		wallet = load_wallet
		begin
			wallet.withdraw(params[:amount].to_f)
		rescue => error
			render json: { error: error.message }, status: 400 and return
		end
		render json: wallet, status: 200
	end

	private

	def load_wallet
		Wallet.find(params[:id])
	end
end