class MessagesController < ApplicationController
 skip_before_filter :verify_authenticity_token
 #skip_before_filter :authenticate_user!, :only => "reply"

  def reply
    message_body = params["Body"]
    from_number = params["From"]
    body_split = message_body.split(" ")


    user = User.find_by_username(body_split[0].downcase)
    question = user.active_polls.first.question
    if question
      possible_response = PossibleResponse.where(question_id: question.id, possible_response_name: body_split[1]).first
      if possible_response
        Response.create!(possible_response_id: possible_response.id, answer: body_split[1])
        Pusher.trigger('response_channel', 'my-event', {
        message: 'Response submitted'
      })
      end
    end
    render json: ["SUCCESS"]
    # boot_twilio
    # # sms = @client.messages.create(
    # #   from: Rails.application.secrets.twilio_number,
    # #   to: from_number,
    # #   body: "Response recorded. Thank you for using OmniPolls!"
    # # )

  end

  private

  def boot_twilio
    account_sid = Rails.application.secrets.twilio_sid
    auth_token = Rails.application.secrets.twilio_token
    @client = Twilio::REST::Client.new account_sid, auth_token
  end
end
