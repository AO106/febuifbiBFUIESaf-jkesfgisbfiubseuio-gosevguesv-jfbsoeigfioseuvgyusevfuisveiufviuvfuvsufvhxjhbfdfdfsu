let element = document.getElementById('time');;

function sleep(waitMsec) {
    var startMsec = new Date();
   
    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
}
let count = 60;
  const countUp = () => {
      element.innerHTML = '残り ' + count-- + ' 分';
      setTimeout(countUp, 60000);
} 
countUp();