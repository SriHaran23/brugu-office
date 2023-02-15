let school = {
                name : "Vivekanada School",
                location : "Delhi",
                established : 1995,
                20 : 1000,
                displayinfo : function() {
                    document.write(`${school.name} was established
                    in ${school.established} at ${school.location}`);
                }
            } 
var a= Object.values(school);
for(var i=0;i<a.length;i++){
    console.log(a[i]);
}