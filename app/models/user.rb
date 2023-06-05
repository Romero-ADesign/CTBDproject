class User < ApplicationRecord
    has_secure_password
    has_many :user_posts, dependent: :destroy
    has_many :posts, through: :user_posts
end
