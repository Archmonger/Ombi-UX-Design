function showAquamanModal() {
	$(".aquaman.modal-tint").css("display", "block");
}

function showFlashModal() {
	$(".flash.modal-tint").css("display", "block");
}

function flashModalRequestedBtn() {
	$(".modal-request-button.flash i").css("display", "none");
	$(".modal-request-button.flash").text("REQUESTED");
	$(".modal-request-button.flash").css("background", "#cc7b19");
}

function aquamanModalRequestedBtn() {
	$(".modal-request-button.aquaman i").css("display", "none");
	$(".modal-request-button.aquaman").text("REQUESTED");
	$(".modal-request-button.aquaman").css("background", "#cc7b19");
}

function hideModal() {
	$(".modal-tint").css("display", "none");
}