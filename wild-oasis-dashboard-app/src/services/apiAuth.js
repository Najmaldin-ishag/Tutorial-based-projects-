import supabase from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return { data, error };
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  let updateData;

  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  const fileName = `Avatar-${data.user.id}-${Math.random()}`;

  const { error: storageErrors } = await supabase.storage
    .from("Avatars")
    .upload(fileName, avatar);

  if (storageErrors) throw new Error(storageErrors.message);

  const { data: updateUser, error: updateError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `https://vqnkhlidkqdthzpiqijd.supabase.co/storage/v1/object/public/Avatars/${fileName}`,
      },
    });
  if (updateError) throw new Error(updateError.message);

  return updateUser;
}
