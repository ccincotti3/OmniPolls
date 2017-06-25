class Api::PossibleResponsesController < ApplicationController
  def create
    @possible_responses = [];
    @failed = []
    if params[:possible_responses].is_a?(Hash)
      @resp_hashes = params[:possible_responses].values
    else
      @resp_hashes = params[:possible_responses]
    end
    @resp_hashes.each do | resp_hash |
      resp_hash['question_id'] ||= params[:question_id]
      resp = PossibleResponse.new( resp_hash )
      if resp.save
        @possible_responses << resp;
      else
        @failed << resp;
      end
    end
    @question = Question.find(params[:question_id])
    debugger
    render 'api/questions/show'
  end

  private
  def possible_responses_params
    params.require(:possible_responses).permit(:possible_response_name, :question_id)
  end
end
