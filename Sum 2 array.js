<!DOCTYPE html>
<html>
<head>
  <title>Sum in 2 Array</title>
  
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">SUM OF ELEMENTS IN 2 ARRAY</h1>
    <script>
    function Sum(a1,a2) {
    let res=0;
    for(let i=0;i<a1.length;i++)
    {   
        const x=a1[i];
        const y=a2[i];
        let val=x+y;
        res+=val;
    }
    return res;
}
        const input = prompt("Enter elements of the array 1 separated by commas (,):");
        const array = input.split(",").map(Number);
        const input2 = prompt("Enter elements of the array 2 separated by commas (,):");
        const array2 = input.split(",").map(Number);
        const res = Sum(array,array2);
        document.write('<h2 style="text-align: center; background-color: rgb(207, 90, 27); border:20px;"> Result is: ' + res + '</h2>');
    </script>
</body>
</html>
    
    
