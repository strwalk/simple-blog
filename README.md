# Simple Blog

シンプルなブログサイト

## Getting Started

1. GitHub リポジトリのクローン

   ```sh
   git clone git@github.com:strwalk/simple-blog.git
   ```

2. プロジェクト内への移動

   ```sh
   cd simple-blog
   ```

3. 依存関係のインストール

   ```sh
   yarn
   ```

4. Hygraph の設定

- [Hygraph](https://hygraph.com/)にログイン／サインアップし、新規プロジェクトを作成
- 作成したプロジェクトを選択
- Models の作成

  - Scheme > 「+Add」ボタンをクリックし、下記の設定で作成

    | Model 名 | Display name | API ID  | Plural API ID |
    | -------- | ------------ | ------- | ------------- |
    | Article  | Article      | Article | Articles      |

- Fields の作成

  - Scheme > Article を選択 > Add Fields からフィールドを作成

    | Model 名 | Fields           | Display name | API ID   | Make field required にチェック |
    | -------- | ---------------- | ------------ | -------- | ------------------------------ |
    | Article  | Single Line Text | Title        | title    | あり                           |
    |          | Rich text        | Contents     | contents |                                |

- Contents の作成
  - Article
    - Contents > Article > 「+ Add entry」をクリック
    - Title、Contents を任意の内容で入力
    - 「Save」ボタンをクリック
    - 任意の回数繰り返す
- Permanent Auth Tokens の作成

  - Project Settings > API Access > Permanent Auth Tokens > 「+ Add token」をクリック
  - 任意の名前で Token name を設定
  - Content API > 「+ Add permission」をクリック
  - 下記の設定で各種作成

    | Model   | Rules |
    | ------- | ----- |
    | Article | Read  |

5. `.env`ファイルの設定

- プロジェクト直下に`.env.local`を作成

  ```sh
  touch .env.local
  ```

- `.env`に下記を追加

  ```sh
  HYGRAPH_ENDPOINT=XXXXX
  HYGRAPH_PERMANENT_AUTH_TOKEN=XXXXX
  ```

  - `HYGRAPH_ENDPOINT`の値は、Hygraph の管理画面から、プロジェクト選択 > Project settings > API Access > Endpoints > Content API で取得可能
  - `HYGRAPH_PERMANENT_AUTH_TOKEN`の値は、Hygraph の管理画面から、プロジェクト選択 > Project settings > API Access > Permanent Auth Tokens > EXISTING TOKENS > Value をクリックで取得可能

6. プロジェクトの起動

   ```sh
   yarn dev
   ```

7. ブラウザで確認

- [http://localhost:3000](http://localhost:3000) を開く

## Storybook

```sh
yarn storybook
```

上記コマンドを実行後、[http://localhost:6006/](http://localhost:6006/) にアクセスでStorybookの確認が可能

## Playwright

```sh
yarn test
```

上記コマンドで、Playwrightを使用したE2Eテストが実行される

### Github Actionsの設定

1. GitHubリポジトリのメインページに移動
2. Settings > Security > Secrets and variables > Actions を選択
3. Secrets > New repository secret を選択
4. Name, secretに環境変数を入力し、Add secretを押下（対象は下記2種類）
   - HYGRAPH_ENDPOINT
   - HYGRAPH_PERMANENT_AUTH_TOKEN

## Built With

- [Next.js](https://nextjs.org/) - The React Framework for the Web
- [React](https://react.dev/) - The library for web and native user interfaces
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types
- [Node.js](https://nodejs.org/en) - Node.js® is an open-source, cross-platform JavaScript runtime environment
- [tailwindcss](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML
- [Storybook](https://storybook.js.org/) - Storybook is a frontend workshop for building UI components and pages in isolation
- [Playwright](https://playwright.dev/) - Fast and reliable end-to-end testing for modern web apps
- [Hygraph](https://hygraph.com/) - Hygraph is the next generation GraphQL-Native Federated Content Platform. Integrate all your services with our unique content federation approach and deliver to any destination of choice using our content APIs
- [Vercel](https://vercel.com/) - Vercel's Frontend Cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web

## Author

strwalk - https://github.com/strwalk
