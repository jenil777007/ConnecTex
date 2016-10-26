<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

  include_once './Config.php';



  $connection = new connection();
  $connection->connect();



  $post = json_decode(file_get_contents("php://input"), true);

           $query1 = "SELECT material_name FROM material";
           $result1 = mysqli_query($connection->mycon,$query1);

                while($b = mysqli_fetch_assoc($result1))
                   {
                       $x[] = $b;
                   }

    die(json_encode($x));

  mysqli_close($con);
  ?>