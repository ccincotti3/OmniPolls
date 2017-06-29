class Api::ResponsesController < ApplicationController

  def create
    @response = Response.new(response_params)
    if @response.save
      Pusher.trigger('response_channel', 'my-event', {
      message: 'hello world'
    })
      render 'api/responses/show'
    else
      render json: @response.errors.full_messages, status: 422
    end
  end

  def destroy
    @response = Response.where(possible_response_id: params[:possible_response_id]).first
    if @response
      @response.delete
      Pusher.trigger('response_channel', 'my-event', {
      message: 'hello world'
    })
      render 'api/responses/show'
    else
      render ['Nothing to delete'], status: 422
    end
  end


  private

  def response_params
    params.require(:response).permit(:possible_response_id, :answer)
  end
end
