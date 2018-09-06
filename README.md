# README

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|group|string|null: false, unique: true, add_index|
### Association
- has_many :users, through: :group_users
- has_many :group_users
- has_many :messages

## group_userテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|group_id|integer|null: false, references :group, foreign_key: true|
|user_id|integer|null: false, references :user, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## userテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false unique: true|
|nickname|string|null: false, add_index|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :groups, through: :group_users
- has_many :messages

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false unique: true|
|body|text|null: false, add_index|
|image|string||
|group_id|integer|null: false, references :group, foreign_key: true|
|user_id|integer|null: false, references :user, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :message
