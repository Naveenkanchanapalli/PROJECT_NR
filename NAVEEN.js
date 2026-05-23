const messageBox = document.getElementById("messageBox");
const apologyBtn = document.getElementById("apologyBtn");
const resetBtn = document.getElementById("resetBtn");
const acceptBtn = document.getElementById("acceptBtn");
const partnerName = document.getElementById("partnerName");
const celebrate = document.getElementById("celebrate");
const celebrateImg = document.getElementById("celebrateImg");
const celebrateMsg = document.getElementById("celebrateMsg");

// Code modal elements
const codeModal = document.getElementById("codeModal");
const codeInput = document.getElementById("codeInput");
const codeSubmitBtn = document.getElementById("codeSubmitBtn");
const codeCloseBtn = document.getElementById("codeCloseBtn");
const codeError = document.getElementById("codeError");

// Apology display elements
const apologyDisplay = document.getElementById("apologyDisplay");
const apologyContent = document.getElementById("apologyContent");
const bgmAudio = document.getElementById("bgmAudio");
const pinkDisplay = document.getElementById("pinkDisplay");
const apologyVideo = document.getElementById("apologyVideo");
const videoText = document.getElementById("videoText");
const pinkCloseBtn = document.getElementById("pinkCloseBtn");
const videoFileInput = document.getElementById('videoFileInput');
const videoStatus = document.getElementById('videoStatus');
const errorModal = document.getElementById("errorModal");
const errorCloseBtn = document.getElementById("errorCloseBtn");
const errorSubtitle = errorModal?.querySelector(".error-subtitle");

// Personal code
const PERSONAL_CODE = "RUVEEN";
const AUDIO_PATH = "Preminche premava BGM.mp3";
// If the file is placed in the project folder, use the relative filename so the browser can serve it
const NEXT_VIDEO_PATH = "./WhatsApp Video 2026-05-23 at 3.36.20 PM.mp4";

function getPartnerName() {
  const name = partnerName.value.trim();
  return name ? name : "my love";
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function animateMessage(lines) {
  messageBox.innerHTML = "";
  messageBox.classList.add("pop");

  for (const line of lines) {
    const p = document.createElement("p");
    p.textContent = line;
    messageBox.appendChild(p);
    await wait(260);
  }

  setTimeout(() => messageBox.classList.remove("pop"), 400);
}

function showApologyModal() {
  codeModal.style.display = "flex";
  codeInput.value = "";
  codeError.textContent = "";
  codeError.classList.remove("show");
  codeInput.focus();
}

function hideCodeModal() {
  codeModal.style.display = "none";
  codeInput.value = "";
  codeError.textContent = "";
  codeError.classList.remove("show");
}

function showErrorModal(message = "you are not allowed") {
  if (!errorModal) return;
  if (errorSubtitle) {
    errorSubtitle.textContent = message;
  }
  errorModal.style.display = "flex";
}

function hideErrorModal() {
  if (!errorModal) return;
  errorModal.style.display = "none";
}

if (errorCloseBtn) {
  errorCloseBtn.addEventListener("click", hideErrorModal);
}

if (errorModal) {
  errorModal.addEventListener("click", (event) => {
    if (event.target === errorModal) {
      hideErrorModal();
    }
  });
}

function displayApologyContent() {
  const name = getPartnerName();
  const apologyContent_html = `
    <div style="padding: 2rem 0;">
      <h2 style="font-size: 1.8rem; color: #8b0000; margin-bottom: 1.5rem; text-align: center;">A Sincere Apology</h2>
      <p><strong>Dear My love,</strong></p>
      <p>I am so sorry for my words that I spoken yesterday. I never want to make you hurt you but it happen like that sorry my. Just na version chepe process lo nenu matladedi rude ga ardham ayindi neku any way honestly iam so sorry chinthali please do smile.</p>
      <p>luv uhh and ,</p>
      <p style="text-align: center; margin-top: 2rem;"><strong>please do Accept my Apology.</strong></p>
      <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
        <button id="nextBtn" style="padding: 1rem 2.5rem; background: linear-gradient(135deg, #41b17b 0%, #1f9f56 100%); color: white; border: none; border-radius: 999px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;">ACCEPTED</button>
        <button id="notAcceptedBtn" style="padding: 1rem 2.5rem; background: #ffffff; color: #8b0000; border: 2px solid #8b0000; border-radius: 999px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease; position: relative;">Not Accepted</button>
      </div>
      <div id="notAcceptedMessage" style="margin-top: 1.5rem; text-align: center; font-weight: 700; color: #8b0000;"></div>
    </div>
  `;
  apologyContent.innerHTML = apologyContent_html;
  apologyDisplay.style.display = "block";
  // hide the main left content/card when apology overlay is shown
  const mainContainer = document.querySelector('.container');
  if (mainContainer) mainContainer.style.display = 'none';
  // Add event listener to Accepted button
  const nextBtn = document.getElementById("nextBtn");
  nextBtn.addEventListener("click", () => {
    const lines = [
      'NOV 27...',
      'DEC 18.......',
      'JAN 03 2025 5.AM TO 5. 30 AM B/w ................',
      '05052026.....................................................................................................'
    ];
    showPinkDisplay(NEXT_VIDEO_PATH, lines);
  });
  nextBtn.addEventListener("mouseover", () => {
    nextBtn.style.transform = "translateY(-2px)";
    nextBtn.style.boxShadow = "0 14px 40px rgba(67, 173, 116, 0.24)";
  });
  nextBtn.addEventListener("mouseout", () => {
    nextBtn.style.transform = "translateY(0)";
    nextBtn.style.boxShadow = "none";
  });
  const notAcceptedBtn = document.getElementById("notAcceptedBtn");
  const notAcceptedMessage = document.getElementById("notAcceptedMessage");
  let escapeCount = 0;
  notAcceptedBtn.addEventListener("mouseenter", () => {
    if (escapeCount < 3) {
      const offsetX = (Math.random() > 0.5 ? 1 : -1) * (80 + Math.random() * 40);
      const offsetY = (Math.random() > 0.5 ? 1 : -1) * (10 + Math.random() * 20);
      notAcceptedBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      notAcceptedBtn.style.boxShadow = "0 14px 40px rgba(139, 0, 0, 0.18)";
      escapeCount += 1;
    } else {
      notAcceptedBtn.style.transform = "translate(0, 0)";
      notAcceptedBtn.style.boxShadow = "none";
    }
  });
  notAcceptedBtn.addEventListener("mouseleave", () => {
    if (escapeCount < 3) {
      setTimeout(() => {
        notAcceptedBtn.style.transform = "translate(0, 0)";
        notAcceptedBtn.style.boxShadow = "none";
      }, 220);
    }
  });
  notAcceptedBtn.addEventListener("click", () => {
    if (notAcceptedMessage) {
      notAcceptedMessage.textContent = 'PLEASE DO ACCEPT MY APOLOGY 😢';
    }
  });
}

function hideApologyDisplay() {
  apologyDisplay.style.display = "none";
  // restore main container when apology overlay is closed
  const mainContainer = document.querySelector('.container');
  if (mainContainer) mainContainer.style.display = '';
}

function personalizeMessage() {
  // kept for compatibility; renamed functionality lives in Accept handler below
}

function resetCard() {
  partnerName.value = "";
  messageBox.innerHTML = "<p class=\"hint\">Press \"Reveal apology\" to share the sincere note.</p>";
  messageBox.classList.remove("pop");
  acceptBtn.disabled = false;
  acceptBtn.classList.remove("matched", "complete");
  acceptBtn.textContent = "Accept";
  
  // Stop music
  bgmAudio.pause();
  bgmAudio.currentTime = 0;
  
  // Hide apology display
  hideApologyDisplay();
  // Hide pink display and stop video if open
  if (pinkDisplay) {
    pinkDisplay.style.display = 'none';
  }
  if (apologyVideo) {
    apologyVideo.pause();
    apologyVideo.removeAttribute('src');
  }
  hideCodeModal();
  
  if (celebrate) {
    celebrate.classList.remove("show");
    celebrate.setAttribute("aria-hidden", "true");
  }
}

function showPinkDisplay(videoSrc, lines) {
  if (!pinkDisplay) return;
  // hide apology overlay and ensure it's removed
  apologyDisplay.style.display = 'none';
  const setVideoAndShow = (src) => {
    // revoke previous object URL if any
    if (apologyVideo.dataset.objectUrl) {
      URL.revokeObjectURL(apologyVideo.dataset.objectUrl);
      delete apologyVideo.dataset.objectUrl;
    }
    apologyVideo.src = src;
    apologyVideo.load();
    // update status
    if (videoStatus) {
      videoStatus.classList.remove('error');
      videoStatus.classList.add('info');
      videoStatus.textContent = 'Loading video...';
    }
    // attempt to play (may be blocked if browser policy prevents autoplay with sound)
    apologyVideo.play().catch(() => {
      if (videoStatus) videoStatus.textContent = 'Ready — press play to start the video.';
    });
  };

    // If the configured path is a file:// URL (blocked when page served over http),
    // first try loading the file by basename as a relative path (if you copy the file
    // into the project folder). If that fails, fall back to prompting the user to select it.
    if (videoSrc && videoSrc.startsWith('file://')) {
      try {
        // extract filename from file:// URI
        const decoded = decodeURIComponent(videoSrc.replace(/^file:\/\//, ''));
        const parts = decoded.split(/\/|\//);
        const filename = parts.pop();
        if (filename) {
          // first try relative path in the served project
          const rel = `./${filename}`;
          // remember attempt type so onerror can fall back
          apologyVideo.dataset.attempt = 'relative';
          setVideoAndShow(rel);
          // if relative fails, an error event will trigger and will open file picker as fallback
          return;
        }
      } catch (err) {
        console.warn('Could not parse file:// path, falling back to file picker', err);
      }

      // fallback: trigger file input so the user can select the local file
      videoFileInput.value = '';
      videoFileInput.onchange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const objectUrl = URL.createObjectURL(file);
        // remember to revoke later
        apologyVideo.dataset.objectUrl = objectUrl;
        apologyVideo.dataset.attempt = 'object';
        setVideoAndShow(objectUrl);
      };
      videoFileInput.click();
    } else if (videoSrc) {
      apologyVideo.dataset.attempt = 'direct';
      setVideoAndShow(videoSrc);
    }
  // attach helpful event handlers once
  if (apologyVideo) {
    apologyVideo.oncanplay = () => {
      if (videoStatus) videoStatus.textContent = 'Video loaded — you can press play.';
    };
    apologyVideo.onerror = (e) => {
      console.error('Video playback error', e);
      // If we attempted a relative load from the project folder, fall back to asking the user for the file.
      const attempt = apologyVideo.dataset.attempt;
      if (attempt === 'relative') {
        if (videoStatus) {
          videoStatus.classList.remove('info');
          videoStatus.textContent = 'Relative file not found/unsupported — please pick the file.';
        }
        // open file picker as fallback
        setTimeout(() => videoFileInput.click(), 250);
        return;
      }
      if (videoStatus) {
        videoStatus.classList.remove('info');
        videoStatus.classList.add('error');
        videoStatus.textContent = 'Error: Cannot play this video (unsupported codec or corrupted file).';
      }
    };
  }
  // populate text
  videoText.innerHTML = '';
  for (const line of lines) {
    const p = document.createElement('p');
    p.textContent = line;
    videoText.appendChild(p);
  }
  pinkDisplay.style.display = 'flex';
}

// Close pink display
if (pinkCloseBtn) {
  pinkCloseBtn.addEventListener('click', () => {
    if (pinkDisplay) pinkDisplay.style.display = 'none';
    if (apologyVideo) {
      apologyVideo.pause();
      apologyVideo.removeAttribute('src');
    }
    const mainContainer = document.querySelector('.container');
    if (mainContainer) mainContainer.style.display = '';
  });
}

apologyBtn.addEventListener("click", showApologyModal);
resetBtn.addEventListener("click", resetCard);

// Code modal event listeners
codeSubmitBtn.addEventListener("click", () => {
  const code = codeInput.value.trim();
  if (code === PERSONAL_CODE) {
    hideCodeModal();
    displayApologyContent();
  } else {
    codeError.textContent = "Invalid code. Please try again.";
    codeError.classList.add("show");
    codeInput.value = "";
    codeInput.focus();
  }
});

codeCloseBtn.addEventListener("click", hideCodeModal);

codeInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    codeSubmitBtn.click();
  }
});

codeInput.addEventListener("input", () => {
  codeError.textContent = "";
  codeError.classList.remove("show");
});

// Exact, case-insensitive target name
const TARGET_NAME = "KANCHANAPALLI RUTH MARY";
const normalizedTargetName = TARGET_NAME.replace(/\s+/g, " ").trim().toUpperCase();

acceptBtn.addEventListener("click", (e) => {
  const name = partnerName.value.trim();
  acceptBtn.classList.remove('complete');
  if (!name) {
    messageBox.innerHTML = '<p class="hint">Please enter a name first.</p>';
    messageBox.classList.add('pop');
    setTimeout(() => messageBox.classList.remove('pop'), 600);
    return;
  }

  const normalizedName = name.replace(/\s+/g, " ").toUpperCase();
  if (normalizedName === normalizedTargetName) {
    // matched case-insensitively with whitespace normalized
    acceptBtn.classList.add('matched');
    acceptBtn.disabled = true;
    messageBox.innerHTML = `<p>✨ Welcome, <strong>${name}</strong>. Preparing a surprise…</p>`;
    
    // Play music when name matches
    bgmAudio.src = AUDIO_PATH;
    bgmAudio.loop = true;
    bgmAudio.play().catch(err => console.log("Audio playback error:", err));
    
    // after 2 seconds show celebration overlay
    setTimeout(() => {
      showCelebrate(name);
    }, 2000);
  } else {
    // brief feedback for mismatch
    messageBox.innerHTML = `<p class="hint">Name not recognized. Please try again.</p>`;
    messageBox.classList.add('pop');
    // small shake animation by toggling a class
    acceptBtn.classList.add('shake');
    setTimeout(() => acceptBtn.classList.remove('shake'), 500);
    showErrorModal("Name not recognized. Please try again.");
    setTimeout(() => messageBox.classList.remove('pop'), 600);
  }
});

function showCelebrate(name) {
  if (!celebrate) return;
  celebrate.classList.add('show');
  // ensure image is visible (already copied as celebrate.jpg)
  celebrateImg.src = 'celebrate.jpg';
  celebrate.setAttribute('aria-hidden', 'false');
  // small timed message pulse
  celebrateMsg.textContent = 'WELCOME TO MY HEART BABE';
  // hide after some time
  setTimeout(() => {
    celebrate.classList.remove('show');
    celebrate.setAttribute('aria-hidden', 'true');
    // re-enable button and mark completion
    acceptBtn.disabled = false;
    acceptBtn.classList.remove('matched');
    acceptBtn.classList.add('complete');
    acceptBtn.textContent = 'Accepted';
  }, 11000);
}
