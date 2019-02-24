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

function hideModal() {
	$(".modal-tint").css("display", "none");
}

function hideEpisodeModal() {
	$(".modal-no-tint").css("display", "none");
}