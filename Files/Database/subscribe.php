<?php
if (isset($_POST["submit-btn"])) {
  

require_once "dbh.php";

$Email = $_POST["Email"];

if (empty($Email)) {
    header("location:../index.html?Error=emptyFields");
}else{
    $sql = "INSERT INTO Subscribers (Email) VALUES (?)";
    $stmt = mysqli_stmt_init($con);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location:../index.html?Error=sqlEror");
    }else{
        mysqli_stmt_bind_param($stmt, 's', $Email );
        mysqli_stmt_execute($stmt);
        echo "Thank you for subscribing to my channel";        
    }
    
}
}
else{
    header("location:../files/database/subsribe.php");

}


?>


