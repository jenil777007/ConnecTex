<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

  include_once './Config.php';



  $connection = new connection();
  $connection->connect();



  $post = json_decode(file_get_contents("php://input"), true);

$id = $post["id"];

          // $query1 = "SELECT * from request where user_id = '$id'";

                //echo json_encode($a);
         $query1 = "SELECT user_id,user.company_name,request.material_id,material_name,material_width,price,peak,fani FROM request JOIN material JOIN user where request.material_id = material.id AND request.user_id = '$id' AND user.id = '$id'";
                             $result1 = mysqli_query($connection->mycon,$query1);

                          //  $row = mysqli_num_rows($result1);
                           // echo $row;
                             while($b = mysqli_fetch_assoc($result1))
                                {

                                   $x[] = $b;
                                }

                          //  $len = count($x);
                            //$i = 0;
                           // while($i<$len)(

                             //  $query2 = "select material_name from material where id = "
                          // )






    die(json_encode($x));



  mysqli_close($con);
  ?>