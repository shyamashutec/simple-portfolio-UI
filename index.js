var y = document.getElementsByClassName("value")[0].innerHTML;
x = 0;
var change = () => {
  setInterval(() => {
    if (x <= y) {
      return (document.getElementsByClassName("value")[0].innerHTML = x++);
    }
  }, 20);
};

change();
