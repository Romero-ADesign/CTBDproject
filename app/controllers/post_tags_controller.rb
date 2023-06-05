class PostTagsController < ApplicationController

    def show
        tag = Tag.find_by(name: params[:tag])
        posts = tag.posts
        render json: posts
    end

    def create
        post_tag = PostTag.new(post_tag_params)
        if post_tag.save
          render json: post_tag, status: :created
        else
          render json: post_tag.errors, status: :unprocessable_entity
        end
      end

      private
    
      def post_tag_params
        params.require(:post_tag).permit(:post_id, :tag_id)
      end
end