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

    it 'new post factorial defaulted to 0' do
      post = build(:post)
      expect(post.factorial).to equal(0)
    end

    it 'creates a new factorial on save' do
      post = build(:post)
      post.save
      expect([1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800]).to include(post.factorial)
    end

    it 'creates a new factorial on update' do
      post = build(:post)
      post.save
      save_factorial = post.factorial
      post.update(title: "this is an updated title")
      updated_factorial = post.factorial
      expect([1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800]).to include(post.factorial)
      expect(save_factorial).not_to eq(updated_factorial)
    end
  end

  describe 'methods' do
    it 'generate_factorial generates a factorial number from a sample between 1 and 10' do
      post = build(:post)
      expect([1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800]).to include(post.generate_factorial)
    end
  end
end
