function changeFont(font) {
  const hanjaBlocks = document.querySelectorAll(".hanja-block .hanja");
  hanjaBlocks.forEach((block) => {
    block.style.fontFamily = font === "brush" ? "Cactus Classical Serif" : "Chocolate Classical Sans";
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "라이트 모드";
  } else {
    darkModeToggle.textContent = "다크 모드";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

const floatingControls = document.querySelector(".floating-controls");
const footer = document.querySelector("footer");
let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const footerTop = footer.getBoundingClientRect().top + window.scrollY;
    const floatingHeight = floatingControls.offsetHeight;
    const viewportHeight = window.innerHeight;

    // 스크롤 다운: 보여줌
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      floatingControls.classList.add("visible");
    } else if (scrollTop < 200) {
      // 스크롤 업: 숨김
      floatingControls.classList.remove("visible");
    }

    // footer와 겹치지 않도록 조정
    const bottomLimit = footerTop - viewportHeight + floatingHeight + 32; // 32는 여유 간격
    if (scrollTop > bottomLimit) {
      floatingControls.style.position = "absolute";
      floatingControls.style.bottom = `${document.body.scrollHeight - footerTop + 32}px`;
    } else {
      floatingControls.style.position = "fixed";
      floatingControls.style.bottom = "2rem";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  },
  false
);

document.addEventListener("DOMContentLoaded", () => {
  changeFont("brush");
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".grade-dropdown");
  const dropdownContent = document.querySelector(".grade-dropdown-content");

  dropdown.addEventListener("click", (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 방지
    dropdownContent.classList.toggle("visible");
  });

  // 페이지의 다른 곳을 클릭하면 드롭다운 닫기
  document.addEventListener("click", () => {
    dropdownContent.classList.remove("visible");
  });
});