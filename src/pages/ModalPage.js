import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const actionBar = (
    <div>
      <Button onClick={onClose} primary>
        Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={onClose} actionBar={actionBar}>
      <p>Here is the agreement</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      {isOpen && modal}
    </div>
  );
};

export default ModalPage;
