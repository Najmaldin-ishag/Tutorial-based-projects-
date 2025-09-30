import { useMutation } from "@tanstack/react-query";
import { signup as signUpAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signUpAPI,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created!, please verify the new account from the user email address"
      );
    },
  });

  return { signup, isPending };
}
