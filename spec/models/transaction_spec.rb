require 'rails_helper'

describe Transaction do
	it { should validate_presence_of(:amount) }
	it { should validate_presence_of(:wallet_id) }
end