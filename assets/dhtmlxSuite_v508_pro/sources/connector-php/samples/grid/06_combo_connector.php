<?php
	require_once("../config.php");
	$res= new PDO($mysql_server,$mysql_user,$mysql_pass);
	
	require("../../codebase/grid_connector.php");
	
	
	
	$grid = new GridConnector($res, "PDO");
	
	$grid->dynamic_loading(100);
	
	/*$filter1 = new OptionsConnector($res, "PDO");
	$filter1->render_table("countries","item_id","item_id(value),item_nm(label)");
	$grid->set_options("item_nm",$filter1);*/
	
	$filter1 = new OptionsConnector($res, "PDO");
	$filter1->render_table("countries","item_id","item_id(value),item_nm(label)");
	$grid->set_options("item_nm",$filter1);
	
	$grid->render_table("grid50000","item_id","item_nm,item_cd");
	
?>