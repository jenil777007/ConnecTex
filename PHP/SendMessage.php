<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

  include_once './Config.php';



  $connection = new connection();
  $connection->connect();



  $post = json_decode(file_get_contents("php://input"), true);

$sid = $post["senderid"];
$rid = $post["username"];
$msg = $post["message"];
$date = $post["date"];



        if (empty($post['senderid']) || empty($post['username']) || empty($post['message']) || empty($post['date']) )
              {
                      $response["success"] = false;
                      $response["message"] = "One or both of the fields are empty.";
                      die(json_encode($response));
              }else{

                  $query = " INSERT INTO `messages`( `from_user_id`, `to_user_id`, `message_txt`,  `created_date`) VALUES ('$sid','$rid','$msg','$date')";
                  $result = mysqli_query($connection->mycon,$query);

                    if ($result) {
                        $response["success"] = true;
                                    $response["message"] = "Successfully Sent.";
                                    die(json_encode($response));
                     } else {
                       $response["success"] = false;
                                   $response["message"] = "Not Sent.";
                                   die(json_encode($response));
                    }
              }

  mysqli_close($con);
  ?>