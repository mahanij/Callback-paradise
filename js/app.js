function startTheApp(callback) {
  setTimeout(() => {
    console.log("successfull, now you are in the app");
    callback();
  }, 2000);
}

function openChallengePart(continuation, callback) {
  setTimeout(() => {
    if (continuation === true) {
      callback();
      console.log("continuation");
    }
  }, 2000);
}

function challenge(continuation, callback) {
  setTimeout(() => {
    console.log("this is your challenge: a^2x + a^2y - 8ax - 8ay + 12x + 12y");
    if (continuation === true) {
      callback();
    }
  }, 2000);
}

function solve1(callback) {
  setTimeout(() => {
    console.log("= x(a^2 - 8a + 12) + a^2y - 8ay + 12y");
    callback();
  }, 2000);
}

function solve2(callback) {
  setTimeout(() => {
    console.log("= x(a^2 - 8a + 12) + y(a^2 - 8a + 12)");
    callback();
  }, 2000);
}

function solve3(callback) {
  setTimeout(() => {
    console.log("= (x + y)(a^2 - 8a + 12)");
    callback();
  }, 3000);
}

function unit(callback) {
  setTimeout(() => {
    console.log(
      "(a^2 - 8a + 12) this part is unit you now what is this unit ?"
    );
    callback();
  }, 3000);
}

function unit2(callback) {
  setTimeout(() => {
    console.log(
      "If this part is unity, we should find numbers whose sum = - 8 and whose product = 12"
    );
    callback();
  }, 3000);
}

function unit3(callback) {
  setTimeout(() => {
    console.log("they numbers are - 2 & - 6");
    callback();
  }, 3000);
}

function solve4() {
  setTimeout(() => {
    console.log("the final answer = (y + x) (a - 2) (a - 6)");
  }, 3000);
}

startTheApp(() =>
  openChallengePart(true, () =>
    challenge(false, () =>
      solve1(() =>
        solve2(() => solve3(() => unit(() => unit2(() => unit3(solve4)))))
      )
    )
  )
);
