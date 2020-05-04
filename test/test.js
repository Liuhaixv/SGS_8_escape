images.requestScreenCapture(false);
sleep(1000);
log(currentPackage());
log(has八人军争场());
function 启动游戏() {
  app.launch("com.bf.sgs.hdexp");
  sleep(5000);
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
