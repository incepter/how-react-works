---
sidebar_position: 1
---

# はじめに

React の内部動作を解説するブログシリーズへようこそ。

## このドキュメントについて

これは React のコードベースを深掘りし、皆さんが何年も使ってきた React がどのように作られているのかを解説するものです。React の使い方を学ぶチュートリアルではなく、内部実装に焦点を当てています。これらの知識がなくても立派な React 開発者になれますが、内部の仕組みを知りたい方のために作成しました。

以下のトピックをカバーする予定です：

- createRoot()の仕組み
- root.render()の仕組み
- work loop の動作
- work tags の役割
- Hooks の実装
- 各 Hook の詳細
- Effect の処理フロー
- scheduler（スケジューラ）の動作
- Suspense のメカニズム
- StrictMode の役割
- 機能フラグの使い方
- バンドリングプロセス
- レンダラーの仕組み
- Dispatcher の役割
- サーバーサイドレンダリング
- RSC（React Server Components）の実装
- Float/Fizz の技術
- その他...

これは継続的なプロジェクトで、新しいコンテンツはニュースレターまたは[Twitter（X）](https://twitter.com/incepterr)で通知されます。

## 目的

React のコードベースは複雑で圧倒されがちですが、このシリーズを通じて主要な概念と重要なコードパスを理解できるようにすることが目標です。

## 対象読者と前提知識

React を数年使った経験がある方、React に貢献したい方、内部実装に興味がある方向けです。以下の概念を理解していることが前提です：

- コンポーネントの種類
- コンポーネントのライフサイクル
- Element と Component の違い
- Effect と Hook
- Commit 処理
- Reconciliation（比較アルゴリズム）
- など

React 学習リソースとして以下を推奨します：

- [React 公式ドキュメント](https://react.dev/)
- [Kent の React コース](https://egghead.io/lessons/react-a-beginners-guide-to-react-introduction)
- [Dan のブログ](https://overreacted.io/)
- [自作 React 実装ガイド](https://pomb.us/build-your-own-react/)

## 解説の進め方

各セクションでは React のコードベースへのリンクや簡略化したコード例を使用します。React の自然な処理順序（createRoot → root.render → レンダリング処理 → Effect...）に沿って解説します。
