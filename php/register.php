<?php
	$username = @$_POST["username"];
	$password = @$_POST["password"];
	if($username == "" || $password == ""){
		die("缺少用户名或密码" . mysql_error());
	}

	$con = mysql_connect("localhost","root","123456");

	if(!$con){
		die("数据库连接错误" .mysql_error());
	}
	mysql_select_db("userlist", $con);
	$sql_select_all = "SELECT username FROM detaillist WHERE username = '$username'";
	$select_res = mysql_query($sql_select_all);

	while($row = mysql_fetch_array($select_res )){
		if($row["username"] == $username){
			die("用户名重名");
		}
	}
	echo "注册成功，即将跳转登录页面……";
	$password = md5($password);
	$sql_insert_item = "INSERT INTO detaillist (username,password)
						VALUES('$username','$password');
	                   ";
	$insert_res = mysql_query($sql_insert_item);
	mysql_close();
?>