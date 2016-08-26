<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

  include_once './Config.php';



  $connection = new connection();
  $connection->connect();



  $post = json_decode(file_get_contents("php://input"), true);
  $username=$post["Username"];
  $password=$post["Password"];



      if (empty($post['Username']) || empty($post['Password']))
      {
              $response["success"] = false;
              $response["message"] = "One or both of the fields are empty.";
              die(json_encode($response));
      }else{
          $query = " SELECT * FROM user WHERE email ='$username'and password='$password'";
          $result = mysqli_query($connection->mycon,$query);

          $sql = mysqli_num_rows($result);


          if($sql>0){
            $response["success"] = true;
            $response["message"] = "successfully Login.";
            die(json_encode($response));
          }else{
              $response["success"] = false;
              $response["message"] = "Something Wrong.";
              die(json_encode($response));

          }
      }


  mysql_close();
  ?>