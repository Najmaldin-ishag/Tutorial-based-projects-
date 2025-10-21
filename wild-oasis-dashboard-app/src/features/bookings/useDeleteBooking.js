import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
// import { deleteCabin } from "../../services/apiCabins";
import { deleteBooking } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isLoading: isDeletingBooking, mutate: deleteBookingFN } = useMutation(
    {
      mutationFn: deleteBooking,
      onSuccess: () => {
        toast.success("Booking deleted!");
        queryClient.invalidateQueries({ queryKey: ["bookings"] });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    }
  );

  return { isDeletingBooking, deleteBookingFN };
}
