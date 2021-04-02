const answer = document.getElementById("answer");

const options = { weekday: "long" };
const today = new Intl.DateTimeFormat("en-US", options).format(new Date());

if (today === "Monday") {
  answer.innerHTML = `<span style="font-style: normal; color : green">YES</span><br>Frehti daba ? Tfertih`;
} else {
  answer.innerHTML = `<span style="font-style: normal; color : red">NO</span><br>Lyoum ${today}, yallah sir fihalatk`;
}
