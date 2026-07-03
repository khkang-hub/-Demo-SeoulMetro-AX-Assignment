const linkData = [
  {
    "title": "서울교통공사 공식 홈페이지",
    "url": "https://www.seoulmetro.co.kr/",
    "category": "기관 정보",
    "status": "직접 연결",
    "desc": "서울교통공사 대표 홈페이지"
  },
  {
    "title": "사이버스테이션",
    "url": "https://www.seoulmetro.co.kr/kr/cyberStation.do",
    "category": "이동 정보",
    "status": "연결 필요",
    "desc": "노선도, 경로 탐색, 지하철 이용 정보"
  },
  {
    "title": "실시간 열차 운행 정보",
    "url": "https://smss.seoulmetro.co.kr/traininfo/traininfoUserView.do",
    "category": "이동 정보",
    "status": "직접 연결",
    "desc": "열차 위치와 운행 상황 확인"
  },
  {
    "title": "간편지연증명서",
    "url": "https://www.seoulmetro.co.kr/kr/delayProofList.do?menuIdx=543",
    "category": "문제 해결",
    "status": "연결 필요",
    "desc": "지연 발생 시 증명서 조회 및 출력"
  },
  {
    "title": "유실물센터",
    "url": "https://www.seoulmetro.co.kr/kr/page.do?menuIdx=541",
    "category": "문제 해결",
    "status": "연결 필요",
    "desc": "지하철 이용 중 분실물 안내"
  },
  {
    "title": "운임안내",
    "url": "https://www.seoulmetro.co.kr/kr/page.do?menuIdx=354",
    "category": "이동 정보",
    "status": "연결 필요",
    "desc": "기본 운임과 추가 운임 안내"
  },
  {
    "title": "승차권안내",
    "url": "https://www.seoulmetro.co.kr/kr/page.do?menuIdx=355",
    "category": "이동 정보",
    "status": "연결 필요",
    "desc": "정기권, 1회권, 교통카드 등 승차권 안내"
  },
  {
    "title": "단체권 운임 안내",
    "url": "https://www.seoulmetro.co.kr/kr/fare.do?menuIdx=527",
    "category": "이동 정보",
    "status": "연결 필요",
    "desc": "단체 이용 시 운임 안내"
  },
  {
    "title": "여객운송약관",
    "url": "https://www.seoulmetro.co.kr/kr/page.do?menuIdx=528",
    "category": "제도 정보",
    "status": "연결 필요",
    "desc": "여객 운송 관련 약관"
  },
  {
    "title": "공지사항",
    "url": "https://www.seoulmetro.co.kr/kr/board.do?menuIdx=546",
    "category": "기관 정보",
    "status": "연결 필요",
    "desc": "운행, 행사, 안전 관련 공지"
  },
  {
    "title": "자료실",
    "url": "https://www.seoulmetro.co.kr/kr/board.do?menuIdx=548",
    "category": "기관 정보",
    "status": "연결 필요",
    "desc": "공개 자료 및 참고 문서"
  },
  {
    "title": "채용정보",
    "url": "https://seoulmetro.incruit.com/",
    "category": "기관 정보",
    "status": "직접 연결",
    "desc": "서울교통공사 채용 공고"
  },
  {
    "title": "또타24 챗봇",
    "url": "https://chat.seoulmetro.co.kr/",
    "category": "문제 해결",
    "status": "직접 연결",
    "desc": "챗봇 기반 민원·안내 서비스"
  }
];

const quickData = [
  {
    icon: "⏱️",
    title: "간편지연증명서",
    category: "문제 해결",
    desc: "지하철 지연으로 증명서가 필요할 때 바로 접근합니다.",
    keyword: "지연 증명서 지각 회사 학교",
    url: "https://www.seoulmetro.co.kr/kr/delayProofList.do?menuIdx=543"
  },
  {
    icon: "🚆",
    title: "실시간 열차 정보",
    category: "이동 정보",
    desc: "현재 열차 운행 상황을 확인합니다.",
    keyword: "실시간 열차 운행 위치 지연",
    url: "https://smss.seoulmetro.co.kr/traininfo/traininfoUserView.do"
  },
  {
    icon: "🧳",
    title: "유실물센터",
    category: "문제 해결",
    desc: "열차나 역사에서 물건을 잃어버렸을 때 확인합니다.",
    keyword: "유실물 분실물 잃어버림",
    url: "https://www.seoulmetro.co.kr/kr/page.do?menuIdx=541"
  },
  {
    icon: "♿",
    title: "역사 편의시설",
    category: "교통약자",
    desc: "엘리베이터, 화장실, 수유실 등 편의시설을 확인합니다.",
    keyword: "엘리베이터 에스컬레이터 화장실 수유실 장애인 편의시설",
    url: "https://www.seoulmetro.co.kr/"
  },
  {
    icon: "🌡️",
    title: "냉난방 민원",
    category: "민원",
    desc: "열차 안 냉난방 불편을 빠르게 접수할 수 있도록 안내합니다.",
    keyword: "냉방 난방 더워 추워 민원",
    url: "https://chat.seoulmetro.co.kr/"
  },
  {
    icon: "💳",
    title: "운임·승차권",
    category: "이동 정보",
    desc: "운임, 정기권, 단체권 등 요금 정보를 확인합니다.",
    keyword: "운임 요금 승차권 정기권 단체권",
    url: "https://www.seoulmetro.co.kr/kr/page.do?menuIdx=354"
  },
  {
    icon: "📢",
    title: "공지사항",
    category: "기관 정보",
    desc: "운행, 안전, 행사 등 주요 공지를 확인합니다.",
    keyword: "공지 행사 안전 운행 안내",
    url: "https://www.seoulmetro.co.kr/kr/board.do?menuIdx=546"
  },
  {
    icon: "💼",
    title: "채용정보",
    category: "기관 정보",
    desc: "서울교통공사 채용 공고와 절차를 확인합니다.",
    keyword: "채용 공채 모집 입사지원",
    url: "https://seoulmetro.incruit.com/"
  }
];

const responses = {
  "지연": "지하철 지연으로 증명서가 필요하다면 ‘간편지연증명서’ 메뉴로 이동하세요. 날짜와 노선을 선택해 조회한 뒤 출력할 수 있도록 안내하는 흐름이 적합합니다.",
  "유실물": "열차나 역사에서 물건을 잃어버렸다면 유실물센터를 먼저 확인하고, 분실 시간·탑승 노선·하차역·물품 특징을 정리해 문의하도록 안내합니다.",
  "냉난방": "열차 내 냉난방 불편은 또타24 챗봇이나 민원 접수 채널로 연결합니다. 사용자가 차량번호와 위치를 알고 있다면 함께 입력하도록 안내하는 것이 좋습니다.",
  "편의시설": "엘리베이터, 에스컬레이터, 화장실, 수유실 등은 역사 편의시설 정보로 연결합니다. 교통약자는 모바일에서 큰 버튼으로 바로 접근할 수 있어야 합니다.",
  "default": "공식 홈페이지의 여러 메뉴를 사용자의 상황에 맞춰 연결하는 안내형 AI입니다. 실제 서비스에서는 공식 데이터와 연결해 답변해야 합니다."
};

const cards = document.getElementById("quickCards");
const search = document.getElementById("cardSearch");
const links = document.getElementById("officialLinks");
const menuButton = document.getElementById("menuButton");
const siteNav = document.getElementById("siteNav");
const aiResponse = document.getElementById("aiResponse");

function renderCards(keyword = "") {
  const normalized = keyword.trim().toLowerCase();
  const filtered = quickData.filter(item => {
    const text = `${item.title} ${item.category} ${item.desc} ${item.keyword}`.toLowerCase();
    return !normalized || text.includes(normalized);
  });

  cards.innerHTML = filtered.map(item => `
    <article class="quick-card">
      <div class="icon" aria-hidden="true">${item.icon}</div>
      <span class="badge">${item.category}</span>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <a class="card-link" href="${item.url}" target="_blank" rel="noopener">공식 경로로 이동</a>
    </article>
  `).join("");

  if (!filtered.length) {
    cards.innerHTML = `<p>검색 결과가 없습니다. 다른 단어로 검색해 보세요.</p>`;
  }
}

function renderLinks() {
  links.innerHTML = linkData.map(item => `
    <article class="link-item">
      <div>
        <strong>${item.title}</strong>
        <p>${item.desc}</p>
        <div class="link-meta">
          <span class="category">${item.category}</span>
          <span class="status">${item.status}</span>
        </div>
      </div>
      <a class="secondary-button" href="${item.url}" target="_blank" rel="noopener">열기</a>
    </article>
  `).join("");
}

function answerPrompt(text) {
  const key = Object.keys(responses).find(k => text.includes(k));
  aiResponse.textContent = responses[key || "default"];
}

if (search) {
  search.addEventListener("input", event => renderCards(event.target.value));
}

document.querySelectorAll("[data-prompt]").forEach(button => {
  button.addEventListener("click", () => answerPrompt(button.dataset.prompt));
});

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open");
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.focus();
    }
  });
}

renderCards();
renderLinks();
