import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error("Cabins could not be fetched:", error);
    throw new Error("Cabins could not be fetched", error);
  }
  return data;
}
