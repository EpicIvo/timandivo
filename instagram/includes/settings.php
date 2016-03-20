<?php

set_time_limit(0);
ini_set('default_socket_timeout', 300);
session_start();

// Instagram API keys

define("clientID", '17ac33e9f4664534b1ce760226b8dcf6');
define("clientSecret", '9beadb03ae49499a94fa2bb7e482e0de');
define("redirectURL", 'http://www.timandivo.us/');


  function fetchData($url){
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL, $url);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($ch, CURLOPT_TIMEOUT, 20);
      $result = curl_exec($ch);
      curl_close($ch);
      return $result;
  }
  $result = fetchData("https://api.instagram.com/v1/users/17510927/media/recent/?access_token=17510927.ab103e5.867b1445b2d7494fad7705a1fb1a84bd&count=9");


echo $result;
