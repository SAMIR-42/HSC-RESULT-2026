const video = document.getElementById("funVideo");

window.addEventListener("load", () => {

  const soundAllowed = sessionStorage.getItem("soundAllowed");

  if(soundAllowed){
    video.muted = false;
    video.volume = 0.8;
  } else {
    video.muted = true;
  }

  const playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // fallback
      document.body.addEventListener("click", () => {
        video.muted = false;
        video.volume = 0.8;
        video.play();
      });
    });
  }
});