class Api::ResponsesController < ApplicationController

  def create
    @response = Response.new(response_params)
    if @response.save
      render 'api/responses/show'
    else
      render json: @response.errors.full_messages, status: 422
    end
  end

  def destroy
    @response = Response.find(params[:id])
    @response.delete
    render 'api/responses/show'
  end


  private

  def response_params
    params.require(:response).permit(:possible_response_id, :answer)
  end
end
