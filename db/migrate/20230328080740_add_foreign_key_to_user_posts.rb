class AddForeignKeyToUserPosts < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :user_posts, :users, on_delete: :cascade
    add_foreign_key :user_posts, :posts, on_delete: :cascade
  end
end