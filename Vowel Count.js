<!DOCTYPE html>
<html>
<head>
  <title>Vowel Count</title>
  
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">VOWEL COUNT</h1>
    <script>
        var str = prompt('Enter the String: ');
        vowel=function(str){
            let count=0;
            const a=str.split("");
            for(var i=0;i<a.length;i++)
            {
                switch(a[i].toLowerCase())
                {
                    case 'a':count+=1;
                    break;
                    case 'e':count+=1;
                    break;
                    case 'i':count+=1;
                    break;
                    case 'o':count+=1;
                    break;
                    case 'u':count+=1;
                    break;
                    default:break;
                }
            }
            return count;
        }
        document.write('<h2 style="text-align: center; background-color: rgb(207, 90, 27); border:20px;"> Vowel Count is: ' + vowel(str) + '</h2>');
      </script>
</body>
</html>
