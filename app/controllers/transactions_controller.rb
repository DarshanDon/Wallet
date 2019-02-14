class TransactionsController < ApplicationController
	def index
		wallet = Wallet.find(params[:id])
		render json: wallet.transactions
	end
end