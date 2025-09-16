import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error("Cabins could not be fetched:", error);
    throw new Error("Cabins could not be fetched", error);
  }
  return data;
}

export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from("Cabins")
    .insert([newCabin])
    .select();

  if (error) {
    console.error("Cabins could not be created:", error);
    throw new Error("Cabins could not be created", error);
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("Cabins").delete().eq("id", id);
  if (error) {
    console.error("Cabins could not be deleted:", error);
    throw new Error("Cabins could not be deleted", error);
  }
  return data;
}
