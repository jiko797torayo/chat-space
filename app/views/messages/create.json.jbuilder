
json.user_name @message.user.name
json.body @message.body
json.image @message.image
json.group_id @message.group_id
json.user_id @message.user_id
json.created_at @message.created_at.strftime('%Y年%m月%d日 %H:%M')
json.updated_at @message.updated_at
