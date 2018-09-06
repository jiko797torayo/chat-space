# README

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|group_name|string|null: false, unique: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :users
- has_many :messages

## userテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false unique: true|
|nickname|string|null: false|
|email|integer|null: false, unique: true|
|password|integer|null: false|
|group_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|

### Association
- has_many :groups
- has_many :messages

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false unique: true|
|body|text|null: false|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|image_id|integer|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :message
- has_many :images

## imageテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false unique: true|
|image|string|null: false|
|message_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :message
