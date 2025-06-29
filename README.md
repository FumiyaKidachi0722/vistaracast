# VistaraCast

VistaraCast は Next.js 15 + TypeScript で構築した、無料枠で動く動画配信／ライブ配信プラットフォームです。  
UI コンポーネントには **shadcn/ui** を利用し、バックエンドに Livepeer Studio（Free Sandbox）、データベースと認証に Firebase（Firestore + Auth + Storage）を組み合わせています。

---

## 🚀 デザイン方針

### 1. クリーンアーキテクチャ

システムを **Domain / Application / Infrastructure / Presentation** の４層に分割し、責務を明確化します。

- **Domain**: ビジネスルール（Entity / Value Object）
- **Application**: ユースケース（DTO + サービス実装）
- **Infrastructure**: 外部リソース（Firestore・Livepeer SDK…）
- **Presentation**: Next.js／React コンポーネント（Controller／ページ）

### 2. Atomic Design + shadcn/ui

UI は **Atoms / Molecules / Organisms / Templates / Pages** の階層で構成し、shadcn/ui のビルディングブロック (Radix + Tailwind) を活用します。

- **Atoms**: Button, Input, Card など → `src/presentation/components/ui` 以下
- **Molecules**: UploadFormField, VideoThumbnail など
- **Organisms**: VideoCardList, Header など
- **Templates**: MainLayout など
- **Pages**: UploadPage, VideoDetailPage など

---

## 📁 プロジェクト構成

```

vistaracast/
├── README.md
├── .env.local
├── next.config.js
├── tailwind.config.js
├── package.json
│
├── app/ # Next.js App Router
│ ├── api/
│ │ ├── upload/route.ts # 動画メタデータ → Livepeer アセット生成
│ │ └── webhooks/livepeer/route.ts # Livepeer Webhook → Firestore 更新
│ ├── (protected)/upload/page.tsx
│ ├── video/\[id]/page.tsx
│ └── page.tsx
│
├── src/ # ソースコード全体（パスエイリアス '@/…'）
│ ├── domain/ # ビジネスルール層
│ ├── application/ # ユースケース層
│ ├── infrastructure/ # 外部連携層
│ └── presentation/ # UI 層
│ ├── components/
│ │ ├── ui/ # ← shadcn/ui で生成・拡張するコンポーネント
│ │ ├── atoms/
│ │ ├── molecules/
│ │ ├── organisms/
│ │ └── templates/
│ ├── hooks/
│ └── styles/
│
└── public/ # 静的ファイル

```

---

## 🛠️ Tech Stack

| レイヤ            | 技術・サービス                                                                      |
| ----------------- | ----------------------------------------------------------------------------------- |
| フロントエンド    | Next.js 15 (App Router, React 19, Server Actions) <br> TypeScript <br> Tailwind CSS |
| UI コンポーネント | [shadcn/ui](https://ui.shadcn.com) (Radix + Tailwind)                               |
| 動画配信          | Livepeer Studio “Free Sandbox” <br> `@livepeer/react`                               |
| 認証・DB          | Firebase Auth <br> Firestore                                                        |
| ストレージ        | Firebase Storage                                                                    |
| デプロイ          | Vercel Hobby                                                                        |

---

## 🔧 環境構築

### 前提条件

- Node.js ≥ 18
- npm
- Git

### リポジトリをクローン & 依存インストール

```bash
git clone https://github.com/your-org/vistaracast.git
cd vistaracast
npm install
```

### 環境変数設定

プロジェクトルートに `.env.local` を作成し、以下を設定：

```bash
# Livepeer API
LIVEPEER_API_KEY=your_livepeer_api_key

# Firebase Admin SDK（JSONを一行で）
FIREBASE_SERVICE_ACCOUNT_JSON='{"type": "...", ...}'

# Firebase Client SDK
NEXT_PUBLIC_FIREBASE_CONFIG='{"apiKey":"...", ...}'
```

---

## ⚙️ 開発 & デプロイ

```bash
# ローカル開発サーバー起動
npm dev

# ビルド
npm build

# 本番起動
npm start
```

Vercel 連携時は、同じ環境変数を Vercel ダッシュボードに登録してください。

---

## ✅ 検証ポイント

1. `src/presentation/components/ui` 以下に shadcn/ui のコンポーネントが正しく生成・読み込まれている
2. Atomic Design 層（atoms → molecules → organisms → templates → pages）が守られている
3. Business ロジック層（Domain / Application / Infrastructure）が Presentation 層に依存せず独立している
4. Firebase / Livepeer の無料枠利用状況をダッシュボードで定期チェック
5. Middleware での認証保護が正常に機能している
