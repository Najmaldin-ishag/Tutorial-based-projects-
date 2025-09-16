import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error("Cabins could not be fetched:", error);
    throw new Error("Cabins could not be fetched", error);
  }
  return data;
}

/**
 * Creates a new cabin entry in the "Cabins" table of the database.
 *
 * This function generates a unique image name for the cabin's image, constructs its public URL,
 * and inserts the provided cabin data into the database using Supabase. If the insertion fails,
 * it logs the error and throws an exception.
 *
 * @async
 * @param {Object} newCabin - The new cabin data to be inserted, including an image file object.
 * @returns {Promise<Object[]>} The inserted cabin data returned from the database.
 * @throws {Error} If the cabin could not be created in the database.
 *
 * The function is designed this way to ensure that each cabin image has a unique name (to avoid
 * filename collisions in storage) and to handle errors gracefully by logging and throwing them.
 */
export async function createCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imageUrl = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // create/edit cabin
  let query = supabase.from("Cabins");
  // 1- Create
  if (!id) query = query.insert([{ ...newCabin, image: imageUrl }]);

  // 2- Edit
  if (id)
    query = query
      .update({ ...newCabin, image: imageUrl })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();
  if (error) {
    console.error("Cabins could not be created:", error);
    throw new Error("Cabins could not be created", error);
  }

  // upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    console.error(storageError);
    await supabase.from("Cabins").delete().eq("id", data.id);
    throw new Error(
      "Image could not be uploaded and the cabin was not created",
      storageError
    );
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
