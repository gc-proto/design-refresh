
	$(document).ready(function() {

		/* ===================================================================== */
		// Main menu

			/* functions for showing and hiding the main menu */

				function showMainmenu() {
					$("div#mainmenu").css( "width", "900px" );
					$("button#showMainmenu").unbind("click");
					$("button#showMainmenu").click(hideMainmenu);
					$("button#toggleSearch").unbind("click");
					$("button#toggleSearch").click(hideMainmenu);
				}
				function hideMainmenu() {
					$("div#mainmenu").css( "width", "0" );
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
					// $("nav ul ul").css( "display", "none" );
					// $(this).parent().find('ul').css( "border-top", "1px solid #fff" );
					$(this).parent().find('ul').css( "display", "block" );
					$(this).unbind("click");
					$(this).click(closeSubmenu);
				}
				function closeSubmenu() {
					// $(this).parent().find('ul').css( "border-top", "0" );
					$(this).parent().find('ul').css( "display", "none" );
					$(this).unbind("click");
					$(this).click(openSubmenu);
				}

				$("div#mainmenu ul a").click(openSubmenu);
				$("div#mainmenu ul li.currentsection a").click(closeSubmenu);

			/* ===================================================================== */
			//

	});
