var x= [23,4,6,1,2];
var y= [23,4,6,1,"f"];
var z=0;
if(x.length===y.length){
    for(i=0;i<x.length;i++){
        if(x[i]===y[i]){
            z++;
        }
    }
    if(x.length===z){
        console.log("The given two arrays are same.");
    }
    else{
        console.log("The given two arrays are not same.");            
    }
}
else{
    console.log("The given two arrays are not same.");            
}