<?php
	require_once("../config.php");
	$res= new PDO($mysql_server,$mysql_user,$mysql_pass);
	
	
	require("../../codebase/combo_connector.php");
	$combo = new ComboConnector($res, "PDO");
	//$combo->enable_log("temp.log");
	$combo->render_sql("SELECT * FROM country_data  WHERE country_id >40 ","country_id","name");
?>