<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Hubigo!</title>
<!--<link rel="stylesheet" href="./css/normalize.css">-->

<!--<script src="./js/vendor/jquery-1.10.2.min.js"></script>
<script src="./js/vendor/jquery-ui-1.10.3.custom.min.js"></script>
<script src="./js/main.js"></script>-->

<script src="./js/jquery-1.10.2.min.js"></script>
<script src="./js/junmoo.js"></script>
<link rel="stylesheet" href="./css/main.css">
<link rel="stylesheet" href="./css/node.css">

</head>
<body>

<header class="page-header" role="banner">
    <aside>
        <ul>
            <li>
                <select class="semester_search">
                    <option value="1">1학기</option>
                    <option value="2">여름</option>
                    <option value="3">2학기</option>
                    <option value="4">겨울</option>
                </select>
                <select class="major_search">
                    <option value="1">전공/부전공</option>
                    <option value="2">실용 외국어/교양과목</option>
                </select>
                <input type="radio" value="propesser_ordering" id="propesser_ordering" name="ordering_radio">
                <label for="propesser_ordering">교수 이름순</label>
                <input type="radio" value="subject_ordering" id="subject_ordering" name="ordering_radio">
                <label for="subject_ordering">과목 이름순</label>
            </li>

            <li>
                <input id="mysearch2" type="search" placeholder="search"/>
            </li>
        <ul>

    	<button>으아</button>
    </aside>
</header>

<?php
    //echo "session_key :".$_SESSION[session_key]."<br>";
    //echo "member_srl  :".$_SESSION[member_srl]."<br>";
    //echo "expired     :".$_SESSION[expired]."<br>";
    //echo "val         :".$_SESSION[val]."<br>";
    //echo "ipaddress   :".$_SESSION[ipaddress]."<br>";
    //echo "last_update :".$_SESSION[last_update]."<br>";
    //echo "cur_mid     :".$_SESSION[cur_mid]."<br>";
?>

<div id="page-main" role="main">
    <div id="title">
        <div class="inner">Title</div>
    </div>

    <div id="main">
       <div class="node">
        <div class="node_head">
            node head
        </div>
        <div class="node_body">
            node body
        </div>
       </div>

       <div class="node">
        <div class="node_head">
            node head
        </div>
        <div class="node_body">
            node body
        </div>
       </div>

       <div class="node">
        <div class="node_head">
            node head
        </div>
        <div class="node_body">
            node body
        </div>
       </div>

       <div class="node">
        <div class="node_head">
            node head
        </div>
        <div class="node_body">
            node body
        </div>
       </div>
       <div class="node">
        <div class="node_head">
            node head
        </div>
        <div class="node_body">
            node body
        </div>
       </div><div class="node">
        <div class="node_head">
            node head
        </div>
        <div class="node_body">
            node body
        </div>
       </div>
    </div>
</div>

<!--
<footer class="page-footer" role="contentinfo">
    <small class="copyright">COPYRIGHT &copy; <a href="http://www.shiftbrain.co.jp" target="_blank">SHIFTBRAIN Inc.</a></small>
</footer>
-->
</body>
</html>
