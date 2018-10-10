<?php
	$username = @$_POST["username"];
	$password = @$_POST["password"];
	if($username=="" || $password==""){
		die("密码或用户名为空".mysql_error());
	}
	$con = mysql_connect("localhost","root","123456");
	if(!$con){
		die("数据库连接错误".mysql_error());
	}

	mysql_select_db("userlist",$con);
	if(mysql_error()){
		die("数据库连接失败" .mysql_error());
	}
	$sql_select_all = "SELECT username,password FROM detaillist WHERE username='$username'";
	$select_res = mysql_query($sql_select_all);
	$password = md5($password);
	// echo "$password";
	while($row = mysql_fetch_array($select_res)){
		
		if($row["password"] == $password){
			die("登陆成功");
			
		}
	}
	echo "请输入正确的密码或用户名";
	mysql_close($con);
?>