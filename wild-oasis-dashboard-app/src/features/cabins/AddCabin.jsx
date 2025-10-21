import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button variation="primary" size="medium">
            Add new cabin
          </Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;

// const AddCabin = () => {
//   const [showOpe`nModal, setShowOpenModal] = useState(false);
//   return (
//     <>
//       <Button
//         sizes="large"
//         variation="primary"
//         onClick={() => setShowOpenModal((show) => !show)}
//       >
//         Add new cabin
//       </Button>
//       {showOpenModal && (
//         <Modal onClose={() => setShowOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setShowOpenModal(false)} />
//         </Modal>
//       )}
//     </>
//   );
// };
