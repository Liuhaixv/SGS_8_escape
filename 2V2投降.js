/**
 * TODO
 * 增加悬浮窗用于控制脚本开始，显示。
 * 重构代码，函数结构化
 */
/**
 * 初始化，申请权限
 */
function init() {
  //开启无障碍
  auto.waitFor();
  //申请截屏权限(横屏)
  if (!requestScreenCapture(false)) {
    log("请求截屏权限失败!需要通过找图定位");
  }
}

/**
 * 经典场中点击右侧开战按钮
 */

function 开战() {
  log("开战");
  click(1537, 541);
}

function 投降() {
  //右上角加号键
  click(1854, 77);
  sleep(1000);
  //退出游戏键(未死亡时是投降)
  click(844, 86);
  sleep(800);
  click(1188, 888);
  sleep(1000);
  click(1156, 620);
}

/**
 * 死亡后退出,先判断是否死亡
 */
function 死亡退出() {
  log("死亡退出");
  if (has再来一局()) {
    log("再来一局");
    sleep(1000);
    click(1148, 979);
    return;
  }
  //右上角加号键
  click(2140, 95);
  sleep(1000);
  //退出游戏键(未死亡时是投降)
  click(1360, 87);
  sleep(800);
  click(1340, 630);
  sleep(1000);
}

function 再来一局() {
  while (true) {
    if (has再来一局()) {
      log("找到再来一局");
      sleep(1000);
      click(1148, 979);
      return;
    } else {
      log("未找到再来一局");
      click(1148, 979);
      sleep(1000);
    }
  }
}
/**
 * 找图判断死亡
 */
function isDead() {
  var result = images.findImage(captureScreen(), images.read("./dead.jpg"), {
    //region: [1939, 730],
    threshold: 0.5,
  });
  return result != null;
}

function isAt经典场() {
  // 333 160
  //   602 269
  var result = images.findImage(captureScreen(), images.read("./经典场.jpg"), {
    //region: [1896, 148],
    threshold: 0.9,
  });
  result = result != null;
  if (result) {
    log("现在位于经典场");
    status = "经典场";
  }
  return result;
}

function isAt大厅() {
  var result = images.findImage(captureScreen(), images.read("./大厅.jpg"), {
    //region: [235, 913],
    threshold: 0.8,
  });
  result = result != null;
  if (result) {
    log("现在位于大厅");
    status = "大厅";
  }
  return result;
}

function isAt自由场() {
  var result = images.findImage(captureScreen(), images.read("./自由场.png"), {
    //region: [235, 913],
    threshold: 0.8,
  });
  result = result != null;
  if (result) {
    log("现在位于自由场");
    status = "自由场";
  }
  return result;
}

function is你的身份是主公() {
  var result = images.findImage(
    captureScreen(),
    images.read("./你的身份是主公.jpg"),
    {
      //region: [842, 969],
      threshold: 0.8,
    }
  );
  result = result != null;
  if (result) {
    log("你的身份是主公");
  }
  return result;
}

function is主公已选将() {
  var result = images.findImage(
    captureScreen(),
    images.read("./主公已选将.jpg"),
    {
      //region: [920, 30],
      threshold: 0.8,
    }
  );
  result = result != null;
  if (result) {
    log("主公已经选将");
  }
  return result;
}

function to经典场from大厅() {
  if (hasBackButton()) {
    click(2144, 82);
    sleep(500);
  }
  click(500, 500);
  log("已经从大厅跳转到经典场");
  status = "经典场";
}

function hasBackButton() {
  var result = images.findImage(captureScreen(), images.read("./back.jpg"), {
    //region: [2062, 0],
    threshold: 0.4,
  });
  return result != null;
}

function has取消() {
  var result = images.findImage(captureScreen(), images.read("./取消.jpg"), {
    //region: [1374, 669],
    threshold: 0.7,
  });
  return result != null;
}
function has开始游戏() {
  var result = images.findImage(
    captureScreen(),
    images.read("./开始游戏.png"),
    {
      threshold: 0.8,
    }
  );
  return result != null;
}
function has托管中() {
  var result = images.findImage(captureScreen(), images.read("./托管中.jpg"), {
    //region: [1230, 980],
    threshold: 0.8,
  });
  return result != null;
}

function has傲视群雄() {
  var result = images.findImage(
    captureScreen(),
    images.read("./傲视群雄.jpg"),
    {
      //region: [2060, 920],
      threshold: 0.9,
    }
  );
  return result != null;
}

function has网络不好() {
  var result = images.findImage(
    captureScreen(),
    images.read("./网络不好.jpg"),
    {
      //region: [1300, 550],
      threshold: 0.9,
    }
  );
  return result != null;
}

function has再来一局() {
  var result = images.findImage(
    captureScreen(),
    images.read("./再来一局.jpg"),
    {
      //region: [928, 870],
      threshold: 0.8,
    }
  );
  return result != null;
}

function has准备() {
  var result = images.findImage(captureScreen(), images.read("./准备.png"), {
    threshold: 0.8,
  });
  return result != null;
}
function has可选武将() {
  var result = images.findImage(
    captureScreen(),
    images.read("./可选武将.png"),
    {
      threshold: 0.8,
    }
  );
  return result != null;
}
function 截图(x1, y1, x2, y2) {
  return images.clip(captureScreen(), x1, y1, x2 - x1, y2 - y1);
}

function 截图保存(x1, y1, x2, y2, name) {
  images.save(截图(x1, y1, x2, y2), "./" + name + ".jpg", "jpg", 50);
}

function 苦肉可发动() {
  var result = images.findImage(captureScreen(), images.read("./苦肉.jpg"), {
    //region: [1715, 899],
    threshold: 0.9,
  });
  return result != null;
}

function 发话(str) {
  click(66, 986);
  sleep(100);
  click(823, 756);
  sleep(200);
  if (className("android.widget.Button").exists()) {
    className("android.widget.EditText").findOne().setText(str);
    sleep(200);
    className("android.widget.Button").text("  确定  ").findOne().click();
    sleep(200);
    click(1264, 766);
  }
}
function 随机骂队友一句() {
  var strs = [
    "告诉大家一个秘密，我队友是孤儿",
    "告诉大家一个秘密，我队友没有妈妈",
    "我的队友是憨批",
    "我是你们3个人的爸爸",
    "我是你们的爸爸,爹有事先走了，儿子们慢慢打",
    "除了我以外都是狗东西",
    "夫长校尉先锋都是狗东西,我是神",
  ];
  var str = strs[random(0, strs.length - 1)];
  发话(str);
}
function 选将() {
  //点击选择武将
  click(277, 831);
  sleep(1500);
  click(749, 417);
  sleep(100);
  click(749, 417);
}
/**
 * 判断当前位置
 */
function judgeTheState() {
  while (!isAt经典场()) {
    to经典场();
  }
}

function 开始挂机() {
  switch (mode) {
    case 1: {
      while (true) {
        if (isAt自由场()) {
          click(382, 331);
          sleep(500);
          click(1536, 541);
        }
        if (has准备()) {
          click(952, 978);
          更新时间();
          toastLog("更新了时间:" + lastUpdatedTime);
        }
        if (has取消()) {
          随机骂队友一句();
          投降();
          log("**********投降退出**********");
          log("匹配总场次:" + matchesNumber);
          log("**********再接再厉**********");
          sleep(2000);
        }
        if (has开始游戏()) {
          click(952, 982);
          click(952, 982);
          sleep(600);

          //换房
          if (flagOfDividingInTwo % 2 == 0) {
            click(62, 1003);
            sleep(600);
            click(219, 1003);
            flagOfDividingInTwo++;
          } else {
            click(507, 1003);
            flagOfDividingInTwo--;
          }
        }
        if (has托管中()) {
          log("取消了托管");
          click(1400, 950);
          continue;
        } else if (has网络不好()) {
          log("网络不好");
          sleep(1000);
          click(1438, 600);
          continue;
        }
      }
    }
  }
}
/**
 * 从大厅或者经典场，跳转到经典场
 */
function to经典场() {
  //更新界面状态
  isAt大厅();
  isAt经典场();

  if (status == "大厅") {
    to经典场from大厅();
    sleep(1000);
    //点击8人军争模式
    click(481, 589);
  } else if (status == "经典场") {
    //点击8人军争模式
    click(481, 589);
  } else {
  }
  sleep(2000);
}

function 超时检测() {
  if (lastUpdatedTime == 0) {
    return;
  }
  let timeout = false;

  let timeNow = new Date().getTime();
  //距离上次更新时间经过的秒数
  let timePastFromLastUpdate = (timeNow - lastUpdatedTime) / 1000;
  log(timePastFromLastUpdate);
  //60秒没有开局就默认游戏崩溃
  if (timePastFromLastUpdate > 200) {
    timeout = true;
  }
  if (timeout) {
    toastLog("超时！重启游戏中");
    engines.execScriptFile("./2V2投降重启游戏.js");
    engines.myEngine().forceStop();
  }
}

function 更新时间() {
  lastUpdatedTime = new Date().getTime();
}

var lastUpdatedTime = 0;
//记录匹配过的场次
var matchesNumber = 0;
//记录苦肉过的次数
var skillNumber = 0;
var status = "未知位置";
var MODES = {
  0: "未设置",
  1: "卧龙投降",
};
var mode = 1;
var flagOfDividingInTwo = 1;
init();
开始挂机();
