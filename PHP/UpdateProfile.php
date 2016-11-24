<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

  include_once './Config.php';

  $connection = new connection();
  $connection->connect();

  $post = json_decode(file_get_contents("php://input"), true);
  $password=$post["password"];
  $cpassword=$post["cpassword"];
  $email=$post["email"];



      if (empty($post['password']) || empty($post['cpassword']) || empty($post['email']) )
      {
              $response["success"] = false;
              $response["message"] = "One or both of the fields are empty.";
              die(json_encode($response));
      }else{

            if ($password == $cpassword)
            {
           $query = "UPDATE `user` SET `password`= '$password' WHERE `email` = '$email'";
          //$query = "INSERT INTO user VALUES('$name','$email','$password','','',$type,'','','','','','$c_name','$address1','$address2','','','','')";
          $result = mysqli_query($connection->mycon,$query);

            if ($result) {
                $response["success"] = true;
                            $response["message"] = "successfully Registered";
                            die(json_encode($response));
             } else {
               $response["success"] = false;
                           $response["message"] = "not Registered";
                           die(json_encode($response));
            }
        }else{
                $response["success"] = false;
                 $response["message"] = "dosen't match";
                                            die(json_encode($response));
        }


      }


  mysql_close();
  ?>