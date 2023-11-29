---
title: わたし用メモ Android 初期設定
created_at: 2023-11-08
---
わたし用のメモ  
前の端末から引き継げという話はそれはそう

もう当分買う予定ないけど、、、、

# 設定

- 開発者向けオプションON
    - クイック設定開発者用タイルから、レイアウト境界 を追加
    - USB デバッグ
    - バックグラウンド ANR / クラッシュダイアログを常に出す
- 表示サイズ
- バッテリーのパーセント表示
- Always On Display
- Material You
- テーマアイコン
- ホーム画面のグリット数
- 通知履歴をON
- ジェスチャーナビゲーション
- 電源ボタン長押しを電源メニューに（デフォがGoogle Assistant）
- 片手モードON
- スリープ時間を伸ばす
- 明るさの自動調整はOFF
- リフレッシュレートを 120Hz にする
- Slack / おサイフケータイ / LINE 等はバッテリーの節約の対象外に入れる
- 緊急SOSを使用（電源ボタン連打のやつ） をオフ
- スリープ時間を伸ばす
- モバイルデータのデータ利用サイクルを1日にする（携帯会社のギガ表示と合わない）
- 機内モードをクイック設定の上の方に持ってくる

- Pixel
    - 周辺の歌
    - 伏せるだけサイレントモード
    - クイックタップをスクリーンショットに設定
    - ロック画面のショートカットボタン
    - ホーム画面下のアイコンは全部候補機能のために固定しない

- Xperia
    - サイドセンスをスクリーンショットに割り当て
    - ボリュームキーでもスリーブ解除が出来る設定を有効

# キーボード
- 設定
    - 数字行を ON
    - 長押しで記号表示を ON
- 絵文字切り替えキーを表示は OFF
- 日本語キーボードを開いて、3状態キーボードの利用を OFF
- 自分のメアドがすぐ出せるように辞書登録、エクスポートしてNearbyShareする

# おサイフケータイ (メインなら)
- 通知が来るように設定
    - 通知権限 POST_NOTIFICATIONS が自動で付与されてない（？）ので端末の設定画面から付与する

# カメラ
- アスペクト比を 16:9 にする
- 音量ボタン押したときの挙動をシャッターに割り当てる（ズームとかになってるはず

# Google
- ニアバイシェア？
- ロケーション履歴？
- Google Pay
    - チャージなどの初回支払い時はセキュリティコードを打ち込む必要あり

# ストアから入れるアプリ
- Firefox
    - 拡張機能も
- ショートカット+
    - Android 標準のファイラーをショートカットで呼び出せるように
        - `Files by Google` のことではない
        - パッケージ名 `com.android.documentsui.files.FileActivity`
            - これはプリインストールアプリのファイラーなので、`sdcard/Android/data`が見れる
- System UI Tunner
    - システムUI調整ツールを出し、時計の秒数まで表示するように
- Slack
- Google Authenticator（コードも引き継ぐ）
- GitHub Mobile（ログインに二段階認証が必要？）
- Xplore
- VLC
- Shizuku
- Play Console (リジェクトの時に通知くる)
- Google Keep
- Google 翻訳（文字選択時に翻訳出来るように）
- Yahoo 乗換案内
- Twitter（情報収集用に）
- ポイントカード
    - ラクウル（ソフマップ）
    - dカード？
- Pixel Watch (メインなら)
- LINE (メインなら、引き継ぎに前端末が必要？)
- モバイルSuica (メインなら)
- 三井住友銀行 (メインなら)

# 入れる自作アプリ
自作アプリは apk 作ってないのでビルドする必要あり  
ついでに targetSdk / Kotlin / AGP / Gradle / ライブラリ の更新も必要なら上げておいてくれ

- NewRadioSupporter
- TelephoneyManagerAPI
- OneLock
- MobileStatusWidget

お好みで

- PhoTransfer
- DeveloperHide