<?php
	require_once("../config.php");
	$res= new PDO($mysql_server,$mysql_user,$mysql_pass);
	

   require("../../codebase/tree_connector.php");
   $tree = new TreeConnector($res, "PDO");
//   
   $tree->render_sql("SELECT taskId,taskName from tasks WHERE complete>49","taskId","taskName","","parentId");
?>