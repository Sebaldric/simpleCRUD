// app/user/layout.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/supabase";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    async () => {
      const {
        data: { subscription },
      } = await supabase.auth.onAuthStateChange((event, session) => {
        if (!session) {
          router.push("/login");
        }
      });
      return () => subscription.unsubscribe();
    };
  }, [router, supabase]);

  return <>{children}</>;
}
