model = (function(){
    var btnData = {
        backhome: "back to home",
        btnClass: "btn",
        href: "../index.html",
    };

    return{
        btnData: btnData,
    }

})();

view = (function(){
    var DOMStrings = {
        btnid: "btnid",
        divid: "divid",
    };

    return{
        backhome: function(text, href, className){
            var createBack = document.createElement("a");

            createBack.text = text;
            createBack.id = DOMStrings.btnid;
            createBack.className = className; 
            createBack.href = href;
            document.getElementById(DOMStrings.divid).appendChild(createBack);
        },
    }
})();

controle = (function(model, view){

    var btnData = model.btnData;

    view.backhome(btnData.backhome, btnData.href, btnData.btnClass);

})(model, view);
