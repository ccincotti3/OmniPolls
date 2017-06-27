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
    @questions = Question.where(id: params[:id].split(","))
    @questions.destroy_all

    render json: params[:id].split(",")
  end

  def show
    @question = Question.find(params[:id])
    if @question.author.id == current_user.id
      render 'api/questions/show'
    else
      render json: ["Access Denied"], status: 422
    end
  end

  def update
    debugger
    @question = Question.find(params[:question][:id])

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
