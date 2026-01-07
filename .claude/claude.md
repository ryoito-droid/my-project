# Miyabi プロジェクトガイド

## プロジェクト概要

Miyabiは一つのコマンドで全てが完結する自律型開発フレームワークです。

## 主な機能

- プロジェクト初期化とセットアップ
- 自律型エージェントによる開発支援
- TODOコメント自動検出とIssue化
- ドキュメント自動生成
- GitHub認証管理
- Water Spider Agent（全自動モード）

## ディレクトリ構造

```
miyabi_0.15/
├── .claude/           # Claude Code設定
├── src/              # ソースコード
├── tests/            # テストファイル
└── docs/             # ドキュメント
```

## 開発ガイドライン

### コーディング規約

- TypeScript/JavaScriptを使用
- ESLint/Prettierに従う
- 明確なコメントを記述
- テストを書く

### コミットメッセージ

Conventional Commitsに従う:
- `feat:` 新機能
- `fix:` バグ修正
- `docs:` ドキュメント
- `refactor:` リファクタリング
- `test:` テスト追加・修正

## よく使うコマンド

```bash
# プロジェクト初期化
npx miyabi init <project-name>

# プロジェクトステータス確認
npx miyabi status

# TODOをIssue化
npx miyabi todos

# エージェント実行
npx miyabi agent

# 全自動モード
npx miyabi auto

# システムヘルスチェック
npx miyabi doctor
```

## 注意事項

- 本番環境へのデプロイ前に必ずテストを実行
- セキュリティ脆弱性に注意
- 認証情報は適切に管理
