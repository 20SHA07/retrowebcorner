// Collection of retro sound effects
export const playSound = (soundName: 'click' | 'error' | 'startup' | 'notify') => {
  const sounds = {
    click: 'https://www.myinstants.com/media/sounds/click.mp3',
    error: 'https://www.myinstants.com/media/sounds/error.mp3',
    startup: 'https://www.myinstants.com/media/sounds/windows-95-startup.mp3',
    notify: 'https://www.myinstants.com/media/sounds/notify.mp3'
  };

  const audio = new Audio(sounds[soundName]);
  audio.volume = 0.3;
  audio.play().catch(() => {
    // Silently fail if audio can't play
  });
};