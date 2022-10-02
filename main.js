console.log("test");
const API_KEY = "d41d9d2d0e17d1f77a0a52d568a390cd";

const introduceArray = [
  "안녕하세요, 웹디자이너 임형준 입니다.",
  "저는 illustrator / indesign 을 사용해 디자인을 합니다.",
  "현재 시각디자인과,건축과 복수전공 한학기 남겨두고 현재 휴학중입니다.",
  "호주에서 워킹홀리데이 1년 경험이 있습니다.",
  "제 장점은 다양한 아이디어가 많은 아이디어뱅크로써 디자인과 함께 융합해 새로운 가치를 만들어 냅니다.",
];
let introduceIndex = 0;

const projectDetail = {
  project1: {
    img: "project1-2.png",
    title: "Sign Goods Project",
    contents: [
      "평소에 자신이 사용하는 싸인을 로고화 하여 자신만의 아이덴티티를 보여주는 Sign Goods Project 이 프로젝트는 누구나 다 여러분들의 싸인을 로고화하여 여러가지 굿즈로 만들어주는 프로젝트로 남들과 다르게 내자신을 표현한다는 의미를 담고있는 프로젝트 입니다.",
    ],
  },
  project2: {
    img: "project2.png",
    title: "pet_s tel Project",
    contents: [
      "최근들어 반려동물 시장이 넓어짐에 반려동물이 가족이라는 개념이 점점 생겨 나가게 되는데요. 하지만 휴가철 바캉스때 여러분들의 반려동물들과 함께 호캉스를 한다는 취지로 만들어진. 반려동물 초호화 호텔 건축물 프로젝트 입니다",
    ],
  },
  project3: {
    img: "project3.png",
    title: "instargram Art Accout",
    contents: [
      "인스타그램을 통해. 영화의 명장면이나 뮤직비디오의 명장면,일상 그림이 있는 계정입니다.  @Canegi44",
    ],
    href: "https://www.instagram.com/caengi_44/",
  },
};

function onClickOpenModal(projectName) {
  const modalDetail = document.querySelector(".modalDetail");

  modalDetail.classList.remove("hidden");
  modalDetail.classList.add("flex");

  const modalContents = document.querySelector(".modalContents");
  console.log(projectDetail[projectName].img);
  modalContents.innerHTML = `<li class=" md:mx-8"><img src=${projectDetail[projectName].img} alt=${projectDetail[projectName].img} /></li>`;
  const modalTitle = document.querySelector(".modalTitle");
  modalTitle.innerText = projectDetail[projectName].title;

  projectDetail[projectName].contents.forEach((v) => {
    modalContents.innerHTML += `<li class=" mx-2 md:mx-8 text-xs md:text-base">${v}</li>`;
  });
  if (projectDetail[projectName].href) {
    modalContents.innerHTML += `<li><a href=${projectDetail[projectName].href} target="_blank">More</a></li>`;
  }
}

function onClickCloseModal() {
  const modalDetail = document.querySelector(".modalDetail");

  modalDetail.classList.remove("flex");
  modalDetail.classList.add("hidden");
}

function onClickIntroduce() {
  const introduceMessage = document.querySelector(".introduceMessage");

  introduceIndex++;

  if (introduceIndex === introduceArray.length) {
    introduceIndex = 0;
  }

  introduceMessage.innerText = introduceArray[introduceIndex];
}

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const cityTemp = document.querySelector(".cityTemp");
        const weatherIcon = document.querySelector(".weatherIcon");

        cityTemp.innerText = data.name + ", " + parseInt(data.main.temp) + "℃";
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      });
  },
  () => alert("Location access not allowed.")
);
