// Animasi kelopak bunga jatuh
const petalsContainer = document.getElementById("petals");
for (let i = 0; i < 18; i++) {
  let petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDelay = Math.random() * 7 + "s";
  petal.innerHTML = "🌸";
  petalsContainer.appendChild(petal);
}

// Animasi teks judul
const title = "Selamat Anniversary Pernikahan";
let titleIndex = 0;
const animatedTitle = document.getElementById("animatedTitle");
animatedTitle.textContent = "";

function animateTitle() {
  if (titleIndex < title.length) {
    animatedTitle.textContent += title[titleIndex];
    titleIndex++;
    setTimeout(animateTitle, 70);
  }
}
animateTitle();

// Animasi teks utama
const mainText =
  "Happy Anniversary, kak! Dulu suka berantem rebutan remot TV, sekarang udah berantem sayang sama pasangan. 😂 Canda tawa dan kehangatan yang kalian ciptakan bener-bener bikin aku ikut bahagia. Semoga rumah tangga kalian selalu jadi tempat pulang yang paling nyaman. Doa terbaikku selalu menyertai kalian berdua!";

const animatedText = document.getElementById("animatedText");
let textIndex = 0;
let charIndex = 0;
let lines = mainText.split("\n");

function animateTextLine() {
  if (textIndex < lines.length) {
    let line = lines[textIndex];
    let span = document.createElement("span");
    animatedText.appendChild(span);
    charIndex = 0;
    function typeChar() {
      if (charIndex < line.length) {
        span.textContent += line[charIndex];
        charIndex++;
        setTimeout(typeChar, 50);
      } else {
        animatedText.appendChild(document.createElement("br"));
        textIndex++;
        setTimeout(animateTextLine, 400);
      }
    }
    typeChar();
  }
}
animateTextLine();

// Tombol pesan spesial
function showExtraMessage() {
  document.getElementById("extra").style.display = "block";
}
window.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("romanticMusic");
  audio.muted = false;
  audio.play().catch(function () {
    // Jika autoplay gagal, coba play saat user klik di mana saja
    document.body.addEventListener(
      "click",
      function () {
        audio.muted = false;
        audio.play();
      },
      { once: true }
    );
  });
});
// ...existing code...

// Overlay logic
window.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("letterOverlay");
  const openBtn = document.getElementById("openLetterBtn");
  const audio = document.getElementById("romanticMusic");

  // Sembunyikan konten utama saat overlay aktif
  document.querySelector(".container").style.display = "none";
  document.getElementById("petals").style.display = "none";

  openBtn.addEventListener("click", function () {
    overlay.style.display = "none";
    document.querySelector(".container").style.display = "";
    document.getElementById("petals").style.display = "";
    // Mulai musik
    audio.muted = false;
    audio.play().catch(function () {
      document.body.addEventListener(
        "click",
        function () {
          audio.muted = false;
          audio.play();
        },
        { once: true }
      );
    });
  });
});
// ...existing code...

window.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("letterOverlay");
  const openBtn = document.getElementById("openLetterBtn");
  const audio = document.getElementById("romanticMusic");
  const container = document.querySelector(".container");
  const petals = document.getElementById("petals");

  // Sembunyikan konten utama saat overlay aktif
  container.classList.remove("show");
  petals.style.display = "none";

  openBtn.addEventListener("click", function () {
    // Transisi overlay
    overlay.classList.add("hide");
    setTimeout(function () {
      overlay.style.display = "none";
      container.classList.add("show");
      petals.style.display = "";
      // Mulai musik
      audio.muted = false;
      audio.play().catch(function () {
        document.body.addEventListener(
          "click",
          function () {
            audio.muted = false;
            audio.play();
          },
          { once: true }
        );
      });
    }, 1000); // waktu transisi sesuai CSS
  });
});

// ...existing code...
