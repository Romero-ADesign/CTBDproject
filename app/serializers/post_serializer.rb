class PostSerializer < ActiveModel::Serializer
    attributes :id, :post_name, :post_description, :image, :difficulty

end