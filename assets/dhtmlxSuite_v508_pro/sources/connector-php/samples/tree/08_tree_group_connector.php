<?php

	require_once("../config.php");
	$res= new PDO($mysql_server,$mysql_user,$mysql_pass);
	

	require("../../codebase/treegroup_connector.php");
	$tree = new TreeGroupConnector($res, "PDO");
	$tree->render_table("products", "id", "product_name", "", "category");

?>