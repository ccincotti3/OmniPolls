class Api::QuestionsController < ApplicationController
  def create
    @question = Question.new(question_params)
    if @question.save
      render 'api/questions/show'
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.delete
    render 'api/questions/show'
  end

  def update
    @question = Question.find(params[:id])

    if @question.update(question_params)
      render 'api/questions/show'
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  private

  def question_params
    params.require(:question).permit(:body, :question_type, :group_id, :active)
  end


end
