// alert()は動作確認したらコメントアウト or 削除しましょう🤗

// alert(1);

// if文

// const num = 40;

// if (num >= 30) {
//   console.log("30ですよ！！");
// } else {
//   console.log("違います");
// }

// ifの条件分岐の書き方

// if (num === 30) {
//   console.log("30!!!");
// } else if (num === 40) {
//   console.log("40!!!");
// } else if (num === 50) {
//   console.log("50!!!");
// } else {
//   console.log("すべてに当てはまらないものはこちら");
// }

//jQueryを使うときのルール htmlに目印をつけること！
$("h1").on("click", function () {
  // html class='a" の場所を指しています🤗
  $(".a").html("押された");

  const random = Math.floor(Math.random() * 5);
  console.log(random, "ランダム");

  if (random === 0) {
    console.log("大吉です");
    $(".a").html("大吉です");
    $(".a").css("color", "red");
    // <img src="../img/a.png" />
  } else if (random === 1) {
    console.log("中吉です");
    $(".a").html("中吉です");
    $(".a").css("color", "black");
  } else if (random === 2) {
    console.log("小吉です");
    $(".a").html("小吉です");
    $(".a").css("color", "black");
  } else if (random === 3) {
    console.log("吉です");
    $(".a").html("吉です");
    $(".a").css("color", "black");
  } else if (random === 4) {
    console.log("末です");
    $(".a").html("末です");
    $(".a").css("color", "black");
  }
  // この下消さない
});