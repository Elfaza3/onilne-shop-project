
function M() {

    
     var text1 = " We Nav Clothing are a designer clothing brand that";
     var text2=  "\n Designes, publish & sell our own Brand goods (NAV) via";
     var text3= "\n Internet, we are also especilized in all type of cloths, shoe and bags";
     var text4=   "\n- With Our best Regards, NAV Clothing Board members:-";

               
    var list = ["Hannibal Emter", "Marwan Algadi","Sofiane AL-Fazea","M.Bakcouch"];

    return {

       
            GetText: function (i) {
                if (i==0)return text1;
                  else if(i==1)return text2;
                       else if(i==2)return text3;
                                  else return text4;
           
        },
        GetContributers: function (i) {

            return list[i];
        }

    }

};


function V() {

    
    var DOMstrings = {

        para1: "p1",
        para2: "p2",
        para3: "p3",
        para4: "p4",
        list1: "li1",
        list2: "li2",
        list3: "li3",
        list4: "li4"

    }
    

    return {

        
        getDOMstrings: function () {
            return DOMstrings;
        },

        setDomStrings: function(Id,value){
            document.getElementById(Id).innerHTML=value;
        }
    }
};


function C(data, view) {
  
    var work = function (){
        
       var DOM = view.getDOMstrings(); 
       view.setDomStrings(DOM.para1,data.GetText(0));
       view.setDomStrings(DOM.para2,data.GetText(1));
       view.setDomStrings(DOM.para3,data.GetText(2));
       view.setDomStrings(DOM.para4,data.GetText(3));
       view.setDomStrings(DOM.list1,data.GetContributers(0));
       view.setDomStrings(DOM.list2,data.GetContributers(1));
       view.setDomStrings(DOM.list3,data.GetContributers(2));
       view.setDomStrings(DOM.list4,data.GetContributers(3));

      // document.getElementById(DOM.para).innerHTML=data.GetText(); 
    }


    return {

        init: function () {

            work();
        }

    }

}

c = new C(new M(), new V());

c.init();

