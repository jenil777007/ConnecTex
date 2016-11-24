<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

  include_once './Config.php';



  $connection = new connection();
  $connection->connect();



  $post = json_decode(file_get_contents("php://input"), true);

    $id = $post["id"];

           $query1 = "SELECT user.company_name, messages.message_txt FROM messages JOIN user where messages.to_user_id = '$id' AND messages.from_user_id = user.id";
           $result1 = mysqli_query($connection->mycon,$query1);

                while($b = mysqli_fetch_assoc($result1))
                   {
                       $x[] = $b;
                   }

    die(json_encode($x));

  mysqli_close($con);
  ?>