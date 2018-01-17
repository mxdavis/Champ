require 'rails_helper'

RSpec.describe Post, type: :model do

  describe 'validations' do

    it 'post can be created' do
      post = build(:post)
      expect(post.valid?).to equal(true)
      expect(post.title).to match("This is an awesome title!")
      expect(post.body).to match("This is an awesome paragraph body")
      expect(post.published).to equal(true)
    end
  end
end
