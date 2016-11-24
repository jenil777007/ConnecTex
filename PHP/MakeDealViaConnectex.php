<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

  include_once './Config.php';



  $connection = new connection();
  $connection->connect();



  $post = json_decode(file_get_contents("php://input"), true);


$minprice = $post["minprice"];
$maxprice = $post["maxprice"];
$peak = $post["peak"];
$reed = $post["reed"];
$weight = $post["weight"];
$width = $post["width"];
$date = $post["date"];
$material_id = $post["quality"];
$quantity = $post["quantity"];
$user_id = $post["id"];
$dealtype = $post["type"];


        if (empty($post['minprice']) || empty($post['maxprice']) || empty($post['peak']) || empty($post['reed']) || empty($post['weight']) || empty($post['width']) || empty($post['date']) || empty($post['quality']) || empty($post['quantity']) || empty($post['id']) || empty($post['type']))
              {
                      $response["success"] = false;
                      $response["message"] = "One or both of the fields are empty.";
                      die(json_encode($response));
              }else{

                  $query = " INSERT INTO `deal_via_connectex`(`user_id`, `material_id`, `quantity`, `price(min)`, `price(max)`, `reed`, `peak`, `weight`, `width`, `deal_type`, `date_created`) VALUES ('$user_id','$material_id','$quantity','$minprice','$maxprice','$reed','$peak','$weight','$width','$dealtype','$date')";
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