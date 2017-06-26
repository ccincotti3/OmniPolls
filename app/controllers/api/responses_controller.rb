class Api::ResponsesController < ApplicationController

  def create
    @response = Response.new(response_params)
    if @response.save
      render 'api/response/show'
    else
      render json: @response.errors.full_messages, status: 422
    end
  end

  def destroy
    @response = Response.find(params[:id])
    @response.delete
    render 'api/response/show'
  end


  private

  def response_params
    params.require(:response).permit(:possible_response_id, :name)
  end
end
