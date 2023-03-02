import React, { EffectCallback } from "react";

export function useEffectOnce(effect: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(effect, []);
}
