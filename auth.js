// auth.js
(function () {
  // Ambil data login dari sessionStorage
  const savedData = sessionStorage.getItem("userCredential");

  // Daftar email yang diizinkan
  const allowedEmails = [
    "harapan.triple.x@gmail.com",
    "pkmpkmtrenggalek@gmail.com",
    "shevi.ardhian@gmail.com",
    "windayani0876@gmail.com",
    "adhitaayu0@gmail.com",
    "janah.esara14@gmail.com",
    "bkdewi@gmail.com",
    "murtirukiyandari@gmail.com",
    "lisaendrieni8@gmail.com",
    "rinafadlilah58@gmail.com",
    "luruh.setyoresmi@gmail.com",
    "liliksusanti04@gmail.com",
    "angraininovi84@gmail.com",
    "dienesayu@gmail.com",
    "studioku.refresh@gmail.com",
    "dn.sita.ris@gmail.com",
    "fitriarahmawati95@gmail.com",
    "puputwahyu981@gmail.com",
    "asmoro26@gmail.com",
    "anjartricahyaningsih22@gmail.com",
    "tatiksrisetyorahayu210308@gmail.com",
    "fidienia@gmail.com",
    "dwiyantiskp9@gmail.com",
    "titiksuwanti80@gmail.com",
    "baaltazard89@gmail.com",
    "hayuningoctavianti@gmail.com",
    "rizqiery@gmail.com",
    "ndewi912@gmail.com",
    "nurkolisaisy@gmail.com",
    "bidanparyati83@gmail.com",
    "yanu.prasetyo84@gmail.com",
    "dheararawr@gmail.com",
    "hayyinida@gmail.com",
    "nyastutik11@gmail.com",
    "rdewi8848@gmail.com",
    "yuyunwahyu919@gmail.com",
    "dewiandrikasmara@gmail.com",
    "anyuswahyono@gmail.com",
    "hayuyuda2@gmail.com",
    "farhaniputri@gmail.com",
    "lindadwirahayu12@gmail.com",
    "faqihamrullohhusein@gmail.com",
    "mubinahpkm@gmail.com",
    "seliyacitra@gmail.com",
    "mobilejkn.pusk.trenggalek@gmail.com",
    "marjiantomarjianto91@gmail.com",
    "kusuma.bkd88@gmail.com",
    "maratus233@gmail.com",
    "Kesgilutpkmtrenggalek@gmail.com",
    "windayani0876@gmail.com",
    "anggraininovi84@gmail.com",
    "labpuskesmastrenggalek@gmail.com",
    "tatiksukaryati71@gmail.com",
    "edohermawan1993@gmail.com",
    "roeky.andari@gmail.com",
  ];

  // Jika belum login → lempar balik ke index.html
  if (!savedData) {
    window.location.href = "index.html";
    return;
  }

  // Parse data login
  let data;
  try {
    data = JSON.parse(savedData);
  } catch (e) {
    sessionStorage.removeItem("userCredential");
    window.location.href = "index.html";
    return;
  }

  // Jika email tidak ada di whitelist → logout & redirect
  if (!allowedEmails.includes(data.email)) {
    sessionStorage.removeItem("userCredential");
    window.location.href = "index.html";
  }
})();
