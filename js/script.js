var hide_discover = 0;

function hideDiscover() {
	if (hide_discover == 0) {
		$(".navpages-page.group.discover").css("border-bottom-color", "rgba(0,0,0,0)");
		$(".hidden.discover").css("max-height", "0px");
		hide_discover = 1;
		document.getElementById("discover-fa").classList.remove('fa-angle-up');
		document.getElementById("discover-fa").classList.add('fa-angle-down');
	} else {
		$(".navpages-page.group.discover").css("border-bottom-color", "rgba(0, 0, 0, 0.1)");
		$(".hidden.discover").css("max-height", "1000px");
		hide_discover = 0;
		document.getElementById("discover-fa").classList.remove('fa-angle-down');
		document.getElementById("discover-fa").classList.add('fa-angle-up');
	}
}

var hide_user = 0;

function hideUser() {
	if (hide_user == 0) {
		$(".navpages-page.group.user").css("border-bottom-color", "rgba(0,0,0,0)");
		$(".hidden.user").css("max-height", "0px");
		hide_user = 1;
		document.getElementById("user-fa").classList.remove('fa-angle-up');
		document.getElementById("user-fa").classList.add('fa-angle-down');
	} else {
		$(".navpages-page.group.user").css("border-bottom-color", "rgba(0, 0, 0, 0.1)");
		$(".hidden.user").css("max-height", "1000px");
		hide_user = 0;
		document.getElementById("user-fa").classList.remove('fa-angle-down');
		document.getElementById("user-fa").classList.add('fa-angle-up');
	}
}

var hide_admin = 0;

function hideAdmin() {
	if (hide_admin == 0) {
		$(".hidden.admin").css("max-height", "0px");
		hide_admin = 1;
		document.getElementById("admin-fa").classList.remove('fa-angle-up');
		document.getElementById("admin-fa").classList.add('fa-angle-down');
	} else {
		$(".hidden.admin").css("max-height", "1000px");
		hide_admin = 0;
		document.getElementById("admin-fa").classList.remove('fa-angle-down');
		document.getElementById("admin-fa").classList.add('fa-angle-up');
	}
}

var hide_season_one = 1;

function hideSeasonOne() {
	if (hide_season_one == 0) {
		$(".episode-container.season-one").css("max-height", "0px");
		hide_season_one = 1;
		document.getElementById("season-one-fa").classList.remove('fa-angle-up');
		document.getElementById("season-one-fa").classList.add('fa-angle-down');
	} else {
		$(".episode-container.season-one").css("max-height", "1000px");
		hide_season_one = 0;
		document.getElementById("season-one-fa").classList.remove('fa-angle-down');
		document.getElementById("season-one-fa").classList.add('fa-angle-up');
	}
}

var hide_season_two = 1;

function hideSeasonTwo() {
	if (hide_season_two == 0) {
		$(".episode-container.season-two").css("max-height", "0px");
		hide_season_two = 1;
		document.getElementById("season-two-fa").classList.remove('fa-angle-up');
		document.getElementById("season-two-fa").classList.add('fa-angle-down');
	} else {
		$(".episode-container.season-two").css("max-height", "1000px");
		hide_season_two = 0;
		document.getElementById("season-two-fa").classList.remove('fa-angle-down');
		document.getElementById("season-two-fa").classList.add('fa-angle-up');
	}
}

function showAquamanModal() {
	$(".aquaman.modal-tint").css("display", "block");
}

function showFlashModal() {
	$(".flash.modal-tint").css("display", "block");
}

function showFlashEpisodeModal() {
	$(".modal-no-tint").css("display", "block");
}

function showKiiaraModal() {
	$(".kiiara.modal-tint").css("display", "block");
}

function kiiaraModalRequestedBtn() {
	$(".modal-request-button.kiiara i").css("display", "none");
	$(".modal-request-button.kiiara").text("REQUESTED");
	$(".modal-request-button.kiiara").css("background", "#cc7b19");
}

function flashModalConfirmedBtn() {
	$(".modal-no-tint").css("display", "none");
	$(".modal-request-button.flash i").css("display", "none");
	$(".modal-request-button.flash").text("REQUESTED");
	$(".modal-request-button.flash").css("background", "#cc7b19");
}

var selected_count = 0;

function flashModalSelectedBtn() {
	if (selected_count == 0) {
		$(".modal-select-button.flash").text("UNSELECT ALL");
		selected_count = 1;
	} else {
		$(".modal-select-button.flash").text("SELECT ALL");
		selected_count = 0;
	}
}

function aquamanModalRequestedBtn() {
	$(".modal-request-button.aquaman i").css("display", "none");
	$(".modal-request-button.aquaman").text("REQUESTED");
	$(".modal-request-button.aquaman").css("background", "#cc7b19");
}

function aquamanRequestedBtn() {
	$(".request-button.aquaman i").css("display", "none");
	$(".request-button.aquaman").text("REQUESTED");
	$(".request-button.aquaman").css("background", "#cc7b19");
	if (document.getElementById("movie-request-dot").classList.contains('red')) {
		document.getElementById("movie-request-dot").classList.remove('red');
		document.getElementById("movie-request-dot").classList.add('yellow');
		$("#movie-request-status").text("Processing");
	}
}

function hideModal() {
	$(".modal-tint").css("display", "none");
}

function hideEpisodeModal() {
	$(".modal-no-tint").css("display", "none");
}