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
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentPage = 1;
    const questionsPerPage = 15;
    const totalPages = 4;
    
    let answers = {
    elka: [null, null, null, null, null], // Teknik Elektronika
    elin: [null, null, null, null, null], // Teknik Elektro Industri
    telkom: [null, null, null, null, null], // Teknik Telekomunikasi
    tri: [null, null, null, null, null], // Teknologi Rekayasa Internet
    sdt: [null, null, null, null, null], // Sains Data Terapan
    ce: [null, null, null, null, null], // Teknik Komputer
    it: [null, null, null, null, null], // Teknik Informatika
    meka: [null, null, null, null, null], // Teknik Mekatronika
    spe: [null, null, null, null, null], // Sistem Pembangkit Energi
    mmb: [null, null, null, null, null], // Teknologi Multimedia Broadcasting
    gt: [null, null, null, null, null], // Teknologi Game
    trm: [null, null, null, null, null] // Teknologi Rekayasa Multimedia
};
    
    // Function to update question visibility based on current page
    function updatePageVisibility() {
        const allQuestions = document.querySelectorAll('.container.question');
        allQuestions.forEach((question, index) => {
            const questionPage = Math.floor(index / questionsPerPage) + 1;
            if (questionPage === currentPage) {
                question.classList.add('active');
            } else {
                question.classList.remove('active');
            }
        });
        
        // Update button states
        prevBtn.disabled = currentPage === 1;
        nextBtn.style.display = currentPage === totalPages ? 'none' : 'inline-block';
        submitBtn.style.display = currentPage === totalPages ? 'block' : 'none';
    }
    
    // Initialize page
    updatePageVisibility();
    
    // Previous button click
    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updatePageVisibility();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    // Next button click
    nextBtn.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            updatePageVisibility();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            const parentContainer = this.closest('.container');
            const questionOptions = parentContainer.querySelectorAll('.circle');
            
            questionOptions.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            
            const value = parseInt(this.dataset.value);
            const category = this.dataset.category;
            
            // Determine which question was answered (1-60)
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
        });
    });
    
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
        const elkaScore = answers.elka.reduce((a, b) => a + b, 0) / 5 / 7 * 100;
        const elinScore = answers.elin.reduce((a, b) => a + b, 0) / 5 / 7 * 100;
        const telkomScore = answers.telkom.reduce((a, b) => a + b, 0) / 5 / 7 * 100;
        const triScore = answers.tri.reduce((a, b) => a + b, 0) / 5 / 7 * 100;
        const sdtScore = answers.sdt.reduce((a, b) => a + b, 0) / 5 / 7 * 100;
        const ceScore = answers.ce.reduce((a, b) => a + b, 0) / 5 / 7 * 100;
        const itScore = answers.it.reduce((a, b) => a + b, 0) / 5 / 7 * 100;
        const mekaScore = answers.meka.reduce((a, b) => a + b, 0) / 5 / 7 * 100;
        const speScore = answers.spe.reduce((a, b) => a + b, 0) / 5 / 7 * 100;
        const mmbScore = answers.mmb.reduce((a, b) => a + b, 0) / 5 / 7 * 100;
        const gtScore = answers.gt.reduce((a, b) => a + b, 0) / 5 / 7 * 100;
        const trmScore = answers.trm.reduce((a, b) => a + b, 0) / 5 / 7 * 100;
        
        // Update results
        scoreElka.textContent = elkaScore + "%";
        scoreElin.textContent = elinScore + "%";
        scoreTelkom.textContent = telkomScore + "%";
        scoreTRI.textContent = triScore + "%";
        scoreSDT.textContent = sdtScore + "%";
        scoreCE.textContent = ceScore + "%";
        scoreIT.textContent = itScore + "%";
        scoreMeka.textContent = mekaScore + "%";
        scoreSPE.textContent = speScore + "%";
        scoreMMB.textContent = mmbScore + "%";
        scoreGT.textContent = gtScore + "%";
        scoreTRM.textContent = trmScore + "%";
        
        // Show recommendation
        let recommendation = '';
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
                recommendation = '<h3>Rekomendasi : Teknik Rekayasa Internet</h3>';
                recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknik Rekayasa Internet.</p>';
                break;
            case sdtScore:
                recommendation = '<h3>Rekomendasi : Sains Data Terapan</h3>';
                recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Sains Data Terapan.</p>';
                break;
            case ceScore:
                recommendation = '<h3>Rekomendasi : Teknik Komputer</h3>';
                recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknik Komputer.</p>';
                break;
            case itScore:
                recommendation = '<h3>Rekomendasi : Teknik Informatika</h3>';
                recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknik Informatika.</p>';
                break;
            case mekaScore:
                recommendation = '<h3>Rekomendasi : Teknik Mekatronika</h3>';
                recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknik Mekatronika.</p>';
                break;
            case speScore:
                recommendation = '<h3>Rekomendasi : Sistem Pembangkit Energi</h3>';
                recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Sistem Pembangkit Energi.</p>';
                break;
            case mmbScore:
                recommendation = '<h3>Rekomendasi : Teknologi Multimedia Broadcasting</h3>';
                recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknologi Multimedia Broadcasting.</p>';
                break;
            case gtScore:
                recommendation = '<h3>Rekomendasi : Teknologi Game</h3>';
                recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknologi Game.</p>';
                break;
            case trmScore:
                recommendation = '<h3>Rekomendasi : Teknologi Rekayasa Multimedia</h3>';
                recommendation += '<p>Berdasarkan jawaban Anda, Anda tampaknya lebih cocok untuk jurusan Teknologi Rekayasa Multimedia.</p>';
                break;
            default:
                recommendation = '<h3>Rekomendasi : Tidak ada rekomendasi yang jelas</h3>';
                recommendation += '<p>Berdasarkan jawaban Anda, tidak ada jurusan yang menonjol. Pertimbangkan untuk menjelajahi lebih lanjut tentang masing-masing jurusan.</p>';
        }
        
        rekomendasiProdi.innerHTML = recommendation;
        
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
        currentPage = 1;
        updatePageVisibility();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});