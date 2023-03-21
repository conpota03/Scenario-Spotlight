(() => {
  class Accordion {
    //初期化
    constructor(obj) {
      console.log("obj", obj.hookName);

      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        index++;
      }
    }

    //クリックしたら実行される処理
    clickHandler(e) {
      e.preventDefault();

      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;

      if ($content.style.display === "block") {
        $content.style.display = "none";
      } else {
        $content.style.display = "block";
      }
    }
  }

  const RAccordion = new Accordion({
    hookName: "#js-accordion",
    tagName: "p",
  });

})();

// // カウント
// (() => {
// let starcount = 0;
// const starButton = document.getElementById("star");
// starButton.addEventListener("click", function () {
//   if (starButton.classList.contains("clicked")) {
//     starcount--;
//   } else {
//     starcount++;
//   }
//   starButton.classList.toggle("clicked");
//   document.getElementById("star-num").innerHTML = starcount + "遊んだ";
// });
// })();


// カウント
(() => {
  class ClickedCount {
    constructor(obj) {
      console.log("obj", obj.changetxt);
      const $elm = document.querySelector(obj.clickedName);
      const $trigger = document.getElementById(obj.changeName);
    

      let count = 0;
      $elm.addEventListener("click", function () {
        if ($elm.classList.contains("clicked")) {
          count--;
        } else {
          count++;
        }
        $elm.classList.toggle("clicked");
        document.getElementById(obj.changeName).innerHTML =
          count + obj.changetxt;
      });
    }
  }

  const starclickedcount = new ClickedCount({
    clickedName: "#star",
    changeName: "star-num",
    changetxt: "遊んだ"
  });


    const heartlickedcount = new ClickedCount({
      clickedName: "#heart",
      changeName: "heart-num",
      changetxt: "遊びたい",
    });
})();
