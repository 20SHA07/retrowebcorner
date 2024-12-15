import { useCallback } from 'react';
import { playSound } from '../utils/sounds';

export const useRetroSound = () => {
  const playClick = useCallback(() => playSound('click'), []);
  const playError = useCallback(() => playSound('error'), []);
  const playStartup = useCallback(() => playSound('startup'), []);
  const playNotify = useCallback(() => playSound('notify'), []);

  return { playClick, playError, playStartup, playNotify };
};