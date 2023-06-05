class AuthController < ApplicationController
  helper_method :current_user

  def current_user
    current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    current_user.present?
  end

  def require_login
    redirect_to login_path, alert: "You must be logged in to access this page." unless logged_in?
  end
end

  def signup
    user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to root_path, notice: "User was successfully created."
    else
      render :signup
    end
  end

  def login
  end

  def authenticate
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: "Logged in successfully."
    else
      flash[:alert] = "Invalid email or password."
      render :login
    end
  end
end

  def logout
    session[:user_id] = null
    redirect_to login_path, notice: "Logged out successfully."
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

  
end
