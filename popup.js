var btn = document.querySelector(".btn");

let likeInput = document.querySelector("#likeInput");
let CommentInput = document.querySelector("#commentInput");

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let len = Math.max(likeInput.value, CommentInput.value);
  //   alert("Button clicked");
  if (likeInput.value === "" || CommentInput.value === "") {
    alert("Please fill in the required fields");
    return;
  }

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // chrome.tabs.update(tab.id, { url: "https://www.linkedin.com/feed/" });

  console.log(likeInput.value, CommentInput.value);

  await chrome.scripting
    .executeScript({
      target: { tabId: tab.id },
      func: temp,
      args: [len],
    })
    .then(() => console.log("script1 injected"));

  await chrome.scripting
    .executeScript({
      target: { tabId: tab.id },
      func: clickLikebtn,
      args: [len],
    })
    .then(() => console.log("script2 injected"));
});

// function hello() {
//   console.log("hello");
// }

async function temp(len) {
  // console.log(len);
  // document.querySelectorAll(
  //   ".artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view.social-actions-button.react-button__trigger"
  // );

  // console.log(
  //   document.querySelectorAll(
  //     ".artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view.social-actions-button.react-button__trigger"
  //   )
  // );

  let myinterval = setInterval(() => {
    window.scrollBy(0, 1000);
    console.log(len)
    console.log(
      document.querySelectorAll(
        ".artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view.social-actions-button.react-button__trigger"
      ).length
    );
    if (
      document.querySelectorAll(
        ".artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view.social-actions-button.react-button__trigger"
      ).length >= len
    )
      clearInterval(myinterval);
    // console.log(
    //   document.querySelectorAll(
    //     ".artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view.social-actions-button.react-button__trigger"
    //   )
    // );
  }, 2000);
}

async function clickLikebtn(len) {
  let cnt = 0;
  let clickLike = setInterval(() => {
    console.log(`${cnt} ${len}`);
    console.log(document.querySelectorAll(
      ".artdeco-button__text.react-button__text.social-action-button__text"
    ));

    document.querySelectorAll(
      ".artdeco-button__text.react-button__text.social-action-button__text"
    ).forEach((btn) => {
      if (cnt >= len) {
        clearInterval(clickLike);
        return;
      }
      if (btn.innerText === "Like") {
        console.log("clicked " + cnt)
        btn.click();
        cnt++;
      }
    });

    if (cnt >= len) {
      clearInterval(clickLike);
      return;
    }
    console.log(`${cnt} ${len}`);

  }, 3000);
}









// while (
//   document.querySelectorAll(
//     ".artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view.social-actions-button.react-button__trigger"
//   ).length < 10
// ) {
//   window.scrollBy(0, 1000);
//   console.log(
//     document.querySelectorAll(
//       ".artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view.social-actions-button.react-button__trigger"
//     ).length
//   );
// }

// setTimeout(() => {
//   return;
// }, 30000);
// setInterval(() => {
//   console.log("hello");
//   let likebtn = document.querySelectorAll(
//     ".artdeco-button__text.react-button__text.social-action-button__text"
//   );

//   console.log(likebtn);
//   console.log(likebtn.length);
//   likebtn.forEach((btn) => {
//     if (btn.innerText === "Like") {
//       btn.click();
//     }
//   });
// }, 15000);

// setInterval(() => {
//   console.log("hello");
//   let likebtn = document.querySelectorAll(
//     ".artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view.social-actions-button.react-button__trigger"
//   );

//   console.log(likebtn);
//   console.log(likebtn.length);
//   // likebtn.forEach((btn) => {
//   //   if (btn.innerText === "Like") {
//   //     btn.click();
//   //   }
//   // });
// }, 5000);
