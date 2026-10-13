
import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

export default function App() {
  // TODO：商品を管理する　
  // TODO：ローディングを管理する　loading:true　が　ローディング中
  // TODO：エラーメッセージを管理する　error

  useEffect(() => {
    async function fetchProducts() {
      try {
        // TODO：商品データの取得
        
        // TODO:取得できなかった際のエラーハンドリング
        
        // TODO:JSオブジェクトに変換して状態変数に上書き
      } catch (err) {

        // エラーを状態変数にセットし画面に出力する準備
        setError(err.message);
      } finally {

        // TODO:ローディング完了をセット
      }
    }

    fetchProducts();
  }, []);

  // ローディング中であればローディングを表示
  // ローディングが終わってエラーがあればエラーを表示
  // ローディングが終わってエラーがなければ商品一覧を表示

  return loading ? (
    <div className="status">
      <div className="spinner" />
      <p>読み込み中...</p>
    </div>
  ) : error ? (
    <div className="status status-error">
      <p>{error}</p>
    </div>
  ) : (
    <div className="app">
      <header className="app-header">
        <h1>商品一覧</h1>
        {/* TODO:件数の表示 */}
        <span className="app-count">件</span>
      </header>
      {/* TODO:商品情報を子コンポーネントに渡す */}
      <ProductList />
    </div>
  );
}
