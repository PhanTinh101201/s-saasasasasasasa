import React from 'react';
import './Footer.css'

export default function () {
    return (
        <div >
            <footer class="flex-rw">

                <ul class="footer-list-top">
                    <li>
                        <h4 class="footer-list-header">Thông Tin</h4></li>
                    <li><a href='/shop/about-mission' class="generic-anchor footer-list-anchor" itemprop="significantLink">Hệ Thống Cửa Hàng</a></li>
                    <li><a href='/promos.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">Giày</a></li>
                    <li><a href='/retailers/new-retailers.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">Dép</a></li>

                    <li><a href='/job-openings.html' itemprop="significantLink" class="generic-anchor footer-list-anchor">Seneker</a></li>

                    <li><a href='/shop/about-show-schedule' class="generic-anchor footer-list-anchor" itemprop="significantLink">Sự Kiện Nóng</a></li>
                </ul>
                <ul class="footer-list-top">
                    <li>
                        <h4 class="footer-list-header">Mua Hàng Tại</h4></li>


                    <li><a href='/Angels/cat/id/70' class="generic-anchor footer-list-anchor">Đà Nẵng</a></li>
                    <li><a href='/Home-Decor/cat/id/64' class="generic-anchor footer-list-anchor">Huế</a></li>
                    <li><a href='/Mugs/cat/id/32' class="generic-anchor footer-list-anchor">Hồ Chí Minh</a></li>
                    <li><a href='/Pet-Lover/cat/id/108' class="generic-anchor footer-list-anchor">China</a></li>
                    <li><a href='/Ladies-Accessories/cat/id/117' class="generic-anchor footer-list-anchor" target="_blank">Vũng Tàu</a></li>
                </ul>
                <ul class="footer-list-top">
                    <li id='help'>
                        <h4 class="footer-list-header">Liên Hệ</h4></li>
                    <li><a href='/shop/about-contact' class="generic-anchor footer-list-anchor" itemprop="significantLink">FaceBook</a></li>
                    <li><a href='/faq.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">Gmail</a></li>
                    <li id='find-a-store'><a href='/shop/store-locator' class="generic-anchor footer-list-anchor" itemprop="significantLink">Zalo</a></li>
                    <li id='user-registration'><a href='/shop/user-registration?URL=' class="generic-anchor footer-list-anchor" itemprop="significantLink">Telegram</a></li>
                    <li id='order-tracking'><a href='/shop/order-status' itemprop="significantLink" class="generic-anchor footer-list-anchor">Sapo</a></li>
                </ul>
                <section class="footer-social-section flex-rw">
                    <span class="footer-social-overlap footer-social-connect">
                        CONNECT <span class="footer-social-small">with</span> US
                    </span>
                    <span class="footer-social-overlap footer-social-icons-wrapper">
                        <a href="https://www.pinterest.com/paviliongift/" class="generic-anchor" target="_blank" title="Pinterest" itemprop="significantLink"><i class="fa fa-pinterest"></i></a>
                        <a href="https://www.facebook.com/paviliongift" class="generic-anchor" target="_blank" title="Facebook" itemprop="significantLink"><i class="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/PavilionGiftCo" class="generic-anchor" target="_blank" title="Twitter" itemprop="significantLink"><i class="fa fa-twitter"></i></a>
                        <a href="http://instagram.com/paviliongiftcompany" class="generic-anchor" target="_blank" title="Instagram" itemprop="significantLink"><i class="fa fa-instagram"></i></a>
                        <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" class="generic-anchor" target="_blank" title="Youtube" itemprop="significantLink"><i class="fa fa-youtube"></i></a>
                        <a href="https://plus.google.com/+Paviliongift/posts" class="generic-anchor" target="_blank" title="Google Plus" itemprop="significantLink"><i class="fa fa-google-plus"></i></a>
                    </span>
                </section>
                <section class="footer-bottom-section flex-rw">
                    <div class="footer-bottom-wrapper">
                        <i class="fa fa-copyright" role="copyright">

                        </i> 2019 Pavilion in <address class="footer-address" role="company address">Bergen, NY</address><span class="footer-bottom-rights"> - All Rights Reserved - </span>
                    </div>
                    <div class="footer-bottom-wrapper">
                        <a href="/terms-of-use.html" class="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" class="generic-anchor" rel="nofollow">Privacy</a>
                    </div>
                </section>
            </footer>

        </div>
    )
}
