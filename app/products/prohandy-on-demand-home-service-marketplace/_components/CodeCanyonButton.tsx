'use client';

import { useState } from 'react';
import { CODECANYON_URL } from './constants';
import BundleUpsellModal from './BundleUpsellModal';

interface Props {
  className?: string;
  children: React.ReactNode;
}

function isInIframe(): boolean {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

export default function CodeCanyonButton({ className, children }: Props) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (isInIframe()) return;
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <a
        href={CODECANYON_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>

      {showModal && <BundleUpsellModal onClose={() => setShowModal(false)} />}
    </>
  );
}
