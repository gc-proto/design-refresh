
	$(document).ready(function() {

		/* ===================================================================== */
		// Main menu

			/* functions for showing and hiding the main menu */

				function showMainmenu() {
					$("div#mainmenu").css( "display", "block" );
					$("button#showMainmenu").unbind("click");
					$("button#showMainmenu").click(hideMainmenu);
				}
				function hideMainmenu() {
					$("div#mainmenu").css( "display", "none" );
					$("button#showMainmenu").unbind("click");
					$("button#showMainmenu").click(showMainmenu);
				}

			/* bind showMainmenu function to the main menu button */

				$("button#showMainmenu").click(showMainmenu);

			/* bind closeMainmenu function to the close button inside the menu panel */

				$("button#hideMainmenu").click(hideMainmenu);

			/*  */

				$("div#mainmenu ul li a").click(function() {
				   $("li.currentsection").removeClass("currentsection");
				   $(this).parent().addClass("currentsection");
				});











			/* ===================================================================== */
			//

	});
