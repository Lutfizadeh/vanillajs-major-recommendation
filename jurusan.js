document.addEventListener('DOMContentLoaded', function () {
  const circles = document.querySelectorAll('.circle');
  const submitBtn = document.getElementById('submitBtn');
  const resetBtn = document.getElementById('resetBtn');
  const hasilContainer = document.getElementById('hasilContainer');
  const scoreDTE = document.getElementById('scoreDTE');
  const scoreDTIK = document.getElementById('scoreDTIK');
  const scoreDTME = document.getElementById('scoreDTME');
  const scoreDTMK = document.getElementById('scoreDTMK');
  const rekomendasiJurusan = document.getElementById('rekomendasiJurusan');

  let answers = {
    dte: [],
    dtik: [],
    dtme: [],
    dtmk: []
  };

  // Saat opsi (circle) diklik
  circles.forEach(circle => {
    circle.addEventListener('click', function () {
      const container = this.closest('.container');
      const questionId = container.id.replace('question', '');
      const value = parseInt(this.dataset.value);
      const category = this.dataset.category;

      // Unselect semua opsi dalam pertanyaan ini
      container.querySelectorAll('.circle').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');

      // Simpan jawaban sesuai kategori dan urutan
      answers[category][questionId - 1] = value;
    });
  });

  // Tombol "Lihat Hasil"
  submitBtn.addEventListener('click', function () {
    // Hitung skor total per departemen
    const score = {
      dte: (answers.dte.reduce((a, b) => a + (b || 0), 0)) * 5 / 100,
      dtik: (answers.dtik.reduce((a, b) => a + (b || 0), 0)) * 5 / 100,
      dtme: (answers.dtme.reduce((a, b) => a + (b || 0), 0)) * 5 / 100,
      dtmk: (answers.dtmk.reduce((a, b) => a + (b || 0), 0)) * 5 / 100
    };

    // Tampilkan nilai
    scoreDTE.textContent = score.dte.toFixed(2);
    scoreDTIK.textContent = score.dtik.toFixed(2);
    scoreDTME.textContent = score.dtme.toFixed(2);
    scoreDTMK.textContent = score.dtmk.toFixed(2);

    // Tentukan rekomendasi tertinggi
    const maxScore = Math.max(score.dte, score.dtik, score.dtme, score.dtmk);
    let recommendation = '';

    switch (maxScore) {
      case score.dte:
        recommendation = `<h3>Rekomendasi: Departemen Teknik Elektro</h3><p>Anda menunjukkan ketertarikan tinggi dalam bidang elektronika, kelistrikan, atau telekomunikasi industri.</p>`;
        break;
      case score.dtik:
        recommendation = `<h3>Rekomendasi: Departemen Teknik Informatika & Komputer</h3><p>Anda memiliki minat yang kuat dalam pemrograman, AI, atau sistem komputer.</p>`;
        break;
      case score.dtme:
        recommendation = `<h3>Rekomendasi: Departemen Teknik Mekanika & Energi</h3><p>Anda tampaknya cocok di bidang mekatronika, mesin, atau sistem energi.</p>`;
        break;
      case score.dtmk:
        recommendation = `<h3>Rekomendasi: Departemen Teknologi Multimedia Kreatif</h3><p>Anda menunjukkan potensi dalam bidang animasi, game, atau desain multimedia.</p>`;
        break;
      default:
        recommendation = `<h3>Tidak ada rekomendasi dominan</h3><p>Silakan isi lebih banyak pertanyaan untuk hasil yang lebih akurat.</p>`;
    }

    rekomendasiJurusan.innerHTML = recommendation;

    // Tampilkan hasil
    hasilContainer.style.display = 'block';
    submitBtn.style.display = 'none';
    hasilContainer.scrollIntoView({ behavior: 'smooth' });
  });

  // Tombol "Ulangi Kuesioner"
  resetBtn.addEventListener('click', function () {
    // Reset pilihan
    circles.forEach(c => c.classList.remove('selected'));

    // Reset data
    answers = {
      dte: [],
      dtik: [],
      dtme: [],
      dtmk: []
    };

    // Sembunyikan hasil
    hasilContainer.style.display = 'none';
    submitBtn.style.display = 'block';
    rekomendasiJurusan.innerHTML = '';

    // Scroll ke atas
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
