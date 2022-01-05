// var body = document.querySelector("body");
var change = () => {
  var y = document.getElementsByClassName("value")[0].innerHTML;
  x = 0;
  setInterval(() => {
    if (x <= y - 10) {
      return (document.getElementsByClassName("value")[0].innerHTML = x++);
    }
  }, 10);
  setInterval(() => {
    if (x <= y) {
      return (document.getElementsByClassName("value")[0].innerHTML = x++);
    }
  }, 130);
};
var change1 = () => {
  let y = document.getElementsByClassName("value")[1].innerHTML;
  let x = 0;
  setInterval(() => {
    if (x <= y - 10) {
      return (document.getElementsByClassName("value")[1].innerHTML = x++);
    }
  }, 10);
  setInterval(() => {
    if (x <= y) {
      return (document.getElementsByClassName("value")[1].innerHTML = x++);
    }
  }, 130);
};
var change2 = () => {
  let y = document.getElementsByClassName("value")[2].innerHTML;
  let x = 0;
  setInterval(() => {
    if (x <= y - 10) {
      return (document.getElementsByClassName("value")[2].innerHTML = x++);
    }
  }, 10);
  setInterval(() => {
    if (x <= y) {
      return (document.getElementsByClassName("value")[2].innerHTML = x++);
    }
  }, 130);
};
var change3 = () => {
  let y = document.getElementsByClassName("value")[3].innerHTML;
  let x = 0;
  setInterval(() => {
    if (x <= y - 10) {
      return (document.getElementsByClassName("value")[3].innerHTML = x++);
    }
  }, 10);
  setInterval(() => {
    if (x <= y) {
      return (document.getElementsByClassName("value")[3].innerHTML = x++);
    }
  }, 130);
};
// body.addEventListener("scroll", function (e) {
//   if (this.scrollTop > 1300) {
//     console.log("scrolled");
//     // }
//   });
const val = document.querySelector(".container3");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting) {
      change();
      change1();
      change2();
      change3();
    }
    // console.log(ent);
  },
  {
    root: null,
    threshold: 0,
  }
);
console.log(val);
obs.observe(val);
// change();
