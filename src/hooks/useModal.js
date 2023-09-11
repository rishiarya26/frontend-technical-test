import { useState } from 'react';

const useModal = () => {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const close = () => setVisible(false);

  return { visible, show, close };
};

export default useModal;
