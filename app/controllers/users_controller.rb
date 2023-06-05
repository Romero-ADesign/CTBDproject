class UsersController < ApplicationController

    def current_user_info
        if current_user
            render json: {
                name: current_user.username,
                profile_picture_url: current_user.profile_picture,
                id: current_user.id,
                projects: current_user
        }
        else
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

    def create
        
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json:user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
end