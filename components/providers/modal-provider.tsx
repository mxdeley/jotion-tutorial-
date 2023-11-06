"use client";

import { useEffect, useState } from "react";

import SettingsModel from "@/components/models/settings-modal";
import { CoverImageModal } from "@/components/models/cover-image-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModel />
      <CoverImageModal />
    </>
  );
};
