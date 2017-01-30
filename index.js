    var inptN = Number(prompt('How many do you need?'), 0);
    result(inptN);

    function result (InptN){
        document.write("Fibonacci sequence: " + arr[0] + ", " + arr[1] + ", ");
        var arr = [];
        arr[0]=0;
        arr[1]=1;
        if(inptN>2){
            for (var i=2; i < inptN; i++){
                arr[i] = arr[i-2] + arr[i-1];
                document.write(arr[i] + ", ");
            }
        
        }
        console.log(arr);
    }
