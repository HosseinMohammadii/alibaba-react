import React, { Component } from "react";
import axios from 'axios';
import { BaseUrl } from "../baseUrl";



class SignUpAndSignIn extends Component {


    state={
        status: false
    }

    handlerToggle = (status) => {
        this.setState({status: status})
    }

    onChange(e) {
     this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
    e.preventDefault();

    const data = {
        email: this.state.login_email,
        password: this.state.login_password,
    };
    console.log(data);

    axios.post(BaseUrl + 'authentication/jwt/token/', { data })
      .then(res => {
        console.log(data);
      })
  }

  onSubmitForm = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const body = {}
    formData.forEach((value, property) => body[property] = value)
    //here you can update, remove, add values/properties in the body object this is specially usefull if any custom process must be done to check, encrypt data or wherever you want.
    console.table(body)
    // Request goes here.
      axios.post(BaseUrl + 'authentication/jwt/token/', body)
      .then(res => {
        console.log(res.data);
      })
  }

    render() {
        return (
            <div className="signup_main_container">
                <div className="signup_title_box">
                    <i className="fas fa-user-plus" style={{ fontSize: "23px", width: "38px", height: "38px", color: "orange" }}></i>
                    <h3 className="signup_title">
                        ایجاد حساب کاربری
                </h3>
                </div>
                <div className="signup_container">
                    <div className="login_col" id="signup_first_col">
                        <div className="signup_caption_title">
                            <h3 className="signup_caption_title">
                                ورود شما به خانواده علی‌بابا را پیشاپیش تبریک می‌گوییم.
                            <br />
                            امیدواریم همسفر خوبی برای سفرهای شما باشیم.
                        </h3>
                            <ul className="signup_caption_list">
                                <li className="signup_caption_item">
                                    <i className="fas fa-check signup_caption_item_icon"></i>
                                    <p className="signup_caption_item_title">
                                        پوشش ۱۰۰ درصدی پروازها و قطارها
                                </p>
                                    <p className="signup_caption_item_text">
                                        کامل‌ترین سایت خرید بلیط پروازهای داخلی، پروازهای خارجی و بلیط قطار
                                </p>
                                </li>

                                <li className="signup_caption_item">
                                    <i className="fas fa-check signup_caption_item_icon"></i>
                                    <p className="signup_caption_item_title">
                                        دسترسی آسان از طریق وبسایت، موبایل و اپلیکیشن
                                </p>
                                    <p className="signup_caption_item_text">
                                        ساده‌ترین و سریع‌ترین راه برای جستجو، خرید و استرداد بلیط
                                </p>
                                </li>

                                <li className="signup_caption_item">
                                    <i className="fas fa-check signup_caption_item_icon"></i>
                                    <p className="signup_caption_item_title">
                                        قیمت رقابتی همراه با تضمین بلیط‌های چارتر
                                </p>
                                    <p className="signup_caption_item_text">
                                        معتبرترین و به‌صرفه‌ترین سامانه فروش بلیط و چارتر با پشتیبانی ۲۴ ساعته
                                </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="login_col">
                        <div className="login-singup-links">
                            <div className="login_signup_link login_signup_link_active" href="#!" onClick={() => this.handlerToggle("login")}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" height="25" viewBox="0 0 16 16" fill="#4A90E2" className="email-otp-icon"><defs><path id="envelope-open-a" d="M0.666666667,8.9287721 L0.666666667,14 C0.666666667,14.7363797 1.26362033,15.3333333 2,15.3333333 L14,15.3333333 C14.7363797,15.3333333 15.3333333,14.7363797 15.3333333,14 L15.3333333,8.9287721 L15.3333333,9.02911707 L8,12.36573 L0.666666667,9.02911707 L0.666666667,8.9287721 Z M1.33333333,6.66666667 L1.33333333,8.60001628 L8,11.6333008 L14.6666667,8.60001628 L14.6666667,6.66666667 L15.4142136,7.41421356 C15.7892863,7.78928632 16,8.29799415 16,8.82842712 L16,14 C16,15.1045695 15.1045695,16 14,16 L2,16 C0.8954305,16 1.3527075e-16,15.1045695 0,14 L2.07241631e-15,8.82842712 C2.00745701e-15,8.29799415 0.210713681,7.78928632 0.585786438,7.41421356 L1.33333333,6.66666667 Z M0.666666667,9.03372016 L0.666666667,13.9325597 C0.666666667,14.0274072 0.686905223,14.121163 0.726030547,14.2075647 C0.877911634,14.5429688 1.2729343,14.6917436 1.60833837,14.5398625 L7.21720131,12 L0.666666667,9.03372016 Z M0.941671702,8.42641737 L8.83333333,12 L1.8833434,15.1471653 C1.21253527,15.4509274 0.422489934,15.1533779 0.11872776,14.4825697 C0.0404771135,14.3097662 4.67320155e-16,14.1222547 4.4408921e-16,13.9325597 L0,9.03372016 C-4.50902501e-17,8.66553033 0.298476833,8.36705349 0.666666667,8.36705349 C0.761514198,8.36705349 0.855269947,8.38729205 0.941671702,8.42641737 Z M14.3916616,14.5398625 C14.7270657,14.6917436 15.1220884,14.5429688 15.2739695,14.2075647 C15.3130948,14.121163 15.3333333,14.0274072 15.3333333,13.9325597 L15.3333333,9.03372016 L8.78279869,12 L14.3916616,14.5398625 Z M15.3333333,8.36705349 C15.7015232,8.36705349 16,8.66553033 16,9.03372016 L16,13.9325597 C16,14.1222547 15.9595229,14.3097662 15.8812722,14.4825697 C15.5775101,15.1533779 14.7874647,15.4509274 14.1166566,15.1471653 L7.16666667,12 L15.0583283,8.42641737 C15.1447301,8.38729205 15.2384858,8.36705349 15.3333333,8.36705349 Z M2,8.90423731 L8,11.6342666 L14,8.90423731 L14,2 C14,1.26362033 13.4030463,0.666666667 12.6666667,0.666666667 L3.33333333,0.666666667 C2.59695367,0.666666667 2,1.26362033 2,2 L2,8.90423731 Z M3.33333333,0 L12.6666667,0 C13.7712362,-2.02906125e-16 14.6666667,0.8954305 14.6666667,2 L14.6666667,9.33333333 L8,12.3666992 L1.33333333,9.33333333 L1.33333333,2 C1.33333333,0.8954305 2.22876383,2.02906125e-16 3.33333333,0 Z M4.33333333,2.66666667 L11.6666667,2.66666667 C11.8507616,2.66666667 12,2.81590508 12,3 L12,3 C12,3.18409492 11.8507616,3.33333333 11.6666667,3.33333333 L4.33333333,3.33333333 C4.14923842,3.33333333 4,3.18409492 4,3 L4,3 C4,2.81590508 4.14923842,2.66666667 4.33333333,2.66666667 Z M4.33333333,4.66666667 L11.6666667,4.66666667 C11.8507616,4.66666667 12,4.81590508 12,5 L12,5 C12,5.18409492 11.8507616,5.33333333 11.6666667,5.33333333 L4.33333333,5.33333333 C4.14923842,5.33333333 4,5.18409492 4,5 L4,5 C4,4.81590508 4.14923842,4.66666667 4.33333333,4.66666667 Z M4.33333333,6.66666667 L11.6666667,6.66666667 C11.8507616,6.66666667 12,6.81590508 12,7 L12,7 C12,7.18409492 11.8507616,7.33333333 11.6666667,7.33333333 L4.33333333,7.33333333 C4.14923842,7.33333333 4,7.18409492 4,7 L4,7 C4,6.81590508 4.14923842,6.66666667 4.33333333,6.66666667 Z M4.33333333,8.66666667 L11.6666667,8.66666667 C11.8507616,8.66666667 12,8.81590508 12,9 L12,9 C12,9.18409492 11.8507616,9.33333333 11.6666667,9.33333333 L4.33333333,9.33333333 C4.14923842,9.33333333 4,9.18409492 4,9 L4,9 C4,8.81590508 4.14923842,8.66666667 4.33333333,8.66666667 Z"></path></defs> <use xlinkHref="#envelope-open-a"></use></svg>
                                <h5 style={{ marginTop: "10px" }}>
                                    ورود
                                </h5>
                            </div>

                            <div className="login_signup_link " href="signup.html" onClick={() => this.handlerToggle("signup")}>
                                <i className="fas fa-user-plus" style={{ fontSize: "25px", width: "32px", height: "32px" }} ></i>
                                <h5 style={{marginTop: "15px"}}>
                                    ثبت نام
                                </h5>
                            </div>
                        </div>
                        {this.state.status === "signup" ?  (
                            <form onSubmit={e => this.onSubmitForm(e)} className="signup_form">
                            <div className="signup_form_group">
                                <label className="signup_form_label" for="signup_email">
                                    ایمیل(الزامی)
                            </label>
                                <input onChange={e => this.onChange(e)} type="email" name="email" id="signup_email" tabindex="10" dir="ltr" className="signup_form_text_input" />
                            </div>

                            <div className="signup_form_group">
                                <label className="signup_form_label" for="signup_phone">
                                    تلفن همراه(الزامی)
                            </label>
                                <input onChange={e => this.onChange(e)} type="tel" name="phone" id="signup_phone" tabindex="10" dir="ltr" className="signup_form_text_input" />
                            </div>

                            <div className="signup_form_group">
                                <label className="signup_form_label" for="signup_password">
                                    رمزعبور(الزامی)
                            </label>
                                <input onChange={e => this.onChange(e)} type="password" name="password" id="signup_password" tabindex="10" dir="ltr" className="signup_form_text_input" />
                            </div>

                            <div className="signup_form_group">
                                <label className="signup_form_label" for="signup_password_repeat">
                                    تکرار رمزعبور(الزامی)
                            </label>
                                <input onChange={e => this.onChange(e)} type="password" name="password_repeat" id="signup_password_repeat" tabindex="10" dir="ltr" className="signup_form_text_input" />
                            </div>

                            <div className="signup_form_group">
                                <div>
                                    <label className="signup_form_checkbox_label" for="signup_rules" style={{ display: "inline-block" }}>
                                        <input onChange={e => this.onChange(e)} type="checkbox" name="rules" id="signup_rules" className="signup_form_check_input" />
                                        <span className="signup_form_checkbox_button_control"></span>
                                        <span>
                                            <a href="/policy" className="rules">قوانین و مقررات سفرهای علی‌بابا</a>
                                        را می‌پذیرم.
                                    </span>
                                    </label>
                                </div>

                                <div>
                                    <label className="signup_form_checkbox_label" for="signup_feed" style={{ display: "inline-block" }}>
                                        <input onChange={e => this.onChange(e)} type="checkbox" name="feed" id="signup_feed" className="signup_form_check_input" />
                                        <span className="signup_form_checkbox_button_control"></span>
                                        <span>
                                            مایل به دریافت خبرنامه و ایمیل‌های علی‌بابا هستم
                                    </span>
                                    </label>
                                </div>
                            </div>



                            <button className="login_button login_blue_button" type="submit">
                                ثبت نام
                        </button>
                        </form>
                        ) : (
                            <form className="login_form" onSubmit={e => this.onSubmitForm(e)}>
                            <div className="form_group">
                                <label className="form_label" for="login_email">
                                    ایمیل یا شماره همراه خود را وارد کنید
                                </label>
                                <input onChange={e => this.onChange(e)} type="email" name="email" id="login_email" tabindex="10" dir="ltr" className="form_text_input" />
                            </div>
            
                            <div className="form_group">
                                <label className="form_label" for="login_password">
                                    رمز عبور خود را وارد کنید
                                </label>
                                <input onChange={e => this.onChange(e)} type="password" name="password" id="login_password" tabindex="10" dir="ltr" className="form_text_input" />
                            </div>
                            <button className="login_button login_blue_button" type="submit">
                                وارد شوید
                            </button>
                        </form>
                        )}

                        <div style={{ marginRight: "10px" }} className="have_account">
                            آیا حساب کاربری دارید؟
                    </div>


                        <a href="login.html" >
                            <button className="login_button login_green_button">
                                ورود
                        </button>
                        </a>

                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpAndSignIn;