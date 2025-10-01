// Smooth scroll dengan jQuery
$(document).ready(function () {
  $(".nav-links a").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    );
  });

  // Efek hover untuk project-card
  $(".project-card").hover(
    function () {
      $(this).css("box-shadow", "0 8px 16px rgba(0,0,0,0.2)");
    },
    function () {
      $(this).css("box-shadow", "0 4px 8px rgba(0,0,0,0.1)");
    }
  );

  // Event form submit
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();

    if (name && email && message) {
      alert(`Terima kasih, ${name}! Pesan Anda berhasil terkirim.`);
      $(this)[0].reset();
    } else {
      alert("Mohon isi semua field.");
    }
  });
});
