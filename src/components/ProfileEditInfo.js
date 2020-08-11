import React from 'react';

const ProfileEditInfo = () => {
    return (

        <div className="profile_content_container">

            <div className="vertical-space height_45"></div>

            <div className="login_col width_100per">
                <form className="signup_form" action="alibaba.ir" method="post">
                    <div className="signup_form_group">
                        <label className="signup_form_label" for="signup_email">
                            ایمیل(الزامی)
                                </label>
                        <input type="email" name="email" id="signup_email" tabindex="10" dir="ltr" className="signup_form_text_input" />
                    </div>

                    <div className="signup_form_group">
                        <label className="signup_form_label" for="signup_phone">
                            تلفن همراه(الزامی)
                                </label>
                        <input type="tel" name="phone" id="signup_phone" tabindex="10" dir="ltr" className="signup_form_text_input" />
                    </div>

                    <div className="signup_form_group">
                        <label className="signup_form_label" for="signup_password">
                            رمزعبور(الزامی)
                                </label>
                        <input type="password" name="password" id="signup_password" tabindex="10" dir="ltr" className="signup_form_text_input" />
                    </div>

                    <div className="signup_form_group">
                        <label className="signup_form_label" for="signup_password_repeat">
                            تکرار رمزعبور(الزامی)
                                </label>
                        <input type="password" name="password_repeat" id="signup_password_repeat" tabindex="10" dir="ltr" className="signup_form_text_input" />
                    </div>

                    <div className="signup_form_group">

                        <div>
                            <label className="signup_form_checkbox_label" for="signup_feed" style={{ display: "inline-block" }}>
                                <input type="checkbox" name="feed" id="signup_feed" className="signup_form_check_input" />
                                <span className="signup_form_checkbox_button_control"></span>
                                <span>
                                    مایل به دریافت خبرنامه و ایمیل‌های علی‌بابا هستم
                                        </span>
                            </label>
                        </div>
                    </div>
                    <button className="login_button login_blue_button" type="submit">
                        دخیره تغییرات
                            </button>
                </form>
            </div>
        </div>

    )
}

export default ProfileEditInfo;