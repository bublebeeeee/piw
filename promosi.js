document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname === '/promotion') {
        const promoStyle = `
        <style>
            :root {
                --first-color: #000;
                --second-color: #fff;
                --third-color: #e4ff00;
                --fourth-color: #d2eb00;
            }
            .promo-container-main {
                width: 100%;
                max-width: 650px;
                background: var(--first-color);
                border: 2px solid #f2ff00;
                display: block;
                margin: 20px auto;
                border-radius: 15px;
                overflow: hidden;
                font-family: 'Arial', sans-serif;
                color: var(--second-color);
                box-shadow: 0 0 20px rgb(255 247 0 / 30%);
            }
            .promo-header-img {
                width: 100%;
                display: block;
                margin: 0;
            }
            .teks-berjaalan {
                border-bottom: 1px solid #f2ff00;
                border-top: 1px solid #f2ff00;
                padding: 8px 0;
                background: #000;
            }
            .teks-berjaalan marquee {
                font-size: 14px;
                text-transform: uppercase;
                font-weight: bold;
                display: block;
                color: var(--second-color);
            }
            .menu-wrapper {
                background: var(--first-color);
                padding: 15px 10px;
                display: flex;
                justify-content: center;
                border-bottom: 1px solid #f2ff00;
            }
            .menu-item {
                list-style-type: none;
                margin: 0;
                padding: 0;
                display: flex;
                gap: 10px;
                width: 100%;
                justify-content: center;
            }
            .menu-item li {
                flex: 1;
                max-width: 120px;
                background: #f2ff00;
                color: #000000;
                border: 1px solid #f2ff00;
                padding: 10px 5px;
                font-size: 12px;
                font-weight: 800;
                border-radius: 8px;
                cursor: pointer;
                text-transform: uppercase;
                text-align: center;
                transition: 0.3s;
            }
            .menu-item li:hover {
                background: var(--third-color);
                transform: translateY(-2px);
            }
            .promo-block {
                width: 100%;
                margin: 0 !important;
                padding: 0 !important;
                display: block;
                line-height: 0;
            }
            .collapsible {
                background: transparent;
                cursor: pointer;
                padding: 0;
                border: none;
                outline: none;
                width: 100%;
                display: block;
                line-height: 0;
            }
            .collapsible img {
                width: 100%;
                display: block;
                margin: 0;
                border: none;
                transition: filter 0.3s;
            }
            .collapsible:hover img {
                filter: brightness(1.2);
            }
            .promo-content {
                display: none;
                padding: 20px;
                background-color: #0a0a0a;
                border-bottom: 1px solid #f2ff00;
                line-height: 1.6;
                font-size: 13px;
            }
            .promo-table {
                width: 100% !important;
                border-collapse: collapse;
                margin: 15px 0;
            }
            .promo-table td {
                border: 1px solid #f2ff00;
                padding: 10px;
                text-align: center;
            }
            @media screen and (max-width: 480px) {
                .promo-container-main {
                    margin: 10px auto;
                    max-width: 96%;
                    border-radius: 10px;
                }
                .menu-item li {
                    font-size: 10px;
                    padding: 8px 2px;
                }
                .teks-berjaalan marquee {
                    font-size: 12px;
                }
            }
        </style>
        `;

        const promoHTML = `
        <div class="promo-container-main">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgbkN0GWtzXOAwxGn5LG8Gr4gLk9J_L4B4VCB_M0FkPefTykVmwOheGGqcANvHF3mivWnQaKa89pZ7ijb_Aq_NRNie_Tk_8e5yMgf8SfMy-BkrBH5EtouTSFCUaZ25hn_5V3pMv_0z9c4i_LbwsqQ8mNGdigISlN8cCre1Qxzsx-6zNT15hNnVYu6tJRc/s842/banner-live-r.webp" class="promo-header-img">

            <div class="teks-berjaalan">
                <marquee scrollamount="5">SELAMAT DATANG DI MIO500 - SITUS TOGEL & SLOT ONLINE TERPERCAYA - DEPOSIT MINIMAL RP 25.000 - WITHDRAW MINIMAL RP 50.000 - SALAM JACKPOT!</marquee>
            </div>

            <div class="menu-wrapper">
                <ul class="menu-item">
                    <li onclick="window.open('/register')">DAFTAR</li>
                    <li onclick="window.open('/login')">LOGIN</li>
                    <li onclick="window.open('https://direct.lc.chat/19019745/')">LIVECHAT</li>
                </ul>
            </div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmfv-xeHpdpMexKFMOMxNFlH7gpKPBtd583bYt1fj3Q7ESuCexpT0qO2MvoaO0GVat-abEOjYU2HRVNFoLVNOBdZVzjtISOOMI9CPtBp2UZa3a8wHtBVGtIcJawA80GYHawPpBLBrSVVkLPjswBxzeZ_Bbl6RYaGTu896FLuKEON5IN3njRqENmic7F8U/s650/bonus-kita-1.jpg" alt="Bonus New Member 100%">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double #ffd700; padding-bottom: 10px; margin-bottom: 20px;">
            <h2 style="color:#ffd700; font-weight:bold; font-size:20px; margin: 0; text-transform: uppercase;">
                BONUS NEW MEMBER UP TO 100%
            </h2>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #444; font-size: 14px;">
            SYARAT & KETENTUAN :
        </p>
        <ul style="list-style-type: none; padding-left: 0; color: #eee; font-size: 13px; margin-bottom: 20px;">
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Berlaku untuk semua player baru <b>MIO500</b>.</li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Hanya berlaku untuk permainan <b>SLOT</b>.</li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Minimal Deposit: <span style="color: #00ff00; font-weight: bold;">IDR 50.000</span></li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Maksimal Bonus: <span style="color: #00ff00; font-weight: bold;">IDR 100.000</span></li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Target TurnOver: <b>X10</b></li>
            <li style="margin-bottom: 8px;">> Klaim otomatis saat deposit pertama.</li>
        </ul>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 15px; border-radius: 10px; border: 1px solid #ffd700; margin-bottom: 20px;">
            <p style="color: #ffd700; font-weight: bold; margin-top: 0; text-align: center; text-decoration: underline;">CARA KLAIM & PERHITUNGAN</p>
            <div style="background: #000; padding: 10px; border-radius: 10px; font-size: 12px; border-left: 4px solid #ffd700;">
                <b>Contoh:</b> Depo 50,000 + 100% = 50.000 <br>
                Total TO: 50.000 x 15 = <b>750.000</b>
            <p style="font-size: 12px; margin-bottom: 10px;">TO yang harus dicapai untuk Withdraw.</p>
            </div>
        </div>

        <div style="font-size: 11px; color: #aaa; text-align: justify; border-top: 1px solid #444; padding-top: 10px;">
            <strong style="color: #ff4d4d;">PERHATIAN:</strong> Dilarang ada kesamaan IP atau manipulasi data. Keputusan <b>MIO500</b> mutlak.
        </div>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeFiSB6PBMglxJKNpIitNs1JhA9Zr7mQlgT9SIhahXRGnQ8TIbR7I6CM-_yaYM1_h2CJzESVvuuZ07Z5Xt5Vybnc3c90hyphenhyphen7dHtFfH_LVPTk3haCa7hSgqyAAbnOhqo2_jfn1RjF-VfFk8wAb7xVU-m0PYdltoPAv4X70ZxUe4GusEwZZbp2wmkDLrAUq0/s650/bonus-kita-2.jpg" alt="Garansi Kekalahan MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                 GARANSI KEKALAHAN 100% 
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                Main Tanpa Ragu di <span style="color:var(--third-color); font-weight:bold;">MIO500</span> <br>
            </p>
        </div>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 12px; border-radius: 8px; border: 1px solid var(--third-color); margin-bottom: 15px; text-align: center;">
            <p style="color: #fff; font-size: 13px; margin: 0;">Khusus Member Baru Slot (Deposit Pertama)</p>
            <p style="color: var(--third-color); font-size: 15px; font-weight: bold; margin: 5px 0;">SALDO BALIK 100% JIKA KALAH!</p>
        </div>

        <p style="color: var(--third-color); font-weight: bold; margin-bottom: 8px; font-size: 14px; text-transform: uppercase;">Syarat & Ketentuan :</p>
        <ul style="list-style: none; padding-left: 0; color: #eee; font-size: 12px; margin-bottom: 15px;">
            <li style="padding: 5px 0; border-bottom: 1px solid #333;">> Berlaku khusus <b>New Member</b> di permainan <b>SLOT</b>.</li>
            <li style="padding: 5px 0; border-bottom: 1px solid #333;">> Minimal Deposit untuk klaim promo ini: <b style="color:var(--third-color);">IDR 50.000</b>.</li>
            <li style="padding: 5px 0; border-bottom: 1px solid #333;">> Maksimal Saldo Garansi: <b style="color:var(--third-color);">IDR 100.000</b>.</li>
            <li style="padding: 5px 0; border-bottom: 1px solid #333;">> Saldo diklaim via <b>Livechat / WA</b> saat saldo pertama habis.</li>
            <li style="padding: 5px 0; border-bottom: 1px solid #333;">> Target Turnover Ringan: <b style="color: #ff4500;">15x</b>.</li>
            <li style="padding: 5px 0;">> Berlaku via <b>BANK & E-WALLET</b> (Tidak berlaku PULSA).</li>
        </ul>

        <div style="background: #252525; border-left: 4px solid var(--third-color); padding: 12px; margin: 15px 0; border-radius: 5px;">
            <p style="color: #ffd700; font-weight: bold; font-size: 12px; margin-bottom: 5px;">CONTOH PERHITUNGAN TURNOVER:</p>
            <p style="font-size: 13px; color: #fff; margin: 0;">
                [DEPOSIT + BONUS] x 15 = TOTAL TO [50.000 + 50.000] x 15 = 1.500.000 <br>
                Target TO: 100.000 x 8 = <b style="color: #00ff00;">1.500.000</b>
            </p>
        </div>

        <div style="background: #000; padding: 10px; border-radius: 5px; border-left: 4px solid #ff4500; margin-bottom: 15px;">
            <p style="font-size: 12px; color: #fff; margin: 0;">
                <b style="color: #ff4500;">ESTIMASI WD:</b> Maksimal WD adalah <b>2X</b> dari First Deposit. <br>
                <small style="color: #bbb;">Contoh: Depo 100rb, maka maksimal saldo yang bisa di WD adalah 200rb.</small>
            </p>
        </div>

        <div style="text-align: center; margin-bottom: 15px;">
            <a href="https://klikmio.cc/lcmio" style="background: var(--third-color); color: #000; padding: 10px 20px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block; text-transform: uppercase;">
                Klaim Garansi Sekarang 
            </a>
        </div>

        <p style="font-size: 11px; color: #999; text-align: justify; font-style: italic; border-top: 1px solid #444; padding-top: 8px;">
            <b>NB:</b> Promo hangus jika member sudah melakukan Withdraw atau Deposit ke-2 sebelum klaim. Dilarang keras manipulasi IP atau <i>Hold Spin</i>. Keputusan <b>MIO500</b> adalah Mutlak.
        </p>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8tB33ItOiLhTpCqjhX4yJ84pa_U9eUg8zqQ02bWtBGUYUEsCAPA-KqEGyi_ky3CUppVdhtszeVkew14MfEQze-zctHwOlENvbSQqNANcFU1vSzNRJ5rm4vvfq1cgb5L_y5Vn3WReAdwI6e5pkRZs_d9xl4pCT1cxkjyrCfHrTEjTFx5ugq5ADuv8NYH0/s650/bonus-kita-3.jpg" alt="Bonus New Member 30% MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 10px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS NEW MEMBER 30% MIO500
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                Tambahan Saldo Melimpah Khusus Player Baru!
            </p>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px;">
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Berlaku untuk semua Member Baru <b>MIO500</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Wajib klaim melalui <b>Live Chat</b> (Maksimal 2 jam setelah depo).</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Minimal Deposit: <b style="color:var(--third-color);">IDR 100.000</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Maksimal Bonus: <b style="color:var(--third-color);">IDR 300.000</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Berlaku khusus untuk permainan <b style="color: #00ff00;">SLOT</b>.</li>
            <li style="margin-bottom: 6px;">> Syarat Withdraw: Target Turnover <b style="color: #ff4500;">8X</b>.</li>
        </ul>

        <div style="background: #252525; border-left: 4px solid var(--third-color); padding: 12px; margin: 15px 0; border-radius: 5px;">
            <p style="color: #ffd700; font-weight: bold; font-size: 12px; margin-bottom: 5px;">CONTOH PERHITUNGAN TURNOVER:</p>
            <p style="font-size: 13px; color: #fff; margin: 0;">
                Depo 100.000 + Bonus 30.000 = 130.000 <br>
                Target TO: 130.000 x 8 = <b style="color: #00ff00;">1.040.000</b>
            </p>
        </div>

        <div style="background: #331111; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
            <p style="color: #ff4d4d; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">PERHATIAN :</p>
            <p style="font-size: 11px; color: #ccc; margin: 0; font-style: italic;">
                Bonus hangus jika saldo sudah dimainkan sebelum klaim, ada kesamaan IP, atau menggunakan VPN/Proxy. Keputusan <b>MIO500</b> adalah mutlak.
            </p>
        </div>

        <div style="text-align: center;">
            <a href="https://klikmio.cc/lcmio" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
                KLAIM BONUS 30% SEKARANG
            </a>
        </div>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIdcqEO6VI8kO2zCGwJ4-JTu1AM5az1KjY5L5-Ia2QwFSUBfn3muYvlXfILzMG7BWsxwioQ522_GrSPkbu5VEVerEPi0wD5WsLgzfDaTIJRrhbqzPxccOiKKLtG4wAcdF2qOcQmpDKNFxaDqiLKaxqBRj-NuEmF31E5sXSVT5Birwv4rBGmUN7FDKM3_Y/s650/bonus-kita-4.jpg" alt="Bonus Harian MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 10px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS DEPOSIT HARIAN 10%
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0; font-weight: bold;">
                <span style="color: #00ff00;">BEBAS KLAIM BERKALI-KALI SETIAP HARI!</span>
            </p>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px;">
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Minimal Deposit: <b style="color:var(--third-color);">IDR 50.000</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Maksimal Bonus per Klaim: <b style="color:var(--third-color);">IDR 50.000</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Bonus bisa diklaim <b>Berkali-kali</b> (Setiap Deposit).</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Hanya berlaku untuk permainan <b style="color: #00ff00;">SLOT</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Wajib Klaim <b>SEBELUM</b> saldo dimainkan.</li>
            <li style="margin-bottom: 6px;">> Syarat Withdraw: Turnover Sangat Rendah <b style="color: #ff4500;">HANYA X3</b>.</li>
        </ul>

        <div style="background: #252525; border-left: 4px solid #00ff00; padding: 12px; margin: 15px 0; border-radius: 5px;">
            <p style="color: #ffd700; font-weight: bold; font-size: 12px; margin-bottom: 5px;">CONTOH PERHITUNGAN TO X3:</p>
            <p style="font-size: 13px; color: #fff; margin: 0;">
                Depo 100.000 + Bonus 10.000 = 110.000 <br>
                Target TO: 110.000 x 3 = <b style="color: #00ff00;">330.000</b> (Sangat Mudah!)
            </p>
        </div>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 10px; border-radius: 5px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 13px; margin: 0 0 5px 0;">LARANGAN & SANKSI :</p>
            <ul style="padding-left: 18px; color: #ccc; font-size: 11px; margin: 0; font-style: italic;">
                <li>Dilarang ada <b>KESAMAAN IP ADDRESS</b> antar user.</li>
                <li>Dilarang menggunakan <b>VPN, PROXY, SSH, atau TUNNELING</b>.</li>
                <li>Dilarang keras melakukan <b>HOLD SPIN / GANTUNG SPIN</b>.</li>
                <li>Bermain di luar SLOT (Togel/Bola) = <b>SALDO DITARIK SEMUA!</b></li>
            </ul>
        </div>

        <div style="text-align: center; margin-top: 15px;">
            <a href="/" style="background: var(--third-color); color: #000; padding: 8px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block;">
                DEPOSIT & KLAIM HARIAN
            </a>
        </div>

        <p style="font-size: 10px; color: #777; text-align: center; margin-top: 10px;">
            Semua keputusan <b>MIO500</b> bersifat mutlak dan tidak dapat diganggu gugat.
        </p>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgj9HsutALKWI-c4PA_W5jzt0EOkzm20Gacm7SiHXQ2xUonTjxeakuOJl_Q8TzWNzOYmpcBNbS-rMbe2krPl9WAIiOn2CiF3MfWPXOjTDHctw7pY1Vvqx4zOEll2p3odxB-mkmL8Rk-Y0ETKWXHxXZpm2bomWBd6QY0rQ_i32LwkT-GVQHgSPcqtd-89Nk/s650/bonus-kita-5.jpg" alt="Bonus Turnover MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS TURNOVER 1%
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                <span style="background: #ffd700; color: #000; padding: 2px 10px; border-radius: 20px; font-weight: bold;">SLOT & LIVE CASINO</span>
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin-bottom: 15px; text-align: center;">
            <div style="background: #252525; padding: 8px; border-radius: 5px; width: 45%; border: 1px solid #444;">
                <small style="color: #bbb; display: block;">TANPA BATAS</small>
                <b style="color: #00ff00; font-size: 14px;">MAKSIMAL BONUS</b>
            </div>
            <div style="background: #252525; padding: 8px; border-radius: 5px; width: 45%; border: 1px solid #444;">
                <small style="color: #bbb; display: block;">OTOMATIS</small>
                <b style="color: #00ff00; font-size: 14px;">MASUK KE AKUN</b>
            </div>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">KEUNTUNGAN MEMBER :</p>
        
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px;">
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: var(--third-color); margin-right: 8px;">></span>
                <span>Promo Turnover ini hanya berlaku untuk jenis permainan slot, live casino & arcade</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: var(--third-color); margin-right: 8px;">></span>
                <span>Perhitungan Bonus Turnover akan di berikan dari Total Turn Over yang berarti perputaran bettingan anda selama 1 minggu baik kalah maupun menang.</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: var(--third-color); margin-right: 8px;">></span>
                <span>Periode Hitungan Turnover dari Kamis s/d Rabu.</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: var(--third-color); margin-right: 8px;">></span>
                <span><b>Bonus Turnover akan di bagikan setiap hari Kamis & Di kreditkan secara otomatis</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: var(--third-color); margin-right: 8px;">></span>
                <span>Turnover tidak memiliki batas atau minimum untuk mendapatkan bonus ini hanya di perlukan aktif bermain slot</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: var(--third-color); margin-right: 8px;">></span>
                <span>Berikut cara perhitungan bonus Rollingan slot, live casino & arcade :</span>
            </li>
            <li style="color:#f1ed0f"><span style="font-size:12px">Member A bermain slot dengan putaran bettingan Rp.800.000 x 1% = Rp 8.000 (Bonus Rollingan yang di dapatkan)</span></li>
            <li style="color:#f1ed0f"><span style="font-size:12px">Member B bermain slot dengan putaran bettingan Rp.118.000.000 x 1% = Rp 1.180.000(Bonus Rollingan yang di dapatkan)</span></li>
            

        </ul>

        <div style="background: rgba(255, 215, 0, 0.05); border: 1px dashed var(--third-color); padding: 10px; border-radius: 5px; margin-top: 15px;">
            <p style="font-size: 11px; color: #ccc; margin: 0; text-align: center; font-style: italic;">
                * Pihak <b>MIO500</b> berhak membatalkan bonus jika ditemukan indikasi kecurangan (Bonus Hunter/Safety Bet). Syarat & ketentuan dapat berubah sewaktu-waktu. Keputusan MIO500 adalah Mutlak.
            </p>
        </div>

        <div style="text-align: center; margin-top: 15px;">
            <a href="/credit-history" style="background: linear-gradient(180deg, #ffd700, #b8860b); color: #000; padding: 10px 30px; border-radius: 25px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block; box-shadow: 0 4px 15px rgba(0,0,0,0.4);">
                MAIN & TINGKATKAN TURNOVER
            </a>
        </div>
    </div>
</div>
            
<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEMpgRVLGqTl0usYzAl6L29qDTHm9KfrxYoQC99LDPVJshAY9HQLL4r0hP4F32qsby33tT3YdnKsouxvWKUqG1B_uiT6Fx5WrUhb6BpnP9AFzpUVDYWHiuc-N6fiA5pS7MTklfXd2gEfS4pGkRJoJXh7LWcmn7xeuxnyT_4A56Dxxnjh8KUETzwdNWNqI/s650/bonus-kita-6.jpg" alt="Cashback Mingguan MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS CASHBACK KHUSUS SLOT | ARCADE | Live Casino 10%
            </h3>
        </div>

        <table style="width: 100%; color: #fff; font-size: 12px; border-collapse: collapse; margin-bottom: 15px; text-align: center;">
            <tr style="background: #333; color: #ffd700;">
                <th style="padding: 10px; border: 1px solid #444;">Total Kekalahan (Lose)</th>
                <th style="padding: 10px; border: 1px solid #444;">Bonus</th>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #444;">100.000 - 50.000.000</td>
                <td style="padding: 8px; border: 1px solid #444; color: #00ff00; font-weight: bold;">5%</td>
            </tr>
            <tr style="background: #222;">
                <td style="padding: 8px; border: 1px solid #444;">50.000.001 - 100.000.000</td>
                <td style="padding: 8px; border: 1px solid #444; color: #00ff00; font-weight: bold;">7%</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #444;">dt atas Rp.100.000.000</td>
                <td style="padding: 8px; border: 1px solid #444; color: #00ff00; font-weight: bold;">10%</td>
            </tr>
        </table>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #eee; font-size: 13px; margin-bottom: 15px;">
            <li style="margin-bottom: 5px;">> Promo Cashback Kekalahan ini hanya berlaku untuk jenis permainan slot, arcade & live casino</li>
            <li style="margin-bottom: 5px;">> Periode Hitungan cashback kekalahan dari Sabtu s/d Jumat.</li>
            <li style="margin-bottom: 5px;">> Bonus Cashback akan di bagikan setiap hari Minggu & Di kreditkan secara otomatis</li>
            <li style="margin-bottom: 5px;">> Minimal untuk mendapatkan bonus kekalahan ini adalah Rp.100.000,-</li>
            <li style="margin-bottom: 5px;">> Bonus dapat diwithdrawkan atau dimainkan di semua permainan mio500</li>
            <li style="margin-bottom: 5px;">> Minimal untuk mendapatkan bonus kekalahan ini adalah Rp.100.000,-</li>
            <li style="margin-bottom: 5px;">Contoh perhitungan member :</li>
            <li style="margin-bottom: 5px;"><li style="color:#f1da0f"></li>Member A mengalami kekalahan Rp.500.000 x 5% = Rp .25.000 (Bonus kekalahan 5% yang di dapatkan)</li>
            <li style="margin-bottom: 5px;"><li style="color:#f1da0f"></li>Member B mengalami kekalahan Rp.63.000.000 x 7% = Rp .4.410.000 (Bonus kekalahan 7% yang di dapatkan)</li>
            <li style="margin-bottom: 5px;"><li style="color:#f1da0f"></li>Member C mengalami kekalahan Rp.125.000.000 x 10% = Rp .12.500.000 (Bonus kekalahan 10% yang di dapatkan)</li>
        </ul>

        <div style="background: rgba(255, 51, 51, 0.1); border-left: 4px solid #ff3333; padding: 10px; margin-bottom: 15px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">LARANGAN KETAT & ANTI-FRAUD :</p>
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.4;">
                Dilarang keras melakukan <b>Safety Bet</b> (Bet kiri-kanan), kesamaan data rekening, atau IP address yang sama. Jika ditemukan kejanggalan atau manipulasi, pihak <b style="color:var(--third-color);">MIO500</b> berhak membatalkan bonus dan membekukan saldo kemenangan.
            </p>
        </div>

        <p style="font-size: 11px; color: #888; text-align: center; font-style: italic;">
            Keputusan <b>MIO500</b> bersifat Mutlak dan Final. Syarat & ketentuan dapat berubah tanpa pemberitahuan.
        </p>

        <div style="text-align: center; margin-top: 15px;">
            <a href="/credit-history" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block; text-transform: uppercase;">
                Cek Riwayat Kekalahan
            </a>
        </div>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBITkpNwGEyZH4h7Ao4pyt9wV-3V-maoKjS41BhKCLuhCEKLn8Af63ZZezyF_Wd-BKQQptcPdnF653kNMO3h1qW-4oQj83OKylLS6evYmQ6xLOWfb50hSGlEoijyTCE10Kh0isJfXPOor90m5RxuNuuKDUDfCQjgzbCZRXtAuGDFz-mfRhCdDOe46WjW0/s650/bonus-kita-7.jpg" alt="Cashback Sportbook MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                âš½CASHBACK SPORTBOOK 5%
            </h3>
        </div>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 12px; border-radius: 8px; border: 1px solid #00ff00; margin-bottom: 15px; text-align: center;">
            <span style="color: #00ff00; font-weight: bold; font-size: 14px;">BONUS CAIR SETIAP HARI SELASA</span><br>
            <small style="color: #ccc;">Paling lambat jam 15:00 WIB (Otomatis)</small>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px;">
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Bonus cashback berlaku untuk semua permainan SPORTBOOK.</li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Minimal kekalahan dalam 1 minggu (Senin-Minggu) adalah <b style="color:var(--third-color);">IDR 100.000</b>.</li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Bonus Cashback <b>5%</b> dihitung dari Total Lose (Kekalahan Bersih).</li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Tidak ada batas maksimal bonus (<b>UNLIMITED</b>).</li>
            <li style="margin-bottom: 8px;">> Bonus dibagikan otomatis ke akun tanpa perlu klaim manual.</li>
        </ul>

        <div style="background: #252525; border-left: 4px solid var(--third-color); padding: 10px; margin: 15px 0; border-radius: 5px;">
            <small style="color: #ccc; display: block;">SIMULASI CASHBACK:</small>
            <p style="font-size: 13px; color: #fff; margin: 0;">
                Kekalahan Seminggu: Rp 1.000.000 <br>
                Bonus 5%: 1.000.000 x 5% = <b style="color: #00ff00;">IDR 50.000</b>
            </p>
        </div>

        <div style="border: 1px solid #ff3333; padding: 10px; border-radius: 5px; background: rgba(255, 51, 51, 0.05);">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">LARANGAN KERAS :</p>
            <p style="font-size: 11px; color: #bbb; margin: 0; line-height: 1.4;">
                Dilarang melakukan <b>Safety Bet</b> (Bet Kiri-Kanan), Cuci Bil, atau Kesamaan IP Address. Jika terindikasi melakukan kecurangan, pihak <b style="color:var(--third-color);">MIO500</b> berhak membatalkan seluruh bonus dan kemenangan anda.
            </p>
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <a href="/sport" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block;">
                PASANG TARUHAN BOLA
            </a>
        </div>

        <p style="font-size: 11px; color: #777; text-align: center; margin-top: 15px; border-top: 1px solid #333; padding-top: 10px;">
            Keputusan <b>MIO500</b> adalah mutlak & tidak dapat diganggu gugat.
        </p>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhESenxvgDLPeqOxX_NLkuVi2Roh7P13QjA5lncSzf_U4fusCwbJP4SYLu-p9tPoPegK3H-Cfvix2sM2nRujdW1ynB4F-WPakRsxxyO-AgC06EUEZ-IqKidmH_Ir1fjQTc9TdO7PDpDLyk9yhf4xSRycI_cu1laukjdYxEc4IGmKbCQen-0AT2Qsbsnp3Y/s650/bonus-kita-8.jpg" alt="Bonus Referral MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS MEMBER GET MEMBER 10%
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                Main Tanpa Modal? Bisa! Ajak Teman Anda Gabung di <span style="color:var(--third-color); font-weight:bold;">MIO500</span>
            </p>
        </div>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 12px; border-radius: 8px; border: 1px solid #ffd700; margin-bottom: 15px; text-align: center;">
            <span style="color: #ffd700; font-weight: bold; font-size: 14px;">BONUS 10% DARI TOTAL DEPO TEMAN</span><br>
            <small style="color: #00ff00;">Tanpa Perlu Deposit Sendiri untuk Klaim!</small>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #eee; font-size: 12px; margin-bottom: 15px;">
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Wajib klaim di hari yang sama dengan deposit teman (Lewat hari = Hangus).</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Teman yang diajak wajib deposit minimal <b style="color:var(--third-color);">IDR 50.000</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Teman yang diajak wajib menyelesaikan minimal <b style="color: #ffd700;">1X Turnover</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Berlaku untuk kelipatan jumlah teman yang diajak (Tanpa Batas!).</li>
            <li style="margin-bottom: 6px;">> Syarat Withdraw bonus ini adalah Turnover <b style="color: #ff4500;">X3</b> saja.</li>
        </ul>

        <div style="background: #000; padding: 10px; border-radius: 5px; border-left: 4px solid var(--third-color); margin-bottom: 15px;">
            <p style="color: var(--third-color); font-weight: bold; font-size: 12px; margin-bottom: 5px;">CARA KLAIM (VIA LIVECHAT/WA):</p>
            <p style="font-size: 11px; color: #fff; margin: 0; font-family: monospace;">
                User ID Anda : <br>
                User ID Teman : <br>
                Bukti Depo Teman : (Screenshot)
            </p>
        </div>

        <div style="background: #252525; padding: 10px; border-radius: 5px; margin-bottom: 15px; border: 1px dashed #555;">
            <small style="color: #ccc; display: block;">CONTOH BONUS:</small>
            <p style="font-size: 12px; color: #fff; margin: 0;">
                Ajak 5 Teman (Depo @100rb) = Total 500rb.<br>
                Bonus Anda: 500.000 x 10% = <b style="color: #00ff00;">IDR 50.000 (SALDO GRATIS)</b>
            </p>
        </div>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 8px; border-radius: 5px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 3px 0;">PERATURAN ANTI-KECURANGAN :</p>
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.3; font-style: italic;">
                Dilarang keras adanya kesamaan IP Address, Nama Rekening, atau No.HP antara pengajak dan yang diajak. Jika ditemukan indikasi <b>Bonus Hunter</b> atau manipulasi data, MIO500 akan memblokir akun secara permanen.
            </p>
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <a href="https://klikmio.cc/utama" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block;">
                AJAK TEMAN SEKARANG 
            </a>
        </div>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigY9JHVHa_Zib2m9AvtBfFEETfmuS2ha3kx055SOIfPu-f9bk1wTNtO8jPC9I83jUrdVzBJ23MSA2cnlJ-EkBKrTuRNoPMuD8WESgE7-WIDd2dziBEz-Jzud_Lb7x_Mq13AUOiSo6Np-Niqe1t_iMRrGwtXlIVq4IqjZSzvPRvUo5ONfWt28-KZoCzwMo/s650/bonus-kita-9.jpg" alt="Bonus Download APK MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS DOWNLOAD APLIKASI MIO500
            </h3>
            <div style="margin-top: 10px;">
                <span style="background: #00ff00; color: #000; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 15px;">
                    HADIAH SALDO: IDR 5.000
                </span>
            </div>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">CARA KLAIM BONUS :</p>
        <ol style="padding-left: 20px; color: #ffffff; font-size: 13px; margin-bottom: 15px;">
            <li style="margin-bottom: 5px;">Download Aplikasi Resmi <b>MIO500</b> melalui link di website.</li>
            <li style="margin-bottom: 5px;">Install dan Login menggunakan Akun Anda di Aplikasi.</li>
            <li style="margin-bottom: 5px;">Kirim Screenshot saat Anda sudah login di dalam Aplikasi ke <b>Livechat / WA</b>.</li>
            <li style="margin-bottom: 5px;">Bonus saldo <b>Rp 5.000</b> akan langsung ditambahkan ke akun Anda.</li>
        </ol>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #eee; font-size: 12px; margin-bottom: 15px;">
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Promo berlaku untuk semua member yang sudah pernah melakukan <b>Minimal 1x Deposit</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Hanya berlaku untuk 1 Akun / 1 Device (Perangkat HP).</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Syarat Withdraw bonus ini adalah Turnover <b>1X</b> saja.</li>
            <li style="margin-bottom: 6px;">> Bonus hanya dapat diklaim <b>1 kali</b> per member.</li>
        </ul>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">ANTI-CHEAT PROTECTION :</p>
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.4; font-style: italic;">
                Dilarang keras menghapus dan menginstall ulang aplikasi untuk klaim berkali-kali. Kesamaan IP atau manipulasi data akan menyebabkan bonus dan kemenangan dibatalkan secara permanen.
            </p>
        </div>

        <div style="text-align: center;">
            <a href="https://klikmio.cc/apkmio" style="background: linear-gradient(180deg, #ffd700, #b8860b); color: #000; padding: 10px 25px; border-radius: 30px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block; box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);">
                DOWNLOAD APK SEKARANG 
            </a>
        </div>

        <p style="font-size: 10px; color: #666; text-align: center; margin-top: 15px;">
            Keputusan <b>MIO500</b> adalah mutlak. Nikmati kemudahan akses 24 jam dengan Aplikasi MIO500.
        </p>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghNl4u_Vo-2r8SplGOiXThXSZibPK8X68yiYtqvkswKaUGkJtayZ8uklxrMTPu2i7yx70FMQ4vnAIOaS7Aqn9XvfQr_60eiB7eBrN96RZ8AE2YjjqPX5EyIBnsTsZpozicvLJmXXnkm-d50d7yTaWQ3UDtzdKOqkFU-vfG8kc6xBu1ixuh9vuCR8y75uo/s650/bonus-kita-10.jpg" alt="Extra Bonus Referral MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                > BONUS EXTRA AJAK TEMAN 10% ( DEPOSIT AWAL )
            </h3>
        </div>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 10px; border-radius: 8px; border: 1px solid #00ff00; margin-bottom: 15px; text-align: center;">
            <span style="color: #00ff00; font-weight: bold; font-size: 14px;">BONUS LANGSUNG MASUK KE DOMPET</span><br>
            <small style="color: #ccc;">Tanpa Menunggu Pembagian Mingguan!</small>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 12px; margin-bottom: 15px;">
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Bonus 10% Extra ajak teman (reffrensi) akan di berikan jika mengajak teman bermain & bergabung di situs Mio500</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Bonus dapat di turunkan jika teman sudah bermain selesai</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Bonus Extra 10% hanya dapat di Claim 1x / Userid</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Perhitungan bonus akan di hitung dari Deposit Awal Teman (reffrensi) anda.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;"><b style="color: #fffb00;">Contoh :</b>Member A mengajak B untuk bergabung = B melakukan deposit Rp.100.000 = Rp.10.000 (Yang wajib di dapatkan oleh member A)</li>
            <li style="margin-bottom: 6px;">> Bonus hanya dapat di Claim 5 x 24 jam, jika melewat dari hari di tentukan bonus tidak dapat di berikan kembali</li>
            <li style="margin-bottom: 6px;">> Hubungi Customer Service kami melalu Livechat dan Whatsapp Official Kami</li>
            <li style="margin-bottom: 6px;">> Jika kedapatan melakukan tindak kecurangan seperti : Kesamaan Data Player, Penipuan Deposit, Kesamaan Alamat IP, Melakukan Safety Bet, Invest, Maka pihak Mio500 Berhak membatalkan bonus deposit tanpa dispensasi.</li>
            <li style="margin-bottom: 6px;">> Maximal Bonus Extra ajak teman yang di berikan adalah Rp.100.000,-</li>
            <li style="margin-bottom: 6px;">> Semua keputasan Olxtoto bersifat mutlak dan tidak dapat di Ganggu Gugat.</li>
        </ul>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">ANTI-KECURANGAN (STRICT RULE) :</p>
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.4; font-style: italic;">
                Dilarang keras ada <b>Kesamaan IP, Nama Rekening, atau Data</b> lainnya. Penggunaan VPN/Proxy/SSH sangat dilarang. Jika ditemukan manipulasi "Self-Referral", pihak <b style="color:var(--third-color);">MIO500</b> akan memblokir permanen ID pengajak dan yang diajak.
            </p>
        </div>

        <div style="text-align: center;">
            <a href="https://klikmio.cc/lcmio" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block; text-transform: uppercase;">
                Klaim Bonus Referal Sekarang
            </a>
        </div>

        <p style="font-size: 11px; color: #777; text-align: center; margin-top: 15px; border-top: 1px solid #333; padding-top: 10px;">
            Keputusan <b>MIO500</b> bersifat Mutlak dan tidak dapat diganggu gugat.
        </p>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2RUZvNmTKQG8SgpWpnhP222pQkuJSnIn0Brnd9TOL8bAwVSp9y-vnuC9g_QcCeEUzAffD0CIHoRK6ODVHX3CBrLzep3N2iYbz-neUeaFxjS5F9dbAqMMYa0OBemLIvsCOoRIYK7LEqNHdMhqzGFMZy2O6lcAE2q39lP3Z8zQkArk5HFqxB3HotNxY2zU/s650/bonus-kita-11.jpg" alt="Referral Togel MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS REFERRAL TOGEL 1%
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                Bisnis Tanpa Modal, Komisi Mengalir <span style="color: #00ff00; font-weight: bold;">SEUMUR HIDUP!</span>
            </p>
        </div>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 12px; border-radius: 8px; border: 1px solid var(--third-color); margin-bottom: 15px; text-align: center;">
            <p style="color: #fff; font-size: 13px; margin: 0;">Dapatkan Komisi Otomatis Setiap Teman Pasang Angka:</p>
            <p style="color: var(--third-color); font-size: 20px; font-weight: bold; margin: 5px 0;">FULL 1.0% SEPUASNYA</p>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">CARA MENDAPATKAN BONUS :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px; margin-bottom: 15px;">
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: #00ff00; margin-right: 10px;">Ã¢Å¾â€</span>
                <span>Daftarkan diri Anda di <b>MIO500</b> dan ambil link referral di menu "Referral".</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: #00ff00; margin-right: 10px;">Ã¢Å¾â€</span>
                <span>Sebarkan link Anda ke sosial media (FB, WA, Forum) atau teman tongkrongan.</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: #00ff00; margin-right: 10px;">Ã¢Å¾â€</span>
                <span>Setiap teman yang mendaftar dan melakukan betting Togel, Anda dapat <b>1%</b>.</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: #00ff00; margin-right: 10px;">Ã¢Å¾â€</span>
                <span>Bonus dibagikan secara <b>OTOMATIS</b> setiap hari saat pasar togel result.</span>
            </li>
        </ul>

        <div style="background: #252525; padding: 10px; border-radius: 5px; border-left: 4px solid #00ff00; margin-bottom: 15px;">
            <p style="font-size: 12px; color: #fff; margin: 0;">
                Ã¢Â­Â <b>TANPA MODAL:</b> Tidak perlu deposit untuk mulai cari referral.<br>
                Ã¢Â­Â <b>TRANSPARAN:</b> Cek total komisi & list teman langsung di menu Referral.
            </p>
        </div>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">Ã°Å¸Å¡Â« PERATURAN KETAT :</p>
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.4; font-style: italic;">
                Dilarang keras mendaftarkan akun sendiri sebagai referral (Self-Referral) atau manipulasi data IP. Pelanggaran akan berakibat pemblokiran akun secara permanen tanpa pengecualian.
            </p>
        </div>

        <div style="text-align: center;">
            <a href="/my-referral" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block; text-transform: uppercase; box-shadow: 0 4px 10px rgba(255, 215, 0, 0.2);">
                Ambil Link Referral Anda >
            </a>
        </div>

        <p style="font-size: 10px; color: #777; text-align: center; margin-top: 15px; border-top: 1px solid #333; padding-top: 10px;">
            Keputusan <b>MIO500</b> adalah mutlak & final.
        </p>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQjYyCFRoslx2cBlciSHD7pmnA3dlQxTPDiMnJESkhfXwGQcoftVNx8iWN2wqllcgvsmbHBaTQypMLDw5S8d5aJkDQT1LQmgFrRP9IygsJPz__MPX_M5U9S2NMcN6OqJBtPTwOryoQgVc2eDshwUlZUbotzSuTkQrYJyL2Tp3yidZEM_rxjX2oUW5pFIM/s650/bonus-kita-12.jpg" alt="Referral Game MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:17px; margin: 0; text-transform: uppercase;">
                Ã°Å¸Å½Â° REFERRAL SLOT, ARCADE & CASINO Ã°Å¸Å½Â°
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                Komisi Otomatis Setiap Teman Anda <span style="color: #00ff00; font-weight: bold;">BERMAIN!</span>
            </p>
        </div>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 12px; border-radius: 8px; border: 1px solid #ffd700; margin-bottom: 15px; text-align: center;">
            <p style="color: #fff; font-size: 12px; margin: 0;">Bonus Referral Per-Bettingan:</p>
            <p style="color: var(--third-color); font-size: 22px; font-weight: bold; margin: 5px 0;">0.1% UNLIMITED</p>
            <small style="color: #bbb;">Berlaku untuk: Slot Online, Arcade, & Live Casino</small>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px; margin-bottom: 15px;">
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: #00ff00; margin-right: 10px;">></span>
                <span>Bonus dihitung dari total <b>Turnover (Rollingan)</b> teman yang Anda ajak.</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: #00ff00; margin-right: 10px;">></span>
                <span>Berlaku untuk semua provider di menu <b>Slot, Arcade (Tembak Ikan), & Casino</b>.</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: #00ff00; margin-right: 10px;">></span>
                <span>Bonus dibagikan secara <b>OTOMATIS</b> langsung ke akun Anda.</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: #00ff00; margin-right: 10px;">></span>
                <span>Tanpa batas maksimal bonus dan berlaku <b>SEUMUR HIDUP</b>.</span>
            </li>
        </ul>

        <div style="background: #252525; padding: 12px; border-radius: 5px; border-left: 4px solid #00ff00; margin-bottom: 15px;">
            <p style="font-size: 12px; color: #ccc; margin: 0; line-height: 1.4;">
                <b style="color: #fff;">Simulasi:</b> <br>
                Total TO Bawahan Anda seminggu: Rp 1.000.000.000 <br>
                Bonus Anda: 1M x 0.1% = <b style="color: #00ff00;">IDR 1.000.000 (Passive Income!)</b>
            </p>
        </div>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">Ã°Å¸Å¡Â« ANTI-FRAUD SYSTEM :</p>
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.4; font-style: italic;">
                Dilarang melakukan kecurangan berupa kesamaan IP atau data akun. Pihak <b style="color:var(--third-color);">MIO500</b> berhak membatalkan komisi jika ditemukan indikasi <i>Self-Referral</i> atau manipulasi sistem.
            </p>
        </div>

        <div style="text-align: center;">
            <a href="/my-referral" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block; text-transform: uppercase;">
                Bagikan Link Referral Anda Ã°Å¸â€â€”
            </a>
        </div>

        <p style="font-size: 10px; color: #777; text-align: center; margin-top: 15px; border-top: 1px solid #333; padding-top: 10px;">
            Keputusan <b>MIO500</b> bersifat Mutlak dan Final.
        </p>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicMB24ax8vl_GbcpN67ObHfuioiYtbeQvt1408mcROcj8Zk05HWQcdLbxJAT1HvZLCozHHnNFoq5lnLCW1lQWjt3uwrnR2MbXmjRFPxHoXgOpm8Dbd2AYcQXCDl_sn0sRX4h2nHvwTmqY2PRzVbuMAm3GMO36TsQSssI4FRmqDxeVQBxqE4vs1uV74qmA/s650/bonus-kita-13.jpg" alt="Event Pakdul MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                Ã°Å¸â€™Â° EVENT PAKDUL SALDO MIO500 Ã°Å¸â€™Â°
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                Butuh Modal Tambahan? Ajukan Pinjaman Saldo <span style="color: #00ff00; font-weight: bold;">GRATIS!</span>
            </p>
        </div>

        <table style="width: 100%; color: #fff; font-size: 13px; border-collapse: collapse; margin-bottom: 15px; text-align: center;">
            <tr style="background: #333; color: #ffd700;">
                <th style="padding: 8px; border: 1px solid #444;">Min Deposit</th>
                <th style="padding: 8px; border: 1px solid #444;">Rate Pinjaman</th>
                <th style="padding: 8px; border: 1px solid #444;">Syarat TO</th>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #444;">Rp 100.000</td>
                <td style="padding: 8px; border: 1px solid #444; color: #00ff00; font-weight: bold;">5%</td>
                <td style="padding: 8px; border: 1px solid #444;">5X TO</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #444;">Rp 500.000</td>
                <td style="padding: 8px; border: 1px solid #444; color: #00ff00; font-weight: bold;">10%</td>
                <td style="padding: 8px; border: 1px solid #444;">10X TO</td>
            </tr>
        </table>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 12px; margin-bottom: 15px;">
            <li style="margin-bottom: 5px;">> Khusus permainan <b style="color: #00ff00;">SLOT GAMES</b> (Depo via Bank, E-Wallet, QRIS).</li>
            <li style="margin-bottom: 5px;">> Wajib share ke Group Telegram <b>MIO500</b> dengan hashtag <b style="color: var(--third-color);">#pakdulmio500</b>.</li>
            <li style="margin-bottom: 5px;">> Maksimal Pinjaman Saldo (Pakdul) adalah <b style="color: var(--third-color);">IDR 200.000</b>.</li>
            <li style="margin-bottom: 5px;">> Klaim hanya berlaku untuk deposit di hari yang sama.</li>
            <li style="margin-bottom: 5px;">> Tidak boleh ada history <b>Withdraw (WD)</b> di hari yang sama saat klaim.</li>
            <li style="margin-bottom: 5px;">> Pinjaman Saldo <b>TIDAK PERLU DIKEMBALIKAN!</b></li>
        </ul>

        <div style="background: #252525; border-left: 4px solid #ffd700; padding: 10px; margin-bottom: 15px;">
            <p style="font-size: 12px; color: #fff; margin: 0;">
                > <b>CARA KLAIM:</b> Capai target TO -> Share ke Telegram -> Hubungi Livechat -> Saldo Cair!
            </p>
        </div>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.4; font-style: italic;">
                * Member hanya bisa klaim 1x sehari (Reset jam 00.00). Promo tidak dapat digabung dengan bonus lain. Segala keputusan <b>MIO500</b> adalah mutlak.
            </p>
        </div>

        <div style="text-align: center;">
            <a href="https://baganlink.site/61ast" style="background: #0088cc; color: #fff; padding: 10px 20px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block;">
                JOIN TELEGRAM & KLAIM >
            </a>
        </div>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjseD-Wf-i2Vk51ToOJg0OcbdX3Zmda5qAC3lmTHqLAP-_a3IX_6eODPUBXlVm_3c3Rn4FopeNHvV9AOV39BbLZ21K7_9DKK9BKE5DHf4fbUTY74jHPMnvyLuq8lnslNZWYHaOrPDM4uaMN_RjQN6ETkTI7lhTH19FAxsNKnYGV16eCeEma6-yligkVRD0/s650/bonus-kita-14.jpg" alt="Bonus Freespin MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                Ã°Å¸Å½Â° BONUS FREESPIN MURNI UP TO 30X Ã°Å¸Å½Â°
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                Khusus Deposit via Bank & E-Wallet (Pragmatic Play)
            </p>
        </div>

        <table style="width: 100%; color: #fff; font-size: 13px; border-collapse: collapse; margin-bottom: 15px; text-align: center;">
            <tr style="background: #333; color: #ffd700;">
                <th style="padding: 8px; border: 1px solid #444;">Nominal Deposit</th>
                <th style="padding: 8px; border: 1px solid #444;">Bonus Freespin</th>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #444;">IDR 50.000 - 199.999</td>
                <td style="padding: 8px; border: 1px solid #444; color: #00ff00; font-weight: bold;">10X SPIN</td>
            </tr>
            <tr style="background: #222;">
                <td style="padding: 8px; border: 1px solid #444;">IDR 200.000 - 499.999</td>
                <td style="padding: 8px; border: 1px solid #444; color: #00ff00; font-weight: bold;">20X SPIN</td>
            </tr>
            <tr style="background: rgba(255, 215, 0, 0.1);">
                <td style="padding: 8px; border: 1px solid #444; font-weight: bold;">IDR 500.000 UP</td>
                <td style="padding: 8px; border: 1px solid #444; color: #ffd700; font-weight: bold;">30X SPIN</td>
            </tr>
        </table>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 12px; margin-bottom: 15px;">
            <li style="margin-bottom: 5px;">> Berlaku untuk semua member <b>MIO500</b> (1x Sehari).</li>
            <li style="margin-bottom: 5px;">> Nilai Bet Freespin minimal <b style="color:var(--third-color);">IDR 400,-</b>.</li>
            <li style="margin-bottom: 5px;">> Wajib klaim di <b>LIVECHAT</b> sebelum saldo dimainkan.</li>
            <li style="margin-bottom: 5px;">> Syarat Withdraw: <b>5x Turnover</b> dari Total Deposit.</li>
            <li style="margin-bottom: 5px;">> Maksimal Withdraw dari kemenangan Freespin: <b style="color: #00ff00;">IDR 2.000.000</b>.</li>
        </ul>

        <div style="background: #252525; border-left: 4px solid #00ff00; padding: 10px; margin-bottom: 15px;">
            <p style="font-size: 12px; color: #fff; margin: 0;">
                Ã°Å¸â€™Â¡ <b>Contoh:</b> Depo 50rb x 5 TO = <b style="color: #00ff00;">250.000 Target TO</b> untuk bisa Withdraw.
            </p>
        </div>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 11px; margin: 0; line-height: 1.4; font-style: italic;">
                * Dilarang keras Gantung Spin, Bonus Hunter, atau Kesamaan IP. Jika terbukti curang, kemenangan dan bonus akan ditarik oleh pihak MIO500. Keputusan MIO500 adalah mutlak.
            </p>
        </div>

        <div style="text-align: center;">
            <a href="https://klikmio.cc/lcmio" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block; text-transform: uppercase;">
                Klaim Freespin Sekarang Ã°Å¸Å½Â°
            </a>
        </div>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcrQsYnHYlrdGR0vZDFgK8yTdhMWduMQt6ektTizYId6y3-15-r0Rf3JVd9uu7pudJ4ul3WX6C41mXx7Ef2BqmHXmBzdFfQQZCAbqW_1T_ucGv9CKhKJsPchyphenhyphenQD_FUpEWB12XGoejZVf17kAqIwd0Z85Y5DOTHhPe-LP_tKFIm9wY6sPjEBfQ-9b_mWPg/s650/bonus-kita-15.jpg" alt="Mix Parlay MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                EVENT MIX PARLAY 3 TIM MIO500
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">Menang Full 3 Tim Langsung Cair!</p>
            <div style="background: #00ff00; color: #000; font-weight: bold; padding: 5px 15px; border-radius: 5px; display: inline-block; font-size: 20px; margin-top: 5px;">
                HADIAH IDR 300.000
            </div>
        </div>

        <div style="display: flex; gap: 10px; margin-bottom: 15px;">
            <div style="flex: 1; background: #222; padding: 10px; border-radius: 5px; border: 1px solid #444; text-align: center;">
                <small style="color: #ccc; display: block;">MIN STAKE</small>
                <b style="color: #ffd700; font-size: 15px;">IDR 50.000</b>
            </div>
            <div style="flex: 1; background: #222; padding: 10px; border-radius: 5px; border: 1px solid #444; text-align: center;">
                <small style="color: #ccc; display: block;">MIN ODDS</small>
                <b style="color: #ffd700; font-size: 15px;">1.90 / Tim</b>
            </div>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 12px; margin-bottom: 15px;">
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Berlaku untuk <b>Sportsbook Bola</b> (HDP & O/U - Full Time).</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Wajib ada <b>2 Match</b> dengan pasaran 3/4 (0.75).</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Harus <b>MENANG FULL</b> (Tidak berlaku Menang 1/2, Kalah 1/2, atau Seri).</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Dalam 1 Tiket <b>WAJIB 3 TIM</b> (Early Bet Only, No Bola Jalan/Basket).</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Maksimal klaim 1x sehari (Reset jam 12.00 WIB).</li>
        </ul>

        <div style="background: rgba(255, 69, 0, 0.1); border-left: 4px solid #ff4500; padding: 10px; margin-bottom: 15px;">
            <p style="color: #ff4500; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">TIDAK DIPERBOLEHKAN :</p>
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.4;">
                Dilarang ada Tim yang sama, Safety Bet, Kesamaan IP, atau data tidak valid. Virtual Sports & E-Soccer tidak dihitung dalam event ini.
            </p>
        </div>

        <div style="text-align: center;">
            <a href="https://klikmio.cc/lcmio" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block; text-transform: uppercase; box-shadow: 0 4px 10px rgba(255, 215, 0, 0.3);">
                Klaim Hadiah Parlay >
            </a>
        </div>

        <p style="font-size: 10px; color: #777; text-align: center; margin-top: 15px; border-top: 1px solid #333; padding-top: 10px;">
            * Event dapat berubah sewaktu-waktu. Keputusan <b>MIO500</b> bersifat Mutlak & Final.
        </p>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXfOhnCPI6OeXrJmQjGVbYzOLpkkcOatjrrKbmU9FnYaDseQW9rIxHoCgk_x1-I-tQatNkUaXGPQGWdEUV1p5ye_1V1FJdvwxiBWl6IgYAvSgfexTXZ2uF2ddJNwoggvN2OEjdLKdur0ztgEquTiowZscRnFJ72NMXIKMcxYVt0EgiBFQV1hN1yU9K5Ss/s650/bonus-kita-16.jpg" alt="WS Sabung Ayam MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                EVENT WINSTREAK SABUNG AYAM 
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">Menang Beruntun, Bonus Melimpah di MIO500!</p>
        </div>

        <table style="width: 100%; color: #fff; font-size: 12px; border-collapse: collapse; margin-bottom: 15px; text-align: center;">
            <tr style="background: #333; color: #ffd700;">
                <th style="padding: 10px; border: 1px solid #444;">Winstreak</th>
                <th style="padding: 10px; border: 1px solid #444;">Bonus</th>
                <th style="padding: 10px; border: 1px solid #444;">Max Bonus</th>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #444;">6X Beruntun</td>
                <td style="padding: 8px; border: 1px solid #444; color: #00ff00; font-weight: bold;">25%</td>
                <td style="padding: 8px; border: 1px solid #444;">IDR 500rb</td>
            </tr>
            <tr style="background: #222;">
                <td style="padding: 8px; border: 1px solid #444;">8X Beruntun</td>
                <td style="padding: 8px; border: 1px solid #444; color: #00ff00; font-weight: bold;">50%</td>
                <td style="padding: 8px; border: 1px solid #444;">IDR 750rb</td>
            </tr>
            <tr style="background: rgba(255, 215, 0, 0.1);">
                <td style="padding: 8px; border: 1px solid #444; font-weight: bold;">10X Beruntun</td>
                <td style="padding: 8px; border: 1px solid #444; color: #ffd700; font-weight: bold;">100%</td>
                <td style="padding: 8px; border: 1px solid #444;">IDR 1 Juta</td>
            </tr>
        </table>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 5px; font-size: 13px;">CONTOH SIMULASI (WS 6X):</p>
        <div style="background: #000; padding: 10px; border-radius: 5px; font-size: 11px; color: #ccc; border-left: 4px solid var(--third-color); margin-bottom: 15px;">
            Bet 1: 50rb (Win) | Bet 2: 50rb (Win) | Bet 3-6: @100rb (Win)<br>
            Total Stake: <b style="color: #fff;">500.000</b><br>
            Bonus: 500.000 x 25% = <b style="color: #00ff00;">IDR 125.000 EXTRA!</b>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #eee; font-size: 12px; margin-bottom: 15px;">
            <li style="margin-bottom: 5px;">> Minimal Bet: <b style="color:var(--third-color);">IDR 50.000</b> per pertandingan.</li>
            <li style="margin-bottom: 5px;">> Wajib Menang Beruntun di <b>Arena & Fight Number</b> berbeda.</li>
            <li style="margin-bottom: 5px;">> Tidak boleh ada <b>Draw, FTD, Cancel, atau Refund</b> (WS Reset).</li>
            <li style="margin-bottom: 5px;">> Kirim Screenshot History WS yang jelas ke CS <b>MIO500</b>.</li>
            <li style="margin-bottom: 5px;">> Maksimal klaim 1x per hari (Reset 00:01 WIB).</li>
        </ul>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 10px; border-radius: 5px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 11px; margin: 0; line-height: 1.4; font-style: italic;">
                * Dilarang keras ada kesamaan IP, Data Bank, atau Email. Bonus tidak dapat digabung dengan promo lain. Keputusan <b>MIO500</b> adalah mutlak.
            </p>
        </div>

        <div style="text-align: center; margin-top: 15px;">
            <a href="https://klikmio.cc/lcmio" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block; text-transform: uppercase;">
                Klaim Winstreak Ayam
            </a>
        </div>
    </div>
</div>
            
            </div>
        `;

        let navbar = document.querySelector('.menubar.navbar.navbar-dark.bg-dark.py-2.px-2.d-none.d-xl-block') || 
                     document.querySelector('.menubar.navbar.navbar-dark.bg-dark.py-2.px-2.d-xl-none');

        if (navbar) {
            navbar.insertAdjacentHTML('afterend', promoStyle + promoHTML);

            // Batasi menjadi 6 gambar promo pertama; banner header tetap tampil.
            document.querySelectorAll('.promo-container-main .promo-block').forEach((promo, index) => {
                if (index >= 6) promo.remove();
            });

            document.querySelectorAll('.promo-container-main .collapsible').forEach(button => {
                button.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    const isOpen = content.style.display === 'block';
                    
                    document.querySelectorAll('.promo-container-main .promo-content').forEach(c => c.style.display = 'none');
                    
                    content.style.display = isOpen ? 'none' : 'block';
                });
            });
        }
    }
});
