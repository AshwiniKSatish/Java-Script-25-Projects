<!DOCTYPE html>
<html>
<head>
  <title>Total Points</title>
  
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">Total Points</h1>
    <script>
        function games(arr) {
        let total=0;
        for(let i=0;i<arr.length;i++)
            {
            const val=arr[i];
            const parts=val.split(":");
            const x=parts[0];
            const y=parts[1];
            if(x>y)
            {
                total+=3;
            }
            else if(x==y)
            {
                total+=1;
            }
            }
            return total;
        }

        const input = prompt("Enter elements of the array separated by commas (,):");
        const array = input.split(",");
        const res = games(array);
        document.write('<h2 style="text-align: center; background-color: rgb(207, 90, 27); border:20px;"> Result is: ' + res + '</h2>');

    </script>
</body>
</html>
    
    
