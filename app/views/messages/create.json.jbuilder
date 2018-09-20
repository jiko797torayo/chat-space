json.user_name @message.user.name
json.body @message.body
json.image @message.image.to_s
json.created_at @message.created_at.strftime('%Y年%m月%d日 %H:%M')
