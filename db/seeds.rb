require 'faker'

5.times do
  Post.create(
    title: Faker::Lorem.sentence,
    body: Faker::Lorem.paragraph(3),
    published: [true, false].sample
  )
end
