import { supabase } from "@/utils/supabase/supabase"

export const handleSignIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  console.log("SignIN")
  if (error) {
    return error
  } else {
    return data
  }
}