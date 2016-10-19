<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

  include_once './Config.php';



  $connection = new connection();
  $connection->connect();



  $post = json_decode(file_get_contents("php://input"), true);

$role = $post["role1"];

          $query = "SELECT id,company_name,role FROM user";
          $result = mysqli_query($connection->mycon,$query);


          $sql = mysqli_num_rows($result);
            //echo "user data";
          //  echo $sql;


           $query1 = "SELECT user_id, user.role, request.material_id, company_name, material_name, material_width, price, peak, fani FROM request JOIN material JOIN user WHERE request.material_id = material.id AND request.user_id = user.id AND user.role != '$role'";
                //echo json_encode($a);
        // $query1 = "SELECT user_id,request.material_id,material_name,material_width,price,peak,fani FROM request JOIN material where request.material_id = material.id AND request.user_id = '$a[id]' ";
                             $result1 = mysqli_query($connection->mycon,$query1);

                            $row = mysqli_num_rows($result1);
                           // echo $row;
                             while($b = mysqli_fetch_assoc($result1))
                             {

                                   $x[] = $b;

                             }


                      //echo $a['id'];
              /* $query1 = "SELECT user_id,material_id,material_width,material_weight,price,peak,fani,created_date FROM request where user_id = '$a[id]'";
            $result1 = mysqli_query($connection->mycon,$query1);


                      $sql1 = mysqli_num_rows($result1);

                      while($b = mysqli_fetch_assoc($result1))
                      {
                        //    echo $b['material_id'];

                      $query2 = "SELECT material_name FROM material WHERE id = '$b[material_id]'";
                        $result2 = mysqli_query($connection->mycon,$query2);
                            while($c = mysqli_fetch_assoc($result2))
                            {
                          //      echo $c['material_name'];
                          $x[] = $c;

                            }

                      }*/



    die(json_encode($x));



  mysqli_close($con);
  ?>