class MessagesController < ApplicationController
  before_action :set_group

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    respond_to do |format|
      format.html
      format.json {
        @new_messages = @messages.where("id > ?", params[:last_id]).includes(:user)
      }
    end
  end

  def create
    @message = @group.messages.new(message_params)
    respond_to do |format|
      format.html {
        if @message.save
          redirect_to group_messages_path(@group), notice: 'メッセージが送信されました'
        else
          @messages = @group.messages.includes(:user)
          flash.now[:alert] = 'メッセージを入力してください。'
          render :index
        end
      }
      format.json {
        @message.save
      }
    end
  end

  private
  def set_group
    @group = Group.find(params[:group_id])
  end

  def message_params
    params.require(:message).permit(:body, :image).merge(user_id: current_user.id)
  end
end
