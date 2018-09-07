
	$(document).ready(function() {

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

			/* bind showSearchform function to the search button */

				$("button#toggleSearch").click(showSearchform);

		/* ===================================================================== */
		// Main menu

			/* functions for showing and hiding the main menu */

				function showMainmenu() {
					$("div#mainmenu").css( "width", "400px" );
					$("button#showMainmenu").unbind("click");
					$("button#showMainmenu").click(hideMainmenu);
				}
				function hideMainmenu() {
					$("div#mainmenu").css( "width", "0" );
					$("button#showMainmenu").unbind("click");
					$("button#showMainmenu").click(showMainmenu);
				}

			/* bind showMainmenu function to the main menu button */

				$("button#showMainmenu").click(showMainmenu);

			/* bind closeMainmenu function to the close button inside the menu panel */

				$("button#hideMainmenu").click(hideMainmenu);

			/* functions for showing and hiding submenus */

				function openSubmenu() {
					// turn on this line below if we want to auto-close all other submenus when opening a new one
					// $("nav ul ul").css( "display", "none" );
					$(this).parent().find('ul').css( "border-top", "1px solid #fff" );
					$(this).parent().find('ul').css( "display", "block" );
					$(this).unbind("click");
					$(this).click(closeSubmenu);
				}
				function closeSubmenu() {
					$(this).parent().find('ul').css( "border-top", "0" );
					$(this).parent().find('ul').css( "display", "none" );
					$(this).unbind("click");
					$(this).click(openSubmenu);
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
