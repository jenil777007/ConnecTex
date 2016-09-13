<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

  include_once './Config.php';



  $connection = new connection();
  $connection->connect();



  $post = json_decode(file_get_contents("php://input"), true);
  $name=$post["name"];
  $password=$post["password"];
  $cpassword=$post["cpassword"];
  $email=$post["email"];
  $c_name=$post["company_name"];
  $address1=$post["address1"];
  $address2=$post["address2"];
  $type=$post["type"];
  $mobile=$post["mobile"];
  $otp=$post["otp"];
  $newsletter=$post["newsletter"];



      if (empty($post['name']) || empty($post['password']) || empty($post['cpassword']) || empty($post['email']) || empty($post['company_name']) || empty($post['address1']) || empty($post['address2'] || empty($post['type'] || empty($post['mobile'] || empty($post['otp'] || empty($post['newsletter']))
      {
              $response["success"] = false;
              $response["message"] = "One or both of the fields are empty.";
              die(json_encode($response));
      }else{

           $query = "INSERT INTO `user`(`name`, `email`, `password`, `otp`, `expiry`, `role`, `status`, `featured`, `new`, `registered`, `newslatter`, `company_name`, `address1`, `address2`, `area`, `mobile`, `device_id`, `created_date`) VALUES ('$name','$email','$password','$otp','',$type,'','','','','$newsletter','$c_name','$address1','$address2','','$mobile','','')";
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



      }


  mysql_close();
  ?>