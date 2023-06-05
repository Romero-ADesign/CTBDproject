class UserPostsController < ApplicationController

    def index
        user_posts = current_user.user_posts.includes(:post)
        render json: user_posts.map { |up| up.post }, status: :ok
    end

    def show
        user = User.find(params[:user_id])
        post = user.posts.find(params[:id])
        render json: post, status: :ok
    end


end