# README

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, add_index|
### Association
- has_many :users, through: :group_users
- has_many :groups_users
- has_many :messages

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|references :group, foreign_key: true|
|user_id|integer|references :user, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, add_index|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||
|group_id|integer|references :group, foreign_key: true|
|user_id|integer|references :user, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
