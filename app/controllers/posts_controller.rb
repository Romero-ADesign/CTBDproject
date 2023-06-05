class PostsController < ApplicationController

    def index
        post = Post.all
        render json: post, status: :ok
    end

    def create
        user = User.find(params[:id])
        post= user.posts.create(post_params)
        render json: post, status: :created
    end

    def destroy
        post = Post.find(params[:id])
        user_post = current_user.user_posts.find_by(post_id: post.id)
        user_post.destroy if user_post
        
        post.post_tags.destroy_all
        post.destroy
        render json: { message: "User post deleted successfully"}
      end

    def update
        post = Post.find(params[:id])
        post.update(post_params)
        render json: post, status: :created
    end

    def by_tag
        tag = Tag.find(params[:id])
        posts = tag.posts
        render json: posts, status: :ok
    end

    private

    def post_params
        params.require(:post).permit(:id, :post_name, :post_description, :image, :difficulty, tags: [])
    end
end