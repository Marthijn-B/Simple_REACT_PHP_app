<?php

  // Recieve consent set through the POST
  $content = $_POST['content'];
  // Add consent to array
  $response = array("success" => true, "message" => "From project directory: ".$content);
  // Send the consent back to through this API
  echo json_encode($response);
  
 ?>
