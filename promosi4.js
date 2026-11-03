
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname !== '/promotion') return;

    const promoStyle = `
    <style>
        .promo-container-main { width:100%; max-width:650px; margin:20px auto; background:#000; color:#fff; border:2px solid #faa105; border-radius:15px; overflow:hidden; font-family:Arial,sans-serif; box-shadow:0 0 3px #ffe900; }
        .promo-block { width:100%; margin:0; padding:0; }
        .collapsible { width:100%; display:block; padding:0; border:0; background:transparent; cursor:pointer; line-height:0; }
        .collapsible img { width:100%; height:auto; display:block; border:0; transition:filter .2s; }
        .collapsible:hover img { filter:brightness(1.1); }
        .collapsible:focus-visible { outline:2px solid #ffe900; outline-offset:-2px; }
        .promo-content { display:none; padding:18px 17px 22px; background:#161616; border-top:1px solid #faa105; border-bottom:1px solid #faa105; font-size:13px; line-height:1.75; }
        .promo-content h2 { color:#ffd700; text-align:center; font-size:18px; line-height:1.4; margin:0 0 15px; }
        .promo-content h3 { color:#ffd700; font-size:14px; margin:15px 0 8px; padding-bottom:5px; border-bottom:1px solid #555; }
        .promo-content ul { padding-left:19px; margin:7px 0 0; }
        .promo-content li { margin:0 0 9px; padding-left:2px; }
        .promo-content strong { color:#ffe46b; }
        .promo-note { margin:12px 0; padding:11px 12px; background:#242424; border-left:3px solid #faa105; border-radius:5px; }
        .promo-table { width:100%; border-collapse:collapse; margin:12px 0; text-align:center; }
        .promo-table th,.promo-table td { border:1px solid #775b21; padding:9px 7px; }
        .promo-table th { background:#3a2b10; color:#ffd700; }
        .promo-table td { background:#202020; }
        @media(max-width:480px) { .promo-container-main { max-width:96%; margin:10px auto; border-radius:10px; } .promo-content { padding:15px 12px 19px; font-size:12.5px; } .promo-content h2 { font-size:16px; } }
    </style>`;

    const promos = [
        {
            image: 'https://polesimg.com/images/bonus-new-member-polestoto.jpg',
            title: 'BONUS NEW MEMBER 30%',
            html: `
                <h3>Syarat &amp; Ketentuan</h3>
                <ul>
                    <li>Khusus untuk permainan <strong>SLOT GAMES</strong>.</li>
                    <li>Minimal deposit <strong>Rp100.000,-</strong>.</li>
                    <li>Bonus sebesar <strong>30%</strong> dari nilai deposit, dengan maksimal bonus <strong>Rp300.000,-</strong>.</li>
                    <li>Batas klaim maksimal <strong>2 jam</strong> setelah deposit. Jika melewati batas waktu, bonus hangus.</li>
                    <li>Bonus <strong>tidak dapat diklaim</strong> apabila saldo akun sudah habis atau sudah dimainkan.</li>
                    <li>Dilarang menggunakan lebih dari satu akun (multiple user) untuk mengklaim bonus.</li>
                    <li>Dilarang menggunakan IP address yang sama atau VPN, SSH, Proxy, dan Tunneling untuk mendapatkan promo.</li>
                    <li>Bonus tidak dapat ditarik sebelum mencapai <strong>8x turnover</strong> dari total Deposit + Bonus.</li>
                </ul>
                <div class="promo-note"><strong>Contoh turnover:</strong> Deposit Rp100.000 + Bonus 30% Rp30.000 = Rp130.000 × 8 = <strong>Rp1.040.000</strong>.</div>
                <ul>
                    <li>Minimum Withdraw (WD) adalah <strong>3x</strong> dari jumlah Deposit + Bonus.</li>
                </ul>
                <div class="promo-note"><strong>Contoh minimum WD:</strong> (Rp100.000 + Rp30.000) × 3 = <strong>Rp390.000</strong>.</div>
                <ul>
                    <li>Turnover adalah total perputaran taruhan selama bermain, baik menang maupun kalah, bukan jumlah saldo yang tersisa.</li>
                    <li>Promo hanya dapat digunakan <strong>1x per member</strong>.</li>
                    <li>Keputusan <strong>POLESTOTO</strong> bersifat mutlak dan final serta tidak dapat diganggu gugat.</li>
                </ul>`
        },
        {
            image: 'https://polesimg.com/images/bonus-depo-harian-polestoto.jpg',
            title: 'BONUS DEPOSIT HARIAN 10%',
            html: `
                <h3>Syarat &amp; Ketentuan</h3>
                <ul>
                    <li>Minimal deposit <strong>Rp50.000,-</strong>.</li>
                    <li>Maksimal bonus <strong>Rp200.000,-</strong>.</li>
                    <li>Khusus permainan <strong>SLOT &amp; CASINO</strong>.</li>
                    <li>Bonus yang diberikan sebesar <strong>25%</strong> dari jumlah deposit.</li>
                    <li>Turnover (TO) adalah <strong>3x</strong> dari jumlah Deposit + Bonus.</li>
                </ul>
                <div class="promo-note"><strong>Contoh turnover:</strong> Deposit Rp100.000 + Bonus 25% Rp25.000 = Rp125.000 × 3 = <strong>Rp375.000</strong>.</div>
                <ul>
                    <li>Minimum Withdraw (WD) adalah <strong>1x</strong> dari jumlah Deposit + Bonus.</li>
                </ul>
                <div class="promo-note"><strong>Contoh minimum WD:</strong> Rp100.000 + Rp25.000 = <strong>Rp125.000</strong>.</div>
                <ul>
                    <li>Bonus tidak dapat diklaim apabila saldo deposit sudah habis atau sudah dimainkan.</li>
                    <li>Promo hanya dapat digunakan <strong>1x per member</strong>.</li>
                    <li>Keputusan <strong>POLESTOTO</strong> bersifat mutlak dan final serta tidak dapat diganggu gugat.</li>
                </ul>`
        },
        {
            image: 'https://polesimg.com/images/bonus-xtra-cashback-polestoto.jpg',
            title: 'BONUS CASHBACK MINGGUAN 10% SLOT, CASINO & LIVE GAMES',
            html: `
                <h3>Persentase Bonus Cashback</h3>
                <table class="promo-table"><thead><tr><th>TINGKAT BONUS</th><th>CASHBACK</th></tr></thead><tbody>
                    <tr><td>1</td><td>10%</td></tr><tr><td>2</td><td>12,5%</td></tr><tr><td>3</td><td>15%</td></tr><tr><td>4</td><td>20%</td></tr><tr><td>5</td><td>30%</td></tr>
                </tbody></table>
                <div class="promo-note">Batas total kekalahan untuk masing-masing persentase belum dicantumkan dalam ketentuan yang diberikan.</div>
                <h3>Syarat &amp; Ketentuan</h3>
                <ul>
                    <li>Bonus dibagikan setiap hari <strong>Senin</strong>, paling lambat pukul <strong>14.00</strong>.</li>
                    <li>Bonus ini hanya dibagikan untuk permainan <strong>SLOT</strong>.</li>
                    <li>Bonus dibagikan otomatis tanpa perlu klaim.</li>
                    <li>Periode perhitungan cashback kekalahan adalah <strong>Sabtu–Jumat</strong>.</li>
                    <li>Tidak ada minimal kekalahan.</li>
                    <li><strong>POLESTOTO</strong> berhak membatalkan bonus apabila ditemukan kecurangan atau kejanggalan.</li>
                    <li>Syarat dan ketentuan dapat berubah tanpa pemberitahuan terlebih dahulu.</li>
                    <li>Keputusan <strong>POLESTOTO</strong> bersifat mutlak dan final serta tidak dapat diganggu gugat.</li>
                </ul>`
        },
        {
            image: 'https://polesimg.com/images/bonus-xtra-rollingan-polestoto.jpg',
            title: 'BONUS ROLLINGAN / TURNOVER SLOT DAN CASINO 0,5% HARIAN',
            html: `
                <h3>Syarat &amp; Ketentuan</h3>
                <ul>
                    <li>Bonus dibagikan setiap hari, paling lambat pukul <strong>14.00</strong>.</li>
                    <li>Bonus ini khusus permainan <strong>SLOT &amp; CASINO</strong>.</li>
                    <li>Bonus dibagikan secara otomatis tanpa perlu klaim.</li>
                    <li>Periode perhitungan rollingan turnover adalah <strong>Kamis–Rabu</strong>.</li>
                    <li><strong>POLESTOTO</strong> berhak membatalkan bonus apabila ditemukan kecurangan atau kejanggalan.</li>
                    <li>Syarat dan ketentuan dapat berubah tanpa pemberitahuan terlebih dahulu.</li>
                    <li>Keputusan <strong>POLESTOTO</strong> bersifat mutlak dan final serta tidak dapat diganggu gugat.</li>
                </ul>`
        },
        {
            image: 'https://polesimg.com/images/bonus-cashback-sportbooks-polestoto.jpg',
            title: 'BONUS CASHBACK SPORTBOOK 5% MINGGUAN',
            html: `
                <h3>Syarat &amp; Ketentuan</h3>
                <ul>
                    <li>Bonus dihitung dari total kekalahan selama satu minggu, periode <strong>Kamis–Rabu</strong>.</li>
                    <li>Bonus dapat diklaim setiap hari <strong>Kamis</strong>, dengan minimal kekalahan <strong>Rp500.000,-</strong>.</li>
                    <li>Cashback tidak dapat digabungkan dengan promo lainnya.</li>
                    <li><strong>POLESTOTO</strong> berhak membatalkan bonus dan kemenangan member jika ditemukan kesamaan IP, bonus hunter, safety bet, atau kecurangan yang memanfaatkan kelemahan sistem.</li>
                    <li><strong>POLESTOTO</strong> berhak melakukan penyesuaian tanpa pemberitahuan terlebih dahulu.</li>
                    <li>Keputusan promosi bersifat mutlak dan tidak dapat diganggu gugat.</li>
                    <li>Jika cashback tidak diterima, member wajib melakukan konfirmasi melalui customer service.</li>
                    <li>Taruhan virtual, e-soccer, dan Saba Virtual <strong>tidak mendapatkan cashback</strong>.</li>
                </ul>`
        },
        {
            image: 'https://polesimg.com/images/bonus-refferalpolestoto.jpg',
            title: 'BONUS REFERRAL SEMUA GAME',
            html: `
                <h3>Syarat &amp; Ketentuan</h3>
                <ul>
                    <li>Program referral berlaku untuk <strong>semua kategori permainan</strong> di POLESTOTO.</li>
                    <li>Member dapat mengundang teman menggunakan kode atau tautan referral miliknya.</li>
                    <li>Referral hanya berlaku untuk akun teman yang benar-benar baru dan terdaftar melalui kode atau tautan referral yang sesuai.</li>
                    <li>Dilarang membuat akun sendiri atau akun ganda untuk mendapatkan bonus referral.</li>
                    <li>Penggunaan data atau identitas palsu untuk mengklaim bonus tidak diperbolehkan.</li>
                    <li>Besaran komisi, dasar perhitungan, jadwal pembagian, dan syarat penarikan bonus referral mengikuti ketentuan resmi yang ditetapkan POLESTOTO.</li>
                    <li><strong>POLESTOTO</strong> berhak meninjau dan membatalkan bonus apabila ditemukan penyalahgunaan program.</li>
                </ul>`
        }
    ];

    const escapeAttr = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    const promoHTML = `<div class="promo-container-main">${promos.map((promo, index) => `
        <div class="promo-block">
            <button type="button" class="collapsible" aria-expanded="false" aria-controls="promo-detail-${index + 1}" aria-label="Lihat syarat dan ketentuan ${escapeAttr(promo.title)}">
                <img src="${escapeAttr(promo.image)}" alt="${escapeAttr(promo.title)}" loading="lazy">
            </button>
            <div class="promo-content" id="promo-detail-${index + 1}">
                <h2>${promo.title}</h2>${promo.html}
            </div>
        </div>`).join('')}</div>`;

    const navbar = document.querySelector('.menubar.navbar.navbar-dark.bg-dark.py-2.px-2.d-none.d-xl-block') ||
                   document.querySelector('.menubar.navbar.navbar-dark.bg-dark.py-2.d-xl-none');
    if (!navbar) return;
    if (document.querySelector('.promo-container-main')) return;
    navbar.insertAdjacentHTML('afterend', promoStyle + promoHTML);

    document.querySelectorAll('.promo-container-main .collapsible').forEach(button => {
        button.addEventListener('click', function () {
            const panel = this.nextElementSibling;
            const willOpen = this.getAttribute('aria-expanded') !== 'true';
            document.querySelectorAll('.promo-container-main .collapsible').forEach(other => {
                other.setAttribute('aria-expanded', 'false');
                other.nextElementSibling.style.display = 'none';
            });
            this.setAttribute('aria-expanded', String(willOpen));
            panel.style.display = willOpen ? 'block' : 'none';
        });
    });
});
