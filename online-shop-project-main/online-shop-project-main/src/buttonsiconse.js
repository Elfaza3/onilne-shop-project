
 model = (function (){
	 
		visa = {
			title: "visa",
			href: "https://usa.visa.com/",
			id2: "lin",
			alt: "visa",
			src:  "images/visa.png",
			id: "visaa"
		};
		
		master = {
			title: "master",
			href: "http://www.mastercard.us",
			id2: "lin",
			alt: "master",
			src:  "images/mastercard.png",
			id: "masterr"
		};
		
		paypal = {
			title: "paypal",
			href: "https://www.paypal.com",
			id2: "lin",
			alt: "paypal",
			src:  "images/ssss.png",
			id: "payy"
		};
		
		
		return {
			visa: visa,
			master: master,
			paypal: paypal,
		}
		
	
})();


view =  (function (){
	
	
	return{
		
		setData: function(Data, type){
			var div = document.getElementById(type);
			var a = document.createElement('a');

			a.title = Data.title;
			a.href = Data.href;
			a.id = Data.id2;
			div.appendChild(a);	
			
			var img = document.createElement('img');
			img.src = Data.src;
			img.alt = Data.alt;
			img.id = Data.id;
			a.appendChild(img);
		},
		
	}
})();

 
 controle = (function(model, view){
	 
		var masterData = model.master;
		view.setData(masterData, "master");
		
		
		var visaData = model.visa;
		view.setData(visaData, "visa");
		
		var payData = model.paypal;
		view.setData(payData, "pay");
		
		
	 
 })(model, view);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 