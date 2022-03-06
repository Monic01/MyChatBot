var controlText = 0;

var app = document.getElementById("utyped");
var box_hover = document.getElementById("hint");
var box = document.getElementById("inv_box");
var chatbox = document.getElementById("chatbox");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
/*
typewriter
      .start()
      .pauseFor(200)
      .typeString("알아듣지 못한 것 같아요.")
      .pauseFor(300)
      .deleteAll()
      .typeString("다시 입력해보세요.")
      .pauseFor(1000)
      .deleteAll();
*/
var json = [
  {
    question: "안녕",
    answer: "안녕! 냥",
  },
  {
    question: "넌 누구야",
    answer: "난 말하는 고양이야! 냥",
  },
  {
    question: "갈게",
    answer: "잘 가 냥! 또 올거지?",
  },
  {
    question: "이름",
    answer: "내 이름은 꾼냥이야! 냥",
  },
  {
    question: "이름이 뭐야",
    answer: "꾼냥이야! 냥",
  },
];

function chatText(x) {
  chatbox.innerText = x;
}

function checkText() {
  var chatbox = document.getElementById("chatbox");
  var value = document.getElementById("console").value;
  typewriter
    .start()
    .typeString("말을 걸어 보세요!")
    .pauseFor(800)
    .deleteAll()
    .typeString("기다리고 있어요")
    .pauseFor(800)
    .deleteAll()
    .typeString("가르칠수도 있어요")
    .pauseFor(800)
    .deleteAll();

  textCheck(value);
  testValue(value);
  background_set(value);
}

var study = 0;
var question = "";
var answer = "";

function textCheck(value) {
  if (study == 1) {
    if (value == "네") {
      chatbox.innerText = "대답을 적어주세요";
      study = 2;
    } else {
      chatText("냥 냐앙");
      study = 7;
    }
    return;
  }

  if (study == 0) {
    chatText("말을 해달라냥");
    study = 6;
  }

  if (study == 2) {
    answer = value;
    json.push({ question: `${question}`, answer: `${answer}` });
    document.getElementById("chatbox").innerHTML = "말을 배웠다 냥!";
    study = 0;
  }

  for (var i = 0; i < json.length; i++) {
    if (value == json[i].question) {
      chatbox.innerText = json[i].answer;
      return;
    }
  }
  if (study == 6) {
    chatText("말을 가르쳐주실래요? (네 or 아니오)");
    question = value;
    study = 1;
  }

  if (study == 7) {
    chatText("잘 모르겠다냥");
    study = 0;
  }
}

function testValue(value) {
  if (value == "나이") {
    if (controlText == 0) {
      chatText("몇 살일거 같냥~ 한 번 더 물어보면 알려주지");
      controlText++;
    } else if (controlText == 1) {
      chatText("냥 냥 ? 한 번만 더 물어보라냥");
      controlText++;
    } else if (controlText == 2) {
      chatText("1살이라냥!");
      controlText = 0;
    }
  }
}

function background_set(x) {
  var back_color = document.getElementById("layout");

  if (x == "불 꺼줘") {
    chatText("짠~! 어두워졌다!");
    back_color.style.backgroundColor = "#343434";
  } else if (x == "불 켜줘") {
    chatText("짠~! 불을 다시 켰어!");
    back_color.style.backgroundColor = "antiquewhite";
  }
}

box_hover.addEventListener(
  "mouseover",
  function (event) {
    box.style.display = "block";
    box.innerHTML = "안녕<br>넌 누구야<br>나이<br>불 꺼줘<br>불 켜줘";
  },
  false
);

box_hover.addEventListener(
  "mouseout",
  function (event) {
    box.style.display = "none";
  },
  false
);
