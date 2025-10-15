"use server";
import { auth } from "@/app/_lib/auth";
import { signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to update your profile");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updateData = { nationality, countryFlag, nationalID };

  const { error } = await supabase
    .from("Guest")
    .update(updateData)
    .eq("id", session.user.guestId);

  revalidatePath("/account/profile");
  if (error) throw new Error("Guest could not be updated");
}
export async function signInActions() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
