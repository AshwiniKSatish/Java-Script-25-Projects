<!DOCTYPE html>
<html>
<head>
  <title>Multiply</title>
  
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">MULTIPLICATION</h1>
    <script>
        var num1 = parseInt(prompt('Enter the first number: '));
        var num2 = parseInt(prompt('Enter the second number: '));
        multiply=function(a,b){
            return a*b;
        }
        document.write('<h2 style="text-align: center; background-color: rgb(207, 90, 27); border:20px;"> Result is: ' + multiply(num1,num2) + '</h2>');
      </script>
</body>
</html>
