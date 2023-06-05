class CreateUserPost < ActiveRecord::Migration[7.0]
  def change
    create_table :user_posts do |t|
      t.references :user, null: false, foreign_key: {on_delete: :cascade}
      t.references :post, null: false, foreign_key: {on_delete: :cascade}

      t.timestamps
    end
  end
end
