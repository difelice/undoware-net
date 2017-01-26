var	hashFirst 	= true;
var	buttonID	= ''; charset="utf-8"
var	glassID		= '';
var	leftID 		= '';
var	middleID	= '';
var	rightID		= '';



var clearPointers, 
	setPointers,  
	updateButtonClass,
	animateHashChangeFade,
	animateHashChangeShow,
	hashFalsifier,
	snugAsABug,
	disappearMoi;
	

function isiPad(){
    return (navigator.platform.indexOf("iPad") != -1);
}


jQuery(document).ready(function()	{	
										$.toggle3DByDefault();
										
										/* this activates the gallery plugin. 
											the deeplinking:false prevents changes to the hash fragment, which would interfere with this script.*/
											

										$("a[rel^='prettyPhoto']").colorbox({current:null, 
																			 maxWidth:'97%',
																			 maxHeight:'97%',
																			 scalePhotos:true,
																			 opacity: 0.35, 
																			 rel: 'nofollow',
																			 arrowKey:false,
																			 loop:false,
																			 preloading:true,
																			 
																			 returnFocus:true,
																			 previous:null, next:null, close:"close"});

										$('a').mouseup(
														function()	{
																		this.blur();
																	}
														);
														
										
										
										//	Check is there is a hash fragment
											if			(window.location.hash == '')	{
																							hashFirst		=	true;
																						}
												else
																						{
																							hashFirst		=	false;
																						}
																						
										//	Give hash if there is none, after all (hashFirst = true) routines are completed
											function	makeFirstHash()	{
																			location.hash 	=	'#about';
																		};
												
										var			buttons	=			{
																			1		:	'#navAbout',
																			2		:	'#navContact',
																			3		:	'#navPortfolio',
																			4		:	'#navStaff'
																		};

										clearPointers = function()		{
																			buttonID	=	'';
																			glassID		=	'';
																			leftID 		=	'';
																			middleID	=	'';
																			rightID		=	'';
																		}

										setPointers = function()		{	
																			updateSizes();
																			var ie_margin = (IE<9) ? 30 : 0; 
																			//	Set pointer to correct document sets
																				
																				
																				if				(location.hash == '#about')		{
																																	buttonID	=	buttons[1];
																											
																																	glassID		=	"#glassAbout";
																																	leftID		=	"#leftAbout";
																																	middleID	=	"#middleAbout";
																																	rightID		=	"#rightAbout";
																																	
																																	
																																	return		Math.max(LAH, MAH, RAH,TAH) + ie_margin;
																																}

																					else if		(location.hash == '#contact')	{
																																	buttonID	=	buttons[2];
																											
																																	glassID		=	"#glassContact";
																																	leftID		=	"#leftContact";
																																	middleID	=	"#middleContact";
																																	rightID		=	"#rightContact";
																																	
																																	return 	Math.max(LCH, MCH, RCH,TCH) + ie_margin;
																																}
																
																					else if		(location.hash == '#portfolio')	{
																																	buttonID	=	buttons[3];
																											
																																	glassID		=	"#glassPortfolio";
																																	leftID		=	"#leftPortfolio";
																																	middleID	=	"#middlePortfolio";
																																	rightID		=	"#rightPortfolio";
																																	
																																	return		Math.max(LPH, MPH, RPH,TPH) + ie_margin;
																																}
																
																					else if		(location.hash == '#staff')		{
																																	buttonID	=	buttons[4];
																											
																																	glassID		=	"#glassStaff";
																																	leftID		=	"#leftStaff";
																																	middleID	=	"#middleStaff";
																																	rightID		=	"#rightStaff";
																																	
																																	return	Math.max(LSH, MSH, RSH,TSH) + ie_margin;
																																};
																		}

									updateButtonClass = function()		{
																			//	Find which button is NOT active, and alter their CSS
																				for	(b in buttons)	{
																										if	(buttons[b] !== buttonID)	{
																																			$(buttons[b]).removeClass("activo");
																																		}
																									};


																			//	Alter active button's CSS
																				$(buttonID).addClass("activo");
																		}

									animateHashChangeFade = function()	{
																			if (IE <9 || $.browser.mobile || isiPad()) {
																				$(glassID).hide();

																				$(leftID).hide();

																				$(middleID).hide();

																				$(rightID).hide();
																			} else {
																				$(glassID).hide("fade", 1000);

																				$(leftID).hide("drop", {direction	: "left"}, 1000);

																				$(middleID).hide("blind", 1000);
													
																				$(rightID).hide("drop", {direction	: "right"}, 1000);
																			}

																		}


									animateHashChangeShow = function()	{	
																			//IE has a known bug with antialiasing and animations in JQuery
																			if (IE<9 || $.browser.mobile || isiPad()) {
																																						//	Animations & other end actions
																				$(glassID).delay(500).show();
															
																				$(leftID).delay(500).show();
															
																				$(middleID).delay(500).show();											
															
																				$(rightID).delay(500).show();
																			} else { 
																			//	Animations & other end actions
																				$(glassID).delay(500).show("fade", 500);
															
																				$(leftID).delay(500).show("drop", {direction : "left"}, 500);
															
																				$(middleID).delay(500).show("blind", 500);											
															
																				$(rightID).delay(500).show	("drop", {direction : "right"}, 500);
																			}

																		};

									hashFalsifier = function()			{
																			hashFirst	=	false;
																		}
																	
									snugAsABug = function()			{
																			var newHeight = setPointers();

																			var	everythingElseHeight	=	( $("#footer").height() + $("#glass").height()  );
																			var	calcHeight;
																			//	Adjust outer wrapper to fit new list snuggly
																				//	This selects for the content being longer than the window
																					if		( ( $(window).height() ) < ( newHeight + everythingElseHeight ) )
																																								{
																																		                        	calcHeight	=	newHeight + 50;
																																	                        	}
	
																				//	This selects for the window being longer than the content (extra display space)
																						else											
																																								{
																																									calcHeight	=	( ( $(window).height() ) - everythingElseHeight + 50 );
																																								}
																			
																				if		( ( $("#PostFold").height() ) < 20 )
																																								{
																																		                        	$("#PostFold").css("height", calcHeight);

																																								}
																				else
																																								{
																																		                        	$("#PostFold").animate(
																																					                        							{height	: calcHeight },
																																					                        							1200,
																																					                        							'easeOutQuad'
																																					                        						);
																																		                       
																																								}															
																		}
									disappearMoi = function	()
																		{
																			animateHashChangeFade();
																			clearPointers();
																			snugAsABug();
																		}
					
										$(window).resize(				
															function()	{	
																			snugAsABug();
																		}
														);
														
										//	Bind event to window
											$(window).hashchange	(
																		function()	{
																						

																						
																					//	Actually do stuff :D
																						if		(hashFirst 	===	false)	{	//	Usual operations
																																$.when	(
																																			disappearMoi()
																																		)
																																.done	(
																																			updateButtonClass(),
																																			animateHashChangeShow()
																																		);
																														}
																						
																							else						{	//	When load without user-specified #hash
																																$.when	(
																																			snugAsABug(),
																					 														hashFalsifier()
																																		)
																																.done	(
																																			makeFirstHash()
																																		);
																																		
					
																						}
																						if (location.hash === '#portfolio') { 
																							$(".gallery-column img").trigger('skew'); //add randomness	
																						}

																			}
																	);

										$(window).resize( snugAsABug );
										//	Trigger the event (useful on page load)
											$(window).hashchange(); 
									}
								);
								

				
				

				

