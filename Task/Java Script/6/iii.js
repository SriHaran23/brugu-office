var employes= [
                {
                    name : "Haran",
                    age : 22,
                    gender : "male",
                    salary : 23000
                },
                {
                    name : "gopi",
                    age : 24,
                    gender : "male",
                    salary : 24000
                },
                {
                    name : "mohan",
                    age : 23,
                    gender : "male",
                    salary : 21000
                },
                {
                    name : "afshan",
                    age : 22,
                    gender : "female",
                    salary : 22000
                },
                {
                    name : "vency",
                    age : 24,
                    gender : "male",
                    salary : 25000
                },
                {
                    name : "loki",
                    age : 20,
                    gender : "male",
                    salary : 24000
                }
            ]
            var total= employes.reduce((t,n)=> t + n.salary,0);
            console.log(total);