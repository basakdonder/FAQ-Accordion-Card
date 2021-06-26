$(".question__panel").click(function () {
  console.log("test");
  let value = this.getAttribute("id").substring(2);
  let selected_qp_value = "qp" + value;
  let selected_ap_value = "ap" + value; // selected panel values

  for (var i = 1; i <= 5; i++) {
    let qp_value = "qp" + i;
    let ap_value = "ap" + i;

    if (selected_qp_value != qp_value) {
      $("#" + qp_value).css("font-weight", 400);
      $("#" + qp_value + " .arrow__icon").removeClass("arrow__rotate");
    } else {
      $("#" + selected_qp_value).css("font-weight", 700);
      $("#" + selected_qp_value + " .arrow__icon").addClass("arrow__rotate");
    }

    if (selected_ap_value != ap_value) {
      $("#" + ap_value).slideUp();
    } else {
      $("#" + selected_ap_value).slideDown();
    }
  }
});
