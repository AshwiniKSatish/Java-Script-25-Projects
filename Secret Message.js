<!DOCTYPE html>
<html>
<head>
  <title>Secret Message</title>
  
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">SECRET MESSAGE</h1>
    <script>
        var code =prompt('Enter the secret code: ');
        secret=function(code){
            if (code=="ranjitha")
            {
                return "Hello this is a very Confidential message do not forward it to anyone.... The website we have built is been selected for an award ";
            }
            return "Wrong code";
        }
        document.write('<h2 style="text-align: center; background-color: rgb(207, 90, 27); border:20px;">' + secret(code) + '</h2>');
      </script>
</body>
</html>
