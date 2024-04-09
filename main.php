<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "contact";
$connect_db = mysqli_connect($host,$username,$password,$dbname);
if(mysqli_connect_errno()){
    echo "please try again";
    exit();
}
else{
    echo 'connected';
}
if (isset($_POST['submit'])) {
    $EMAIL = $_POST['email'];
    $insert = "INSERT INTO `contact` (`email`) VALUE ('$EMAIL')";
    mysqli_query($connect_db,$insert);
    if(mysqli_query($connect_db,$insert)) {
        echo "<br> the data have sent";
    }
    else{
        echo "it a system problem";
    }
}
?>