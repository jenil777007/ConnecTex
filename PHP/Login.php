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
              $abc["success"] = false;
              $abc["message"] = "One or both of the fields are empty.";
              die(json_encode($abc));
      }else{
          $query = " SELECT * FROM user WHERE email ='$username'and password='$password'";
          $result = mysqli_query($connection->mycon,$query);


          $sql = mysqli_num_rows($result);

            while($a = mysqli_fetch_assoc($result))
            {
                $abc = $a;
            }
           //echo json_encode($abc);

          if($sql>0){

            $abc["success"] = true;
            $abc["message"] = "Successfully Logged In";
            die(json_encode($abc));
          }else{
              $abc["success"] = false;
              $abc["message"] = "Username Or Password Wrong";
              die(json_encode($abc));

          }
      }


  mysql_close();
  ?>