import React from "react";

import img1 from "../assets/images/deeb9d4.png";
import img2 from "../assets/images/e821c75.png";
import img3 from "../assets/images/e9b0699.png";

const Pros = () => {
    return  (
        <div className="pros_container">
        <ul className="pros_list">
            <li className="pros_item">
                <img src={img1} className="pros_image" />
                <p className="pros_title">پوشش ۱۰۰ درصدی پروازها و قطارها و اتوبوس‌ها</p>
                <p className="pros_text">
                    کامل‌ترین سایت خرید بلیط
                    <br />
                    پروازهای داخلی، پروازهای خارجی، بلیط قطار و بلیط اتوبوس
                </p>
            </li>

            <li className="pros_item">
                <img src={img2} className="pros_image" />
                <p className="pros_title">دسترسی آسان از طریق وبسایت، موبایل و اپلیکیشن</p>
                <p className="pros_text">
                    ساده‌ترین و سریع‌ترین راه
                    <br />
                    برای جستجو، خرید و استرداد
                </p>
            </li>

            <li className="pros_item">
                <img src={img3} className="pros_image" />
                <p className="pros_title">قیمت رقابتی همراه با تضمین بلیط‌های چارتر</p>
                <p className="pros_text">
                    معتبرترین و به‌صرفه‌ترین سامانه
                    <br />
                    فروش بلیط و چارتر با پشتیبانی ۲۴ ساعته
                </p>
            </li>

        </ul>

    </div>
    )
}

export default Pros;