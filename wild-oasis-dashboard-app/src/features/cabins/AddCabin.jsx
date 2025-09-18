import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

const AddCabin = () => {
  const [showOpenModal, setShowOpenModal] = useState(false);
  return (
    <>
      <Button
        sizes="large"
        variation="primary"
        onClick={() => setShowOpenModal((show) => !show)}
      >
        Add new cabin
      </Button>
      {showOpenModal && (
        <Modal onClose={() => setShowOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setShowOpenModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default AddCabin;
