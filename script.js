// Menangani pengiriman formulir
document
  .getElementById("transaksiForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    // Mengambil nilai dari input
    const ramenSelect = document.getElementById("namaRamen");
    const namaRamen = ramenSelect.value;
    const jumlah = parseInt(document.getElementById("jumlah").value);
    const hargaPerPorsi = parseInt(
      ramenSelect.options[ramenSelect.selectedIndex].getAttribute("data-harga")
    );
    const totalHarga = jumlah * hargaPerPorsi;

    // Mendapatkan tanggal dan waktu saat ini
    const tanggal = new Date().toLocaleString();

    // Menambahkan data ke tabel
    const tbody = document.getElementById("daftarTransaksi");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${tbody.children.length + 1}</td>
        <td>${namaRamen}</td>
        <td>${jumlah}</td>
        <td>Rp ${hargaPerPorsi}</td>
        <td>Rp ${totalHarga}</td>
        <td>${tanggal}</td>
        <td>Diproses</td>
    `;
    tbody.appendChild(row);

    // Mengosongkan input setelah disimpan
    document.getElementById("transaksiForm").reset();
  });

const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active"); // Menambahkan atau menghapus kelas 'active'
});

// Menangani pengiriman form
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai username dan password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Logika autentikasi sederhana (ganti dengan logika yang sesuai)
    if (username === "admin" && password === "password") {
      // Jika login berhasil, arahkan ke halaman beranda
      window.location.href = "index.html"; // Ganti dengan halaman beranda Anda
    } else {
      alert("Username atau password salah!");
    }
  });
