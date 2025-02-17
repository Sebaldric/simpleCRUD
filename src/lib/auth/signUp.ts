import { supabase } from "@/utils/supabase/supabase"

export const handleSignUp = async (email: string, password: string) => {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  })
  console.log("signUP")
  if (error) {
    return error
  } else {
    console.log("aiuoe")
    return data
  }
}