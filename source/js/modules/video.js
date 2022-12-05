const initVideo = () => {
  const videoElement = document.querySelector('.about__video > video');
  const playButton = document.querySelector('.about__video-button');

  if (videoElement && playButton) {
    playButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      videoElement.play();
      playButton.classList.add('is-hidden');
    });

    videoElement.addEventListener('click', () => {
      videoElement.pause();
      playButton.classList.remove('is-hidden');
    });
  }
};

export {initVideo};
