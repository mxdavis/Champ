class AddFactorialToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :factorial, :integer, default: 0
  end
end
