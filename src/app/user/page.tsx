"use client";

export default function UserPage() {
  return (
    <>
      <h1>ここはログインしたものの実参照可能のページです</h1>
      <p>
        こんにちは！{localStorage.getItem("sb-svliiuczqpkmgtcamkcx-auth-token")}
      </p>
    </>
  );
}
