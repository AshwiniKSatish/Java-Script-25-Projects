<!DOCTYPE html>
<html>
<head>
  <title>Reverse String</title>
  
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">String Reverse</h1>
    <script>
        var x = prompt('Enter the String to be reversed: ');
        reverse=function(x){
            var rev="";
            for(var i=0;i<x.length;i++)
            {
                rev=x[i]+rev;
            }
            return rev
        }
        document.write('<h2 style="text-align: center; background-color: rgb(207, 90, 27); border:20px;"> Result is: ' + reverse(x) + '</h2>');
      </script>
</body>
</html>
