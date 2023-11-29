# ziyuutyou-next
たくさんの自由帳 Next.js リメイク版

[![Netlify Deploy](https://github.com/takusan23/ziyuutyou-next/actions/workflows/netlify-deploy.yml/badge.svg?branch=main)](https://github.com/takusan23/ziyuutyou-next/actions/workflows/netlify-deploy.yml)

[![AWS Deploy](https://github.com/takusan23/ziyuutyou-next/actions/workflows/aws-deploy.yml/badge.svg?branch=main)](https://github.com/takusan23/ziyuutyou-next/actions/workflows/aws-deploy.yml)

![Imgur](https://imgur.com/ceQ6UID.png)

![Imgur](https://imgur.com/CaZ2lr0.png)

`Next.js` / `Tailwind CSS` / `unified` で出来ている。

## 開発環境構築

### 必要なもの

- Node.js
    - v18.17.0 以降？
    - LTS の最新版を入れておけば良さそう
    - 本番環境へデプロイするならその環境のNode.jsのバージョンも確認してね

### 開発環境の起動まで

- このリポジトリをクローンします
- クローンしたフォルダ内でターミナルを立ち上げます
- 以下を実行します（初回時）
```
npm i
```
- 開発サーバーを立ち上げます
```
npm run dev
```
- (多分) `localhost:3000`をブラウザで開きます
- スマホで確認したい場合は`ローカルIPアドレス:3000`で見れるはず
    - `ipconfig`？`ifconfig`？でIPアドレスの確認ができると思います


### 本番環境でビルドして動作確認をする
本番環境でビルドして開発サーバーを立ち上げます。  
`next/link`のプリフェッチ機能などは本番ビルドしか動かないので

```
npm run build
npm run start
```

### 静的HTML書き出し(意味深)
`サーバーでのレンダリング（Server Side Rendering）`機能は使っていないので、  
全て`静的サイト（Static Site Generation）`として書き出せます。

以下のコマンドを叩くと
- すべてのページのhtml書き出し
- サイトマップ作成
が行われます。

CPU使用率が書き出し中は100%で張り付くけどしゃあない。

```
npm run deploy
```

#### 静的書き出し先

`out`フォルダに成果物が入っています。  
このフォルダを公開すればいいと思います。

## 環境変数
`.env`ファイルに公開先の URL などの値を入れています。  
`EnvironmentTool.ts`から値を参照できるようにしています。  

| 名前                              | 説明                                                                                                                  |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| NEXT_PUBLIC_SITE_BASE_URL         | WebサイトのURLのドメインまで。`https://takusan.negitoro.dev/`みたいな。                                               |
| NEXT_PUBLIC_SITE_NAME             | サイト名です。`<title>`タグとかで使われます。                                                                         |
| NEXT_PUBLIC_GITHUB_REPOSITORY_URL | `GitHub`のリポジトリです。記事本文ページの`GitHubで開く`で使われます。                                                |
| NEXT_PUBLIC_UA_TRACKING_ID        | `Google アナリティクス`の`ユニバーサルアナリティクス`の`測定ID`です。                                                 |
| NEXT_PUBLIC_GA_TRACKING_ID        | `Google アナリティクス`の`GA4`の`測定ID`です。                                                                        |
| NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE | `Google Search Console`の所有権確認のために、`HTML タグ`の`content`の値を入れてください。任意なので無くても動くはず。 |

## GitHub Actions
`Netlify （ビルドは GitHub Actions でやってホスティングは Netlify）`と`Amazon S3 + Amazon CloudFront`の2種類があります。  
`Netlify`の`ビルド機能`はなんかこのリポジトリだと動かなくなったので、`GitHub Actions`書きました。  

もし使わない場合は`Actions`の画面で無効にしたいワークフローを押して、`Disable workflow`を押すことで無効にできます。  

![Imgur](https://imgur.com/Jm1V17f.png)

### Netlify で公開する
必要なシークレットはこの2つです

| 名前               | 値                                                                            |
|--------------------|-------------------------------------------------------------------------------|
| NETLIFY_AUTH_TOKEN | `Netlify のアカウント画面` >  `Applications` > `New access token`から生成する |
| NETLIFY_SITE_ID    | `Netlify のサイト詳細画面` > `Site configuration` > `Site ID` をコピー        |

![Imgur](https://imgur.com/4EeM4q4.png)

詳しくは昔書いたのでそっち見てください：  
https://takusan.negitoro.dev/posts/github_actions_netlify/

### Amazon S3 + Amazon CloudFront で公開する
必要なシークレットはこの4つです。  
`OpenID Connect`を使う方法で認証するのでちょっとややこしいです。（アクセスキー使うように直してもいいんじゃない？）

| 名前                        | 値                                                    |
|-----------------------------|-------------------------------------------------------|
| AWS_CLOUDFRONT_DISTRIBUTION | `Amazon CloudFront`のディストリビューションの`ID`です |
| AWS_REGION                  | リージョン、多分東京でいいはず？ `ap-northeast-1`     |
| AWS_ROLE                    | `IAM ロール`の`ARN`の値です                           |
| AWS_S3_BACKET               | ビルド成果物を保存する`S3 バケット`の名前です         |

![Imgur](https://imgur.com/nAFBOTS.png)

詳しくは書いたので見てください：  
https://takusan.negitoro.dev/posts/aws_sitatic_site_hosting/

## ファイル構造

- .github/workflows
    - GitHub Actions にやらせる作業を書いたファイルです
    - GitHubのWeb上で編集することをおすすめします
- app
    - 画面遷移等のページ
    - AndroidのFragmentみたいな
- content
    - 記事のMarkdown とか 書き出し時に呼び出すJSONとか
- components
    - 共通して使うコンポーネント
- public
    - アイコン等のリソース
- src
    - components でも app でもないTypeScriptファイルの置き場所
    - 記事読み込みクラスとか
- styles/css
    - Tailwind CSS でちょっと書いた、記事本文とか
- .env
    - 環境変数。サイトのURL など