class CreatePost < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :post_name
      t.string :post_description
      t.string :image
      t.integer :difficulty

      t.timestamps
    end
  end
end
