/**
 * 需要Root权限
 */
function 重启游戏() {
  var result = shell(
    "am start -S com.bf.sgs.hdexp/org.cocos2dx.lua.AppActivity",
    true
  );
  if (result.code == 0) {
    toast("启动游戏成功");
  } else {
    toast("执行失败！");
  }
  sleep(15000);
  click(1760, 524);
  click(1760, 524);
  sleep(1000 * 15);
  click(1908, 138);
  sleep(1000);
  click(1608, 385);
}

function 运行脚本() {
  engines.execScriptFile("./2V2投降.js");
}
重启游戏();
运行脚本();
