/**
 * 三国杀3.0.0-3.3.0版本
 */
var matchesNumber = 0;
//TODO 统计时间
//var startTime;
//var passedTime;
init();
开始挂机();

function init() {
  //开启无障碍
  auto.waitFor();
  //申请截屏权限(横屏)
  if (!requestScreenCapture(false)) {
    log("请求截屏权限失败!需要通过找图定位");
  }
}

function 开始挂机() {
  while (true) {
    click(1164, 545);
    while (true) {
      if (currentPackage() != "com.bf.sgs.hdexp") {
        toastLog("当前不在游戏中");
        启动游戏();
      }
      click(1164, 545);
      sleep(200);
      if (可以投降()) {
        toast("可以投降");
        /*
                发话("在座各位都是我儿子，爸爸走了");
                sleep(200);
                click(1827, 44);
                sleep(100);
                */
        投降();
        log("**********投降退出**********");
        log("匹配总场次:" + ++matchesNumber);
        log("**********再接再厉**********");

        break;
      }
    }
    sleep(1500);
  }
}

function 可以投降() {
  var result = false;
  result = hasMenu();
  return result;
}

function 投降() {
  click(1827, 44);
  sleep(500);
  click(911, 41);
  sleep(500);
  click(778, 634);
}

function hasMenu() {
  var result = false;
  result = images.findImage(captureScreen(), images.read("./menu.png"), {
    threshold: 0.9,
  });
  return result;
}

function has八人军争场() {
  var result = false;
  result = images.findImage(captureScreen(), images.read("./8人军争场.png"), {
    threshold: 0.9,
  });
  return result != null;
}

function 启动游戏() {
  app.launch("com.bf.sgs.hdexp");
  sleep(8000);
  click(1698, 557);
  sleep(500);
  click(969, 547);
  while (true) {
    if (has八人军争场()) {
      sleep(2000);
      click(972, 577);
      sleep(1000);
      click(1164, 545);
      return;
    } else if (可以投降()) {
      return;
    }
    sleep(1000);
  }
}

function 发话(str) {
  click(149, 772);
  sleep(100);
  click(750, 770);
  sleep(200);
  if (className("android.widget.Button").exists()) {
    className("android.widget.EditText").findOne().setText(str);
    sleep(200);
    className("android.widget.Button").text("  确定  ").findOne().click();
    sleep(200);
    click(1386, 765);
  }
}
