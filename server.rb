require "sinatra/base"
require "pry"

module Sil_Lum_Kung_Fu
  class Server < Sinatra::Base

    get "/" do
      erb :index
    end

    get "/home" do 
      erb :welcome
    end

    get "/about" do
      erb :about
    end

    get "/schedule" do
      erb :schedule
    end

    get "/contact" do
      erb :contact
    end

    get "/videos" do
      erb :videos
    end
  end
end