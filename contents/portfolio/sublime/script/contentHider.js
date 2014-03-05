var	LAH,
	LCH,
	LPH,
	LSH,
	MAH,
	MCH,
	MPH,
	MSH,
	RAH,
	RCH,
	RPH,
	RSH,
	TAH,
	TCH,
	TPH,
	TSH;
	
function	updateSizes	()			{
										LAH	=	$("#leftAbout").height();
										LCH	=	$("#leftContact").height();
										LPH	=	$("#leftPortfolio").height();
										LSH	=	$("#leftStaff").height();
										MAH	=	$("#middleAbout").height();
										MCH	=	$("#middleContact").height();
										MPH	=	$("#middlePortfolio").height();
										MSH	=	$("#middleStaff").height();
										RAH	=	$("#rightAbout").height();
										RCH	=	$("#rightContact").height();
										RPH	=	$("#rightPortfolio").height();
										RSH	=	$("#rightStaff").height();
										
										/* for cases where there are no columns, e.g. a mobile screen, this number will be bigger than  */
										//'T' for total
										TAH =  $("#rightAbout").offset().top 		+ $("#rightAbout").height() 	 - $("#leftAbout").offset().top;
										TCH =  $("#rightContact").offset().top 		+ $("#rightContact").height()   - $("#leftContact").offset().top;										 
										TPH =  $("#rightPortfolio").offset().top 	+ $("#rightPortfolio").height() - $("#leftPortfolio").offset().top;
										TSH =  $("#rightStaff").offset().top 		+ $("#rightStaff").height()  	 - $("#leftStaff").offset().top;										 
										
									};




jQuery(document).ready(function()	{
										$(".content").removeAttr('filter');
										$(".content").hide();

									}
					);
