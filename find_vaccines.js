const checkElement = async selector => {
    while ( document.getElementsByClassName(selector) === null) {
      await new Promise( resolve =>  requestAnimationFrame(resolve) )
    }
    return document.getElementsByClassName(selector); 
  };

  const wait = async (table) => {
    while ( table.childNodes.length <= 1) {
      await new Promise( resolve =>  requestAnimationFrame(resolve) )
    }
    return table; 
  };
  
  function ClickConnect(){
      console.log("working");
      document
      .querySelector('.district-search')
      .click()
      
      
    checkElement("matlistingblock").then((selector) => {

        var results = selector[0];
        var table = results.firstElementChild.firstElementChild.firstElementChild
        
        
        wait(table).then((table)=>{
            
            var children = table.childNodes;    
            for (let i = children.length - 2; i >= 0; i--) {
                    let row = children[i];
                    let avaFlag = false                    
                    row.querySelectorAll("a").forEach(elem => {
                        let txt = elem.text.trim()
                        
                        if (txt !== "Booked" && txt !== "NA"){
                                avaFlag = true;
                        }
                    });
                    

                    if (!avaFlag){
                        table.removeChild(children[i]);  
                    }else if(typeof age !=='undefined' && (age ===18 || age === 45)){ 
                        ageFlag = false
                        const regex = /\w+\s(\d+)\+/gm;
                        row.querySelectorAll(".age-limit").forEach(elem => {
                              
                            let txt = regex.exec(elem.textContent.trim())
                            let res = Number(txt[1])
                            
                            if (res === age) ageFlag = true
                        });
                        
                        if (!ageFlag){
                            table.removeChild(children[i]);  
                        }
        
                    }

            }

        });
        
    });
      
  }

setInterval(ClickConnect,20000)
age = 45
