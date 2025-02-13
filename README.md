# 🚀 Next.js + Supabase　
####作成中

## 🌟 プロジェクトの概要

このプロジェクトは、Next.js 15とSupabaseを組み合わせた最低限の機能　”のみ”　何もないです！！
でもできれば楽しそうなの追加したい！目指せ短期爆速開発

## 🛠 技術スタック

- **フロントエンド**: Next.js 15
- **スタイリング**: TailwindCSS
- **認証/データベース**: Supabase
- **フォント**: Geist（next標準）
- **開発環境**: Docker

## 🔥 主な機能

- 🔐 セキュアな認証システム(外注)
- 🎨 ダークモード対応してません
- 🚀 TypeScript極一部対応
- 📱 レスポンシブデザインしません

## 🚀 開発を始める

### リポジトリのクローン

git clone

### 依存関係のインストール

npm install

# 開発サーバーの起動

docker-compose up --build

## 🧪 品質管理

- ESLint + Prettier による自動コード整形
- Husky + lint-staged によるコミット前チェック
- Conventional Commits に準拠したコミットメッセージ
- Jest による単体テスト

## 📝 コーディング規約

### 命名規則
今回なし

#### 変数名
- キャメルケースを使用
- var禁止 any禁止
- 意味のある説明的な名前を使用
- 例： var BananaTabetaina:any = "aho";  ←　禁止

#### 関数名
- キャメルケースを使用
- 動詞で開始
- 関数の目的を明確に表現
- 例： const AHO = () => "Hello AHO"; ←　禁止

## 📝 コミットメッセージのルール

このプロジェクトは Conventional Commits に従っています：
※library追加後

- `feat:` 新機能
- `fix:` バグ修正
- `docs:` ドキュメントのみの変更
- `style:` コードの意味に影響しない変更
- `refactor:` バグ修正や機能追加のないコード変更
- 例：　git add -m ""　←　禁止

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'feat(api): add get userdata'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📜 ライセンス

このプロジェクトはMITライセンスの下で公開されてない

#### 追記
- componentはパスカルケース + アロー関数を使わず export default functionを使う ※next準拠
- キャッシュとレンダリング回りは最低限意識して最適化したい
- 後のエラーとか想定し、動けばいいは避けたい
- のちの個人開発につなげたい！考えるぞ

Made with ❤️ by [Tamazarashi]
