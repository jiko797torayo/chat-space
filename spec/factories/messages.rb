FactoryBot.define do
  factory :message do
    body { Faker::Lorem.sentence }
    image { File.open("#{Rails.root}/public/images/dwayne2.png") }
    user
    group
  end
end
