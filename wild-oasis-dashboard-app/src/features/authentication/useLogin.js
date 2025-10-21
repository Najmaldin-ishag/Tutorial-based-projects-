import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as LoginAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => LoginAPI({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user);
      navigate("/");
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("email and password not correct");
    },
  });

  return { login, isPending };
}
