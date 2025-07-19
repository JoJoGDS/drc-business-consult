'use server';

import { createClient } from "@/lib/supabase/server";
import { redirect } from 'next/navigation';

export async function updateStatus(formData: FormData) {
  const id = formData.get("id") as string;
  const status = formData.get("status") as string;
  const supabase = createClient();
  await supabase.from("reservations").update({ status }).eq("id", id);
}

export async function logout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
