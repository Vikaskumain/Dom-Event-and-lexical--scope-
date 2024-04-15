                      /*****We have a given a task for write a paragraph with js  */    
                    //    first of all we can create something like that for loop its easy to understand write something 
 
                    // function vikas(){
                    //     setTimeout(() => {
                    //         for (let i=1 ; i<50; i++){
                    //             let Element =document.createElement("H")
                    //            Element.textContent="This is the heading we create with js No " 
                    //             document.body.appendChild(Element)
                    //         }  
                    //     }, 2000);
                        
                        
                    // }
                    // vikas();
                    // function kumain(){
                    //     for(let i=0 ;i<=12;i++){
                    //         setTimeout (()=>{
                    //             console.log("this is the para"+i)
                    //         },i*2000)
                    //     }
                    // }
                //   kumain()


                  function vicky(){
                    for(var i=1 ;i<=12;i++){
                        function delay(i){
                            setTimeout (function(){
                                console.log(i)
                            },i*2000)
                        }
                        delay(i)
                    }
                    console.log("this is the print to js line by line with var")
                  }
                  vicky()