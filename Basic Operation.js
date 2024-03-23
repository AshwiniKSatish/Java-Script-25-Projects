<!DOCTYPE html>
<html>
<head>
  <title>Basic Operation</title>
  <style>
    *
    {
        text-align: center;
        margin:10px;
    }
  </style>
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">Sum Of Positive Elements in Array</h1>
    
    <div style="text-align: center;">
        <label for="arrayInput">Enter elements of the array separated by commas (,):</label><br>
        <input type="text" id="arrayInput" placeholder="e.g., 1, 2, 3, -4, 5">
        <br><br>
        <button onclick="calculateSum()">Calculate Sum</button><br><br>
        <h2 id="result" style="background-color: rgb(207, 90, 27); border:20px;"></h2>
    </div>

    <script>
        function calculateSum() {
            const input = document.getElementById("arrayInput").value;
            const array = input.split(",").map(Number);
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] > 0) {
                    sum += array[i];
                }
            }
            document.getElementById("result").innerHTML = "Sum of positive elements: " + sum;
        }
    </script>
</body>
</html>
