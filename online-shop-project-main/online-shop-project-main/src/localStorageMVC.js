
function Data() {

    var Email;
    

    return {

        getEmail: function() {
            
            return Email;
        },
        setEmail: function(sentEmail) {
            Email=sentEmail;
        }
    }

};


function UI() {

    
  
    var DOMstrings = {

        p1: "p1",
        input: "input",
        btn: "btn"

    }

    
    return {

        getDOMstrings: function () {
            return DOMstrings;
        },

        getInput: function () {

            return document.getElementById(DOMstrings.input).value;

        },
        setPara: function(Email){

           
            localStorage.setItem('UserEmail',Email); 
            Email1="Great!,we will inform you about the newest collection on your E-Mail: "
            +localStorage.getItem('UserEmail');
            
            document.getElementById(DOMstrings.p1).textContent=Email1;
        }
       


    }
};

  
function Controller(data, view) {

   
    var setupEventListeners = function () {
       
        var DOM = view.getDOMstrings();        
        
        document.getElementById(DOM.btn).addEventListener('click', setP);
       


    }

    
    var setP = function () {
    
       
        var input;
        input = view.getInput();
        
        if ( input == '') {


            alert('Pleas dont leave your Email Blank! ' );


        } else {

        
         data.setEmail(input);
         view.setPara(data.getEmail());
         
        }
        

    }

   
    
    return {

        init: function () {

            setupEventListeners();
        }

    }

}

controller = new Controller(new Data(), new UI());
controller.init();
