class Api::GroupsController < ApplicationController
  def index
    if current_user
      @groups = Group.where(author_id: current_user.id)
      render 'api/groups/index'
    else
      render json: ["Must be logged in"], status: 422
    end
  end

  def create
    @group = Group.new(group_params)

    if @group.save
      render 'api/groups/show'
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def destroy
    @groups = Group.where(id: params[:id].split(","))
    @groups.delete_all
    render json: params[:id].split(",")
  end

  def update
    @group = Group.find(params[:id])

    if @group.update(group_params)
      render 'api/groups/show'
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  private

  def group_params
    params.require(:group).permit(:title, :author_id)
  end

end
