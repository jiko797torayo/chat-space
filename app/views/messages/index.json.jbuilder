json.array! @new_messages do |message|
  json.id message.id
  json.group_id message.group_id
  json.user_name message.user.name
  json.body message.body
  json.image message.image.to_s
  json.created_at message.created_at.strftime('%Y年%m月%d日 %H:%M')
end
