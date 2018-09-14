
	$(document).ready(function() {

		/* ===================================================================== */
		// Main menu

			/* functions for showing and hiding the main menu */

				function showMainmenu() {
					$("div#mainmenu").css( "width", "900px" );
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

			/* store a reference to the anchor element of the current menu item */

				var currentlink = $("div#mainmenu ul li.currentmenu a");
				//alert(currentlink);

			/* functions for styling menu items */

				function styleAsCurrent(targetAnchor) {
					$(targetAnchor).css( "color", "#000" );
					$(targetAnchor).css( "background-color", "#dce3e7" );
				}

				function styleAsPlain(targetAnchor) {
					//alert("style plain: " + targetAnchor);
					$(targetAnchor).css( "color", "#fff" );
					$(targetAnchor).css( "background-color", "transparent" );
				}

				styleAsPlain(currentlink);

			/* functions for showing and hiding submenus */

				function openSubmenu() {
					//show the submenu for this item
					$(this).parent().find('ul').css( "display", "block" );
				}

				function closeSubmenu() {
					//hide the submenu for this item
					$(this).parent().find('ul').css( "display", "none" );
				}

			/* functions to activate and deactivate a main menu item */

				function activateMenuitem() {

					//set this button to fire the deactivateMenuitem function next time it's clicked
					$(this).unbind("click");
					$(this).click(deactivateMenuitem);

					//declare the old currentmenu item to no longer be the current
					//$("div#mainmenu ul li.currentmenu").removeClass("currentmenu");
					//and then make it look plain
					styleAsPlain(currentlink);

					//declare this one just clicked to be the current menu item
					$(this).parent().addClass("currentmenu");

					//and then make it look current
					styleAsCurrent(this);

				}

				function deactivateMenuitem() {

					//set this button to fire the activateMenuitem function next time it's clicked
					$(this).unbind("click");
					$(this).click(activateMenuitem);

					//and declare it to no longer be the current
					$(this).parent().removeClass("currentmenu");
					//and then make it look plain
					styleAsPlain(this);

				}

			/* bind functions to main menu buttons */

				$("div#mainmenu ul li a").click(activateMenuitem);
				$("div#mainmenu ul li.currentsection a").unbind("click");
				$("div#mainmenu ul li.currentsection a").click(deactivateMenuitem);

			/* functions to activate and deactivate a main menu item */
			/*
				function activateMenuitem() {

					//set this button to fire the deactivateMenuitem function next time it's clicked
					$("div#mainmenu ul li.currentsection a").unbind("click");
					$("div#mainmenu ul li.currentsection a").click(deactivateMenuitem);

					//and declare the old currentmenu item to no longer be the current
					$("div#mainmenu ul li.currentmenu").removeClass("currentmenu");
					//and then make it look plain
					$("div#mainmenu ul li.currentmenu a").styleAsCurrent(this);

					//declare this one just clicked to be the current menu item
					$(this).parent().addClass("currentmenu");

					//and then make it look current
					styleAsCurrent(this);

				}

				function deactivateMenuitem() {

					//set this button to fire the activateMenuitem function next time it's clicked
					$("div#mainmenu ul li.currentsection a").unbind("click");
					$("div#mainmenu ul li.currentsection a").click(activateMenuitem);

					//and declare it to no longer be the current
					$("div#mainmenu ul li.currentmenu").removeClass("currentmenu");
					//and then make it look plain
					$("div#mainmenu ul li.currentmenu a").styleAsCurrent(this);

					//make it look plain
					styleAsPlain(this);

				}
				*/

			/* functions for showing and hiding submenus */

				function open() {
					/*
					alert('open');

					// turn on this line below if we want to auto-close all other submenus when opening a new one
					// $("nav ul ul").css( "display", "none" );
					//$("div#mainmenu ul li").removeClass("currentmenu");

					//remove styles from old currentmenu
					$("div#mainmenu ul li.currentmenu a").css( "color", "#fff" );
					$("div#mainmenu ul li.currentmenu a").css( "background-color", "transparent" );
					//and declare the old currentmenu item to no longer be the current
					$("div#mainmenu ul li.currentmenu").removeClass("currentmenu");

					//declare this one just clicked to be the new currentmenu
					$(this).parent().addClass("currentmenu");

					//style this one to look like the current
					styleAsCurrent(this);
					*/

					//show the submenu for this item
					$(this).parent().find('ul').css( "display", "block" );

					//set this button to fire the closeSubmenu function next time it's clicked
					$(this).unbind("click");
					$(this).click(closeSubmenu);

				}

				function close() {

					//alert('close');

					// $(this).parent().find('ul').css( "border-top", "0" );

					//remove styles from old currentmenu
					$("div#mainmenu ul li.currentmenu a").css( "color", "#fff" );
					$("div#mainmenu ul li.currentmenu a").css( "background-color", "transparent" );

					//declare this one to no longer be the currentmenu
					$(this).parent().removeClass("currentmenu");

					//style this one to look plain/uncurrent
					styleAsPlain(this);

					//hide the submenu for this item
					$(this).parent().find('ul').css( "display", "none" );

					//set this button to fire the openSubmenu function next time it's clicked
					$(this).unbind("click");
					$(this).click(openSubmenu);

				}


			/* ===================================================================== */
			//

	});
