<?php


  include_once './Config.php';

  $connection = new connection();
  $connection->connect();

  $post = json_decode(file_get_contents("php://input"), true);
  $username=$post["username"];
  $password=$post["password"];


  if (!empty($post))
  {
      if (empty($post['username']) || empty($post['password']))
      {
              $response["success"] = 0;
              $response["message"] = "One or both of the fields are empty.";
              die(json_encode($response));
      }else{
          $query = " SELECT * FROM Login_Details WHERE Username='$username'and Password='$password'";
          $result = mysqli_query($connection->mycon,$query);

          $sql = mysqli_num_rows($result);
          $arr = mysqli_fetch_array($sql);
      }
  }

  mysql_close();
  ?>