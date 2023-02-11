import React, { useState, useEffect } from 'react';
import { usePopper } from 'react-popper';

const Popper = (props) => {
  const {
    children = null,
    target = null,
    isOpen = false,
    onClose = null,
    placement = 'bottom',
    outsideClickListener,
  } = props;
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
    placement,
    strategy: 'absolute',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 5],
        },
      },
      {
        name: 'preventOverflow',
        enabled: true,
      },
      {
        name: 'flip',
        enabled: true,
      },
      {
        name: 'computeStyles',
        options: {
          gpuAcceleration: true,
          adaptive: true,
        },
      },
      {
        name: 'hide',
        enabled: true,
      },
    ],
  });

  const popperProps = {
    ref: setPopperElement,
    style: {
      ...styles.popper,
      display: !isOpen && 'none',
      width: '100%',
    },

    ...attributes.popper,
  };

  useEffect(() => {
    const targetNode = target.current;

    if (targetNode) {
      setReferenceElement(targetNode);
    }
  }, [target]);

  useEffect(() => {
    if (popperElement && update) {
      update();
    }
  }, [children, isOpen, popperElement, update]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        popperElement &&
        !popperElement.contains(e.target) &&
        !referenceElement.contains(e.target)
      ) {
        onClose();
      }
    };

    if (isOpen && outsideClickListener) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      if (outsideClickListener) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [popperElement, referenceElement, isOpen, onClose, outsideClickListener]);
  const popperRender = (
    <div {...popperProps} role='tooltip'>
      <div>{children}</div>
    </div>
  );

  return <>{isOpen && popperRender}</>;
};

export default Popper;
