## Application name
chat-space

## Overview
複数人でチャットができるアプリです。
<br>制作期間は20日間です。
<br><br>実装した主な機能は、以下の機能です。（ユーザー登録機能以外は非同期通信で実装しました。）
- ユーザー登録機能
- 複数人によるグループチャット機能
- チャット相手の検索機能
- 画像送信機能
- チャットの自動更新機能

## Development environment
* ruby  2.3.1
* rails 5.0.7

## Test environment
* RSpec 3.8.0

## Production environment
※現在は本番環境から削除しています。
* Linux server<br>　EC2 ( AWS )
* Web server<br>　nginx 1.12.1
* Application server<br>　unicorn v5.4.1

## Database
* mysql2 0.3.21
* S3(AWS) ※画像のみ

