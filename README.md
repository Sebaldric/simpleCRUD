## 🌟 プロジェクトの概要
#### ※2/14作成途中

Next.js 15とSupabaseを組み合わせて何かつくる

## 🛠 技術スタック

- **フロントエンド**: Next.js 15
- **スタイリング**: TailwindCSS
- **認証/データベース**: Supabase
- **デプロイサーバ**: 未選定
- **フォント**: Geist（next標準）
- **開発環境**: Docker

## 🔥 主な機能

- 🔐 ログイン、ログアウト
- 🎨 セッション管理
- 🚀 わからん　※追加予定
- 🚀 わからん　※追加予定
- 📱 レスポンシブデザイン後々


## 🧪 品質管理

- ESLint + Prettier による自動コード整形
- Husky + lint-staged によるコミット前チェック
- Conventional Commits に準拠したコミットメッセージ
- Jest によるテスト

## 📝 コーディング規約

### 命名規則
個人のため今回なし
統一性は持たせる

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
- 例：　git add -m "禁止"　←　禁止

#### 追記
- componentはパスカルケース + アロー関数を使わず export default functionを使う ※next準拠
- キャッシュとレンダリング回りは最低限意識して最適化したい
- 後のエラーとか想定し、動けばいいは避けたい
- のちの個人開発につなげたい！考えるぞ

Made with ❤️ by [Tamazarashi]
