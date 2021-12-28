<?php

// 前端方式
header('Content-type:application/json;charset=utf-8');
header('Cache-Control:max-age=0');
sleep(1);
while (true) {
  $res = array('success' => 'ok', 'text' => '我是测试文本');
  echo json_encode($res);
  exit();
}



// 后端方式
// header('Cache-Control:max-age=0');
// $i = 0;
// while ($i < 9) {
//   $i++;
//   // $res = array('success' => 'ok', 'text' => '我是测试文本');
//   // echo json_encode($res);
//   sleep(1);
//   $radom = rand(1, 999);
//   echo $radom;
//   echo '<br/>';
//   ob_flush();
//   flush();
// }
