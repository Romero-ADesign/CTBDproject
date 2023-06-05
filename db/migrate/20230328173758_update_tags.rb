class UpdateTags < ActiveRecord::Migration[7.0]
  def change
    change_column :tags, :post_id, :integer, null: true
  end
end
