class Api::ActivePollsController < ApplicationController

  def create
    @active_poll = ActivePoll.new(active_polls_params)
    if @active_poll.save
      render 'api/active_polls/show'
    else
      render json: @active_poll.errors.full_messages, status: 422
    end
  end

  def update
    @active_poll = ActivePoll.find_by(user_id: current_user.id)

    if @active_poll.update(active_polls_params)
      Pusher.trigger('response_channel', 'new-active', {
      message: 'active_polls active'
    })
      render 'api/active_polls/show'
    else
      render json: @active_poll.errors.full_messages, status: 422
    end
  end

  def show
    user = User.find_by_username(params[:username] || current_user.username)
    @active_poll = ActivePoll.find_by(user_id: user[:id])
    if @active_poll
      render 'api/active_polls/show'
    else
      render json: ["User has none active"], status: 422
    end
  end

  private

  def active_polls_params
    params.require(:active_polls).permit(:question_id)
  end

end
