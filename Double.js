<!DOCTYPE html>
<html>
<head>
  <title>Double the Elements in Array</title>
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">DOUBLE THE ELEMENTS IN ARRAY</h1>
    
    <div style="text-align: center;">
        <label for="arrayInput">Enter elements of the array separated by commas (,):</label><br>
        <input type="text" id="arrayInput" placeholder="e.g., 1, 2, 3, 4">
        <br><br>
        <button onclick="doubleElements()">Double Elements</button><br><br>
        <h2 id="result" style="background-color: rgb(207, 90, 27); border:20px;"></h2>
    </div>

    <script>
        function doubleElements() {
            const input = document.getElementById("arrayInput").value;
            const array = input.split(",").map(Number);
            
            if (array.length === 0) {
                document.getElementById("result").innerHTML = "Array is empty";
                return;
            }
            
            for (let i = 0; i < array.length; i++) {
                array[i] *= 2;
            }
            
            document.getElementById("result").innerHTML = "Result is: " + array;
        }
    </script>
</body>
</html>
