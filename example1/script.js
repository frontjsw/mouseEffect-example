window.onload = () => {
  //출력용;
  window.addEventListener("mousemove", (e) => {
    document.querySelector(".clientX").innerText = e.clientX;
    document.querySelector(".clientY").innerText = e.clientY;
    document.querySelector(".offsetX").innerText = e.offsetX;
    document.querySelector(".offsetY").innerText = e.offsetY;
    document.querySelector(".pageX").innerText = e.pageX;
    document.querySelector(".pageY").innerText = e.pageY;
    document.querySelector(".screenX").innerText = e.screenX;
    document.querySelector(".screenY").innerText = e.screenY;
  });

  //마우스 움직이기
  window.addEventListener("mousemove", (e) => {
    document.querySelector(".cursor").style.left = e.clientX - 25 + "px";
    document.querySelector(".cursor").style.top = e.clientY - 25 + "px";
  });

  //마우스 호버 이펙트
  document.querySelectorAll(".mouseCont span").forEach((element, index) => {
    element.addEventListener("mouseover", () => {
      document.querySelector(".cursor").classList.add("style" + (index + 1));
    });
    element.addEventListener("mouseout", () => {
      document.querySelector(".cursor").classList.remove("style" + (index + 1));
    });
  });
};
