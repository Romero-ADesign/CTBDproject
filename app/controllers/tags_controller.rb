class TagsController < ApplicationController

    def index
        tag = Tag.all
        render json: tag, status: :ok
    end
    
    def show
        tag = Tag.find(params[:id])
        render json: tag, status: :ok
    end

    def by_tag
        tag = Tag.find_by(name: params[:tag])
        posts = tag.posts
        render json: posts, status: :ok
    end

    private

    def tag_params
     params.permit(:name)
    end

end