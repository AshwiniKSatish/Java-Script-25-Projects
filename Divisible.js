<!DOCTYPE html>
<html>
<head>
  <title>Divisible</title>
  
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">Divisible by 2 numbers</h1>
    <script>
        var x = parseInt(prompt('Enter the number to be divided from the two numbers: '));
        var a = parseInt(prompt('Enter the first number: '));
        var b = parseInt(prompt('Enter the second number: '));
        divide=function(x,a,b){
            if ((x%a==0) && (x%b==0))
            {
                return x+' is divisible by the numbers';
            }
            return x+' is not divisible by both the numbers';
        }
        document.write('<h2 style="text-align: center; background-color: rgb(207, 90, 27); border:20px;"> Result is: ' + divide(x,a,b) + '</h2>');
      </script>
</body>
</html>
