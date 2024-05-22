console.log("hello");
document.querySelectorAll(
  ".artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view.social-actions-button.react-button__trigger"
);

console.log(
  document.querySelectorAll(
    ".artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view.social-actions-button.react-button__trigger"
  )
);
// likebtn.forEach((btn) => {
//   if (btn.innerText === "Like") {asdf
//     btn.click();
//   }
// });

// window.scrollBy(0, 1000);
// window.scrollBy(0, 1000);
// window.scrollBy(0, 1000);
let len = Math.max(likeInput.value, CommentInput.value);

let myinterval = setInterval(() => {
  window.scrollBy(0, 1000);
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
  console.log(
    document.querySelectorAll(
      ".artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view.social-actions-button.react-button__trigger"
    )
  );
}, 2000);

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
