
	$(document).ready(function() {


		$('#click_jobs, #click_imm, #click_travel, #click_business, #click_benefits, #click_health, #click_taxes, #click_enviro, #click_defence, #click_defence, #click_culture, #click_police, #click_transport, #click_transport, #click_world, #click_money, #click_science').click(function() {

		      $("i", this).toggleClass("fa-caret-right fa-caret-down");
		  });

		$('#click_jobs_mr').click(function() {
		    $('#mr_jobs').toggleClass("hidden visible");
		    $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_imm_mr').click(function() {
		  $('#mr_imm').toggleClass("hidden visible");
		  $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_travel_mr').click(function() {
		  $('#mr_travel').toggleClass("hidden visible");
		  $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_business_mr').click(function() {
		  $('#mr_business').toggleClass("hidden visible");
		  $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_benefits_mr').click(function() {
		  $('#mr_benefits').toggleClass("hidden visible");
		  $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_health_mr').click(function() {
		  $('#mr_health').toggleClass("hidden visible");
		  $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_taxes_mr').click(function() {
		  $('#mr_taxes').toggleClass("hidden visible");
		  $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_enviro_mr').click(function() {
		  $('#mr_taxes').toggleClass("hidden visible");
		  $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_defence_mr').click(function() {
		  $('#mr_defence').toggleClass("hidden visible");
		  $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_culture_mr').click(function() {
		  $('#mr_culture').toggleClass("hidden visible");
		  $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_police_mr').click(function() {
		  $('#mr_police').toggleClass("hidden visible");
		  $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_transport_mr').click(function() {
		  $('#mr_transport').toggleClass("hidden visible");
		  $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_world_mr').click(function() {
		  $('#mr_world').toggleClass("hidden visible");
		  $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_money_mr').click(function() {
			$('#mr_money').toggleClass("hidden visible");
			$("i", this).toggleClass("fa-caret-right fa-caret-down");

		});

		$('#click_science_mr').click(function() {
		  $('#mr_science').toggleClass("hidden visible");
		  $("i", this).toggleClass("fa-caret-right fa-caret-down");

		});


		/* ===================================================================== */
		// Search form

			/* functions for showing and hiding the search form */

				function showSearchform() {
					$("div.searchform").css("display","block");
					$(this).unbind("click");
					$(this).click(hideSearchform);
				}
				function hideSearchform() {
					$("div.searchform").css("display","none");
					$(this).unbind("click");
					$(this).click(showSearchform);
				}


		/* ===================================================================== */
		// Main menu

			/* functions for showing and hiding the main menu */

				function showMainmenu() {
					$("div#mainmenu").removeClass( "wb-inv" );
					$("li#nav-highlight").removeClass( "wb-inv" );
					$("li#nav-normal").addClass( "wb-inv" );
					$("button#showMainmenu").unbind("click");
					$("button#showMainmenu").click(hideMainmenu);
					$("button#toggleSearch").unbind("click");
					$("button#toggleSearch").click(hideMainmenu);
				}
				function hideMainmenu() {
					$("div#mainmenu").addClass( "wb-inv" );
					$("li#nav-normal").removeClass( "wb-inv" );
					$("li#nav-highlight").addClass( "wb-inv" );
					$("button#showMainmenu").unbind("click");
					$("button#showMainmenu").click(showMainmenu);
					$("button#toggleSearch").unbind("click");
					$("button#toggleSearch").click(showMainmenu);
				}

			/* bind showMainmenu function to the main menu button */

				$("button#showMainmenu").click(showMainmenu);
				$("button#toggleSearch").click(showMainmenu);

			/* bind closeMainmenu function to the close button inside the menu panel */

				$("button#hideMainmenu").click(hideMainmenu);

			/* functions for showing and hiding submenus */

				function openSubmenu() {
					// turn on this line below if we want to auto-close all other submenus when opening a new one
					$("nav ul ul").css( "display", "none" );
					$(this).parent().find('ul').css( "border-top", "1px solid #fff" );
					$(this).parent().find('ul').css( "display", "block" );
					$(this).unbind("click");
					$(this).click(closeSubmenu);
					return false;
				}
				function closeSubmenu() {
					$(this).parent().find('ul').css( "border-top", "0" );
					$(this).parent().find('ul').css( "display", "none" );
					$(this).unbind("click");
					$(this).click(openSubmenu);
					return false;
				}

				$("div#mainmenu ul a").click(openSubmenu);

		/* ===================================================================== */
		// Theme menu

			/* functions for showing and hiding the theme menu */

				function showThememenu() {
					$("div.thememenu").css( "display", "block" );
					$("button#showThememenu").unbind("click");
					$("button#showThememenu").click(hideThememenu);
				}
				function hideThememenu() {
					$("div.thememenu").css( "display", "none" );
					$("button#showThememenu").unbind("click");
					$("button#showThememenu").click(showThememenu);
				}

			/* bind showThememenu function to the theme menu button */

				$("button#showThememenu").click(showThememenu);

			/* bind closeThememenu function to the close button inside the menu panel */

				$("button#hideThememenu").click(hideThememenu);

			/* functions for showing and hiding submenus */

				/*

				function openThemeSubmenu() {
					// turn on this line below if we want to auto-close all other submenus when opening a new one
					// $("nav ul ul").css( "display", "none" );
					$(this).parent().find('ul').css( "border-top", "1px solid #fff" );
					$(this).parent().find('ul').css( "display", "block" );
					$(this).unbind("click");
					$(this).click(closeThemeSubmenu);
				}
				function closeSubmenu() {
					$(this).parent().find('ul').css( "border-top", "0" );
					$(this).parent().find('ul').css( "display", "none" );
					$(this).unbind("click");
					$(this).click(openThemeSubmenu);
				}

				$("div#thememenu ul a").click(openThemeSubmenu);

				*/

			/* ===================================================================== */
			//



	});
