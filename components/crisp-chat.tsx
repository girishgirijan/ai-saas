"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6c1add74-bcd5-4bbf-8336-b94439aadf95");
  }, []);
  return null;
};
