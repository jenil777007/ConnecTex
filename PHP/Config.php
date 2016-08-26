<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

class connection{
        var $host = "mysql.hostinger.in";
        var $user = "u602584406_admin";
        var $pass = "admin@123";
        var $db = "u602584406_ctx";
        var $mycon;

function connect(){
            $con = mysqli_connect($this->host,$this->user,$this->pass,$this->db);

            if(!$con){
                die("Cound not connect to database!!");
            }else{
                $this->mycon = $con;
               //echo "Successfully Connected";
            }

            return $this->mycon;
        }

        function close(){
            mysqli_close($this->mycon);
            //echo "Connection closed";
        }
    }

?>