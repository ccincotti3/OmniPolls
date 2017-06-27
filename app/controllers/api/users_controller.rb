class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      Group.create!(title: "Ungrouped", author_id: @user.id)
      ActivePoll.create!(user_id: @user.id, question_id: null)
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :first_name, :last_name)
  end
end
