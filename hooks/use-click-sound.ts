"use client";

import { useSound } from "@/hooks/use-sound";
import { clickSoftSound } from "@/lib/sound/click-soft";

export function useClickSound() {
  return useSound(clickSoftSound, { volume: 0.3 });
}
