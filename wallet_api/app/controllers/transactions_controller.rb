class TransactionsController < ApplicationController
	def index
		wallet = Wallet.find(params[:wallet_id])
		render json: wallet.transactions
	end
end