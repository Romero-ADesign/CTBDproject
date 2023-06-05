class Post < ApplicationRecord
    after_destroy :destroy_user_posts
    has_many :user_posts, dependent: :destroy
    has_many :users, through: :user_posts

    has_many :post_tags
    has_many :tags, through: :post_tags

    validates :image, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp, message: "must be a valid URL" }

    private

    def destroy_user_posts
        self.user_posts.destroy_all
    end
end
