document.addEventListener('DOMContentLoaded', function() {
      const circles = document.querySelectorAll('.circle');
      const submitBtn = document.getElementById('submitBtn');
      const resetBtn = document.getElementById('resetBtn');
      const hasilContainer = document.getElementById('hasilContainer');
      const scoreElka = document.getElementById('scoreElka');
      const scoreElin = document.getElementById('scoreElin');
      const scoreTelkom = document.getElementById('scoreTelkom');
      const scoreTRI = document.getElementById('scoreTRI');
      const scoreSDT = document.getElementById('scoreSDT');
      const scoreCE = document.getElementById('scoreCE');
      const scoreIT = document.getElementById('scoreIT');
      const scoreMeka = document.getElementById('scoreMeka');
      const scoreSPE = document.getElementById('scoreSPE');
      const scoreMMB = document.getElementById('scoreMMB');
      const scoreGT = document.getElementById('scoreGT');
      const scoreTRM = document.getElementById('scoreTRM');
      const rekomendasiProdi = document.getElementById('rekomendasiProdi');
      
      let answers = {
        elka: [null, null, null, null, null],
        elin: [null, null, null, null, null],
        telkom: [null, null, null, null, null],
        tri: [null, null, null, null, null],
        sdt: [null, null, null, null, null],
        ce: [null, null, null, null, null],
        it: [null, null, null, null, null],
        meka: [null, null, null, null, null],
        spe: [null, null, null, null, null],
        mmb: [null, null, null, null, null],
        gt: [null, null, null, null, null],
        trm: [null, null, null, null, null]
      };
      
      circles.forEach(circle => {
        circle.addEventListener('click', function() {
          const parentContainer = this.closest('.container');
          const questionOptions = parentContainer.querySelectorAll('.circle');
          
          questionOptions.forEach(c => c.classList.remove('selected'));
          this.classList.add('selected');
          
          const value = parseInt(this.dataset.value);
          const category = this.dataset.category;
          
          // Determine which question was answered (1-6)
          const questionId = parentContainer.id.replace('question', '') - 1;
          
          switch (category) {
            case 'elka':
              answers.elka[questionId] = value;
              break;
            case 'elin':
              answers.elin[questionId] = value;
              break;
            case 'telkom':
              answers.telkom[questionId] = value;
              break;
            case 'tri':
              answers.tri[questionId] = value;
              break;
            case 'sdt':
              answers.sdt[questionId] = value;
              break;
            case 'ce':
              answers.ce[questionId] = value;
              break;
            case 'it':
              answers.it[questionId] = value;
              break;
            case 'meka':
              answers.meka[questionId] = value;
              break;
            case 'spe':
              answers.spe[questionId] = value;
              break;
            case 'mmb':
              answers.mmb[questionId] = value;
              break;
            case 'gt':
              answers.gt[questionId] = value;
              break;
            case 'trm':
              answers.trm[questionId] = value;
              break;
            default:
              console.error('Unknown category:', category);
          }
      })
      
      submitBtn.addEventListener('click', function() {
        // Check if all questions are answered
        let allAnswered = true;
        for (let category in answers) {
          for (let i = 0; i < answers[category].length; i++) {
            if (answers[category][i] === null) {
              allAnswered = false;
              break;
            }
          }
        }
        
        // if (!allAnswered) {
        //   alert('Mohon jawab semua pertanyaan terlebih dahulu!');
        //   return;
        // }
        
        // Calculate scores
        const elkaScore = answers.elka.reduce((a, b) => a + b, 0);
        const elinScore = answers.elin.reduce((a, b) => a + b, 0);
        const telkomScore = answers.telkom.reduce((a, b) => a + b, 0);
        const triScore = answers.tri.reduce((a, b) => a + b, 0);
        const sdtScore = answers.sdt.reduce((a, b) => a + b, 0);
        const ceScore = answers.ce.reduce((a, b) => a + b, 0);
        const itScore = answers.it.reduce((a, b) => a + b, 0);
        const mekaScore = answers.meka.reduce((a, b) => a + b, 0);
        const speScore = answers.spe.reduce((a, b) => a + b, 0);
        const mmbScore = answers.mmb.reduce((a, b) => a + b, 0);
        const gtScore = answers.gt.reduce((a, b) => a + b, 0);
        const trmScore = answers.trm.reduce((a, b) => a + b, 0);
        
        // Update results
        scoreElka.textContent = elkaScore;
        scoreElin.textContent = elinScore;
        scoreTelkom.textContent = telkomScore;
        scoreTRI.textContent = triScore;
        scoreSDT.textContent = sdtScore;
        scoreCE.textContent = ceScore;
        scoreIT.textContent = itScore;
        scoreMeka.textContent = mekaScore;
        scoreSPE.textContent = speScore;
        scoreMMB.textContent = mmbScore;
        scoreGT.textContent = gtScore;
        scoreTRM.textContent = trmScore;
        
        // Show recommendation
        let recommendation = '';
        console.log(elkaScore)
        let recom = Math.max(elkaScore, elinScore, telkomScore, triScore, sdtScore, ceScore, itScore, mekaScore, speScore, mmbScore, gtScore, trmScore);

        switch (recom) {
          case elkaScore:
            recommendation = '<h3>Rekomendasi : Teknik Elektronika</h3>';
            recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknik Elektronika.</p>';
            break;
          case elinScore:
            recommendation = '<h3>Rekomendasi : Teknik Elektro Industri</h3>';
            recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknik Elektro Industri.</p>';
            break;
          case telkomScore:
            recommendation = '<h3>Rekomendasi : Teknik Telekomunikasi</h3>';
            recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknik Telekomunikasi.</p>';
            break;
          case triScore:
            recommendation = '<h3>Rekomendasi : Teknik Transportasi</h3>';
            recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknik Transportasi.</p>';
            break;
          case sdtScore:
            recommendation = '<h3>Rekomendasi : Sistem Data Terdistribusi</h3>';
            recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Sistem Data Terdistribusi.</p>';
            break;
          case ceScore:
            recommendation = '<h3>Rekomendasi : Teknik Komputer</h3>';
            recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknik Komputer.</p>';
            break;
          case itScore:
            recommendation = '<h3>Rekomendasi : Teknologi Informasi</h3>';
            recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknologi Informasi.</p>';
            break;
          case mekaScore:
            recommendation = '<h3>Rekomendasi : Teknik Mekatronika</h3>';
            recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknik Mekatronika.</p>';
            break;
          case speScore:
            recommendation = '<h3>Rekomendasi : Sistem Perangkat Lunak</h3>';
            recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Sistem Perangkat Lunak.</p>';
            break;
          case mmbScore:
            recommendation = '<h3>Rekomendasi : Multimedia</h3>';
            recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Multimedia.</p>';
            break;
          case gtScore:
            recommendation = '<h3>Rekomendasi : Geodesi dan Geomatika</h3>';
            recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Geodesi dan Geomatika.</p>';
            break;
          case trmScore:
            recommendation = '<h3>Rekomendasi : Teknik Robotika dan Mekatronika</h3>';
            recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknik Robotika dan Mekatronika.</p>';
            break;
          default:
            recommendation = '<h3>Rekomendasi : Tidak ada rekomendasi yang jelas</h3>';
            recommendation += '<p>Berdasarkan jawaban Anda, tidak ada jurusan yang menonjol. Pertimbangkan untuk menjelajahi lebih lanjut tentang masing-masing jurusan.</p>';
        }
        if (elkaScore > informatikaScore) {
          recommendation = '<h3>Rekomendasi : Teknik Elektronika</h3>';
          recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknik Elektronika.</p>';
        } else if (informatikaScore > elkaScore) {
          recommendation = '<h3>Rekomendasi : Teknik Informatika</h3>';
          recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknik Informatika.</p>';
        } else {
          recommendation = '<h3>Rekomendasi : Keduanya Cocok</h3>';
          recommendation += '<p>Berdasarkan jawaban Anda, Anda memiliki minat yang seimbang terhadap Teknik elka dan Teknik Informatika. Pertimbangkan jurusan yang menggabungkan keduanya seperti Teknik Komputer atau Sistem Komputer.</p>';
        }
        
        rekomendasiJurusan.innerHTML = recommendation;
        
        // Show results
        hasilContainer.style.display = 'block';
        submitBtn.style.display = 'none';
        
        // Scroll to results
        hasilContainer.scrollIntoView({ behavior: 'smooth' });
      });
      
        resetBtn.addEventListener('click', function() {
          // Reset all selections
          circles.forEach(circle => circle.classList.remove('selected'));
          
          // Reset answers
          answers = {
            elka: [null, null, null, null, null],
            elin: [null, null, null, null, null],
            telkom: [null, null, null, null, null],
            tri: [null, null, null, null, null],
            sdt: [null, null, null, null, null],
            ce: [null, null, null, null, null],
            it: [null, null, null, null, null],
            meka: [null, null, null, null, null],
            spe: [null, null, null, null, null],
            mmb: [null, null, null, null, null],
            gt: [null, null, null, null, null],
            trm: [null, null, null, null, null]
          };
          
          // Hide results
          hasilContainer.style.display = 'none';
          submitBtn.style.display = 'block';
          
          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
    });