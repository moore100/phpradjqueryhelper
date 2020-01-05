//this will just add shadows to the in[ut fields
$("input").addClass("shadow rounded");
//this will alter the side of the input table//
//$("input").addClass("col-md-5");

//this will add to all text areas you have
$("select").addClass("shadow rounded");
$("textarea").addClass("shadow  rounded");
//alter the fload direction here! can be either float-right or float-left
//var buttons ="float-right";
//$("button").addClass(""+ buttons +"");


//.....this will make the fields disappear after inputting anything in it ......//

//..make sure field is unique..// 

//$('#name').on('change', function(){   
	
	//$('#name').fadeOut();
//});
//......._____.......alter tables here......________.....//
//......._____.....add shadows to table rows here....._____........//
//if you wish to add to all just do this $("td").addClass("shadow").__.//

$("div").addClass("shadow rounded");

//.....alter table header from here........//

$("table").addClass("shadow-lg rounded");
//$("thead").addClass("table-header bg-light text-primary");
//_______available backgrounds classes_______//
/*

.overview-item--c1

.overview-item--c2 

.overview-item--c3 
    

.overview-item--c4 
*/
//$("body").addClass("overview-item--c3");
//$("input").addClass("overview-item--c4");
//---______you can add the classes to whatever you like_____--//

//._____do dependent displays here________./

/*$('#ctrl-country').on('change', function(){
  $("#ctrl-phone").hide();
   $("ctrl-label[for='phone']").hide();
   $("#ctrl-bwf_no").hide();
   $("label[for='ctrl-bwf_no']").hide();
     $("#ctrl-arrival").hide();
   $("label[for='arrival']").hide();
    $("#ctrl-aflight_no").hide();
    $("label[for='aflight_no']").hide();
    $("#ctrl-departure").hide();
    $("label[for='departure']").hide();
    $("#ctrl-flight_number").hide();
    $("label[for='flight_number']").hide();
});

$j('#country').on('change', function(){   
	
	if($('#ctrl-country').val().length>0){
       $("#ctrl-phone").show();
        $("label[for='phone']").show();

	    $("#ctrl-phone").val("");
	    $("#ctrl-dob").hide();
    $("#ctrl-bwf_no").hide();
    $("label[for='bwf_no']").hide();
     $("#ctrl-arrival").hide();
    $("label[for='arrival']").hide();
	    $("#ctrl-arrival").val(0);
    }
	});
$('#phone').on('change', function(){ 
	
	if($('#phone').val().length>0){
	$("#bwf_no").show();
	$("label[for='bwf_no']").show();
	$("#arrival").val("");
	 $("#arrival").hide();
	$("label[for='arrival']").hide();
	$("#arrival").val(0);
	 
}
	
});
$('#bwf_no').on('change', function(){ 
	
	if($('#bwf_no').val().length>0){
	$("#arrival").show();
	$("label[for='arrival']").show();
	$("#").val("");
	 $("#aflight_no").hide();
	 $("label[for='aflight_no']").hide();
	 $("#aflight_no").val(0);
	
	}
	
});
*/

//.___conditionals____//

//use whatever you have in a drop down
/*$('#country').on('change', function(){
if($('#country').val() == "Kenya"){	
 $('#arrival').hide();
 $('#departure').hide();
   $('#flight_number').hide();
    $('#aflight_no').hide();
else{
    $('#arrival').show();
  $('#departure').show();
  $('#flight_number').show();
    $('#aflight_no').show();
}
});*/
//.....--____-.....end.......--______-....//

//....---.....preventing right clicks....---.......//
$(document).ready(function () {
$(this).bind("contextmenu", function(e) {
e.preventDefault();
});
});
//.....---__--.....end.....--__--.....//

//..--adds a badge to the detail view description--.... commejnt if you dont want it//
//---use (badge badge-success,badge badge-danger,bagde badge-info)---...//
 $('h3').addClass('badge badge-success');

 //...---end----....//

 //----adds shadows to all the divs in the project---.//
 //,,,---comment if you dont want it---,,,//
   $('.row').addClass('shadow rounded');
//----__---end-------__-----//

//---font families available''''//
//font-family: 'Courier Prime', monospace;
//font-family: 'Ma Shan Zheng', cursive;
//font-family: 'Long Cang', cursive;
//font-family: 'Girassol', cursive;
//font-family: 'Anton', sans-serif;
//font-family: 'Indie Flower', cursive;
//font-family: 'Lobster', cursive;
//font-family: 'Pacifico', cursive; .....///
var fam="font-family: 'Long Cang', cursive;"
 $("td").attr("style", ""+fam+"");
  $("a").attr("style", ""+fam+"");
   $("button").attr("style", ""+fam+"");
   $("li").attr("style", ""+fam+"");
  $("thead").attr("style", ""+fam+"");
 $("p").attr("style", ""+fam+"");
 $("h1").attr("style",""+fam+"");
 $("h2").attr("style", ""+fam+"");
 $("h3").attr("style", ""+fam+"");
 $("h4").attr("style", ""+fam+"");
 $("h5").attr("style", ""+fam+"");
 $("h6").attr("style", ""+fam+"");
 $("label").attr("style", ""+fam+"");
 //,,,--_____-end-_______--,,,//


//,,--___,hides all buttons,,--__,,//
//$('button').hide();

//___________use this this hide specific table rows______//
//$('.classname of that row').hide();
//_______end__________//

//______use this to disable whatrever you want//
//may be button,input,textarea//

//$("button").prop('disabled', true);


//quick maths//


//___________this adds two fields and displays------//


//-----the totals before saving the records-----//
//--to use it , just add the fields you want to do the math---//
//---note that the fields must be unique , meaning you should --/
//---not have other fields with the same name in the projects --/
//--effect will occur in both areas--//
/*$('#field betwen totals field and first field').on('input', function(){ 
	
	var f1 = $('#first field').val();
	var f2 = $('#field betwen total and first field').val();
	f1=parseInt(f1);
	f2=parseInt(f2);
	$('#totals field').val(f1+f2);	
});
        */
	//++++++++________end______++++++++//

$('aside').addClass('overview-item--c1');
$('body').addClass('overview-item--c3');