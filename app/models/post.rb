class Post < ApplicationRecord
  before_save :generate_factorial

  def generate_factorial
    i = rand(1..10)

    while (self.factorial == (1..i).reduce(:*))
      i = rand(1..10)
    end

    self.factorial = (1..i).reduce(:*)
  end
end
