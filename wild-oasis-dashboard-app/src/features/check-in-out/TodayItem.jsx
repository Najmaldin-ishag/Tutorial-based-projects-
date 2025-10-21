import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";
import { Link } from "react-router-dom";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const GuestDetails = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, Guest, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}

      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={Guest.countryFlag} alt={`Flag of ${Guest.country}`} />
      <GuestDetails>{Guest.fullName}</GuestDetails>
      <div>{numNights} nights</div>

      {status === "unconfirmed" && (
        <Button
          style={{ textAlign: "center", padding: "1rem .5rem" }}
          variation="primary"
          size="small"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && (
        <CheckoutButton bookingId={id}>Check out</CheckoutButton>
      )}
    </StyledTodayItem>
  );
}

export default TodayItem;
