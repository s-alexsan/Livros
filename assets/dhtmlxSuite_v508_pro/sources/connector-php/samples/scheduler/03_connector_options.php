<?php
	include ('../../codebase/scheduler_connector.php');
	include ('../config.php');
	$res= new PDO($mysql_server,$mysql_user,$mysql_pass);
    

	$list = new OptionsConnector($res, "PDO");
	$list->render_table("types","typeid","typeid(value),name(label)");

	$scheduler = new schedulerConnector($res, "PDO");
//	$scheduler->enable_log("log.txt",true);

	$scheduler->set_options("type", $list);
	$scheduler->render_table("tevents","event_id","start_date,end_date,event_name,type");
?>