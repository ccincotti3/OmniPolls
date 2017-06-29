Twilio.configure do |config|
  config.account_sid = ENV['TWILIO_SID']
  config.auth_token  = ENV['TWILIO_TOKEN']
  config.phone_number = ENV["TWILIO_NUMBER"]
end
