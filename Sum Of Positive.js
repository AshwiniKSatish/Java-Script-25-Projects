<!DOCTYPE html>
<html>
<head>
  <title>Sum Of Positive Element in Array</title>
  
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">Sum Of Positive Element in Array</h1>
    <script>
        function Sum(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }
    let res= 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>0)
        {
        res += arr[i];
        }
    }
    return res

}
        const input = prompt("Enter elements of the array separated by commas (,):");
        const array = input.split(",").map(Number);
        const sum = Sum(array);
        document.write('<h2 style="text-align: center; background-color: rgb(207, 90, 27); border:20px;"> Result is: ' + sum + '</h2>');

    </script>
</body>
</html>
    
    
