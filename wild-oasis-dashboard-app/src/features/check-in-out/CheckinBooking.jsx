import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
// import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Checkbox from "../../ui/Checkbox";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckIn } from "./useCheckIn";
import { useSettings } from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

const Button = styled.button`
  width: fit-content;
  border: none;
  color: #fff;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 1.5rem 2.4rem;

  &:first-child {
    background-color: var(--color-brand-500);
  }
  &:last-child {
    background-color: #fff;
    color: #333;
  }
`;

function CheckinBooking() {
  const [confirmed, setConfirmed] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { settings, isLoading: isLoadingSettings } = useSettings();
  const { booking, isLoading } = useBooking();
  const { checkin, isCheckingIn } = useCheckIn();
  const moveBack = useMoveBack();

  useEffect(() => setConfirmed(booking?.isPaid ?? false), [booking]);
  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    Guest,
    totalPrice,
    numGuest,
    hasBreakfast,
    numNights,
  } = booking;

  const breakfastPrice = settings.breakfastPrice * numNights * numGuest;

  function handleCheckin() {
    if (!confirmed) return;

    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: breakfastPrice,
          totalPrice: totalPrice + breakfastPrice,
        },
      });
    } else checkin({ bookingId, breakfast: {} });
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {breakfastPrice && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmed(false);
            }}
            id="breakfast"
          >
            want to add breakfast for ${breakfastPrice}
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox
          checked={confirmed}
          onChange={() => setConfirmed((confirm) => !confirm)}
          id="confirm"
          disabled={confirmed || isCheckingIn}
        >
          I confirm that {Guest.fullName} has paid the total amount{" "}
          {formatCurrency(totalPrice)}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin}>Check in booking #{bookingId}</Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
