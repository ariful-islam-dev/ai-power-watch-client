import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = (bool) => {
    setIsOpen(bool);
  };

  return { isOpen, handleModal };
};

export default useModal;
