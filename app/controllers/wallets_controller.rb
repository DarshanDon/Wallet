class WalletsController < ApplicationController

	def deposit
		render json: { balance: params[:amount] }, status: 200
	end
end