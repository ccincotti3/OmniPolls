class MessagesController < ApplicationController
 skip_before_filter :verify_authenticity_token
 #skip_before_filter :authenticate_user!, :only => "reply"

  def reply
    message_body = params["Body"]
    from_number = params["From"]
    body_split = message_body.split(" ")
    answer = body.split(" ")[1 .. -1].join(" ")

    user = User.find_by_username(body_split[0].downcase)
    question = user.active_polls.first.question
    if question
      possible_response = PossibleResponse.where(question_id: question.id, possible_response_name: answer).first
      if possible_response
        Response.create!(possible_response_id: possible_response.id, answer: answer)
        Pusher.trigger('response_channel', 'my-event', {
        message: 'Response submitted'
      })
      end
    end

    boot_twilio
    sms = @client.messages.create(
      from: '+16099576853',
      to: from_number,
      body: "Response recorded. Thank you for using OmniPolls!"
    )
    render json: ["SUCCESS"]
  end

  private

  def boot_twilio
    account_sid = Rails.application.secrets.twilio_sid
    auth_token = Rails.application.secrets.twilio_token
    @client = Twilio::REST::Client.new account_sid, auth_token
  end
end
