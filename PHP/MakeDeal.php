<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

  include_once './Config.php';



  $connection = new connection();
  $connection->connect();



  $post = json_decode(file_get_contents("php://input"), true);


$price = $post["price"];
$peak = $post["peak"];
$reed = $post["reed"];
$weight = $post["weight"];
$width = $post["width"];
$date = $post["date"];
$material_id = $post["material_id"];
$user_id = $post["id"];


        if (empty($post['price']) || empty($post['peak']) || empty($post['reed']) || empty($post['weight']) || empty($post['width']) || empty($post['date']) || empty($post['material_id']) || empty($post['id']))
              {
                      $response["success"] = false;
                      $response["message"] = "One or both of the fields are empty.";
                      die(json_encode($response));
              }else{

                  $query = " INSERT INTO `request`(`user_id`, `material_id`, `material_width`, `material_weight`, `price`, `peak`, `fani`, `limits`, `created_date`) VALUES ('$user_id','$material_id','$width','$weight','$price','$peak','$reed','1','$date')";
                  $result = mysqli_query($connection->mycon,$query);

                    if ($result) {
                        $response["success"] = true;
                                    $response["message"] = "Successfully Added";
                                    die(json_encode($response));
                     } else {
                       $response["success"] = false;
                                   $response["message"] = "Not Added";
                                   die(json_encode($response));
                    }



              }


  mysqli_close($con);
  ?>