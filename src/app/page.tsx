import AuthForms from "@/components/form/AuthForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>始めまして世界</h1>
      <Link href="/login">ログインフォームへ遷移する</Link>
    </div>
  );
}
