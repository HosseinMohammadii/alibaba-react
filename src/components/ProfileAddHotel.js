import React from "react";

const ProfileAddHotel = () => {
    return (

        <div className="profile_content_container">
            <div className="signup_main_container" style={{ margin: "30px 0" }}>
                <div className="signup_title_box">
                    <i className="fas fa-hotel form_icon"></i>
                    <h3 className="signup_title">
                        اضافه کردن هتل
                        </h3>
                </div>
                <div className="add_hotel_container">
                    <div className="add_hotel_col">
                        <h3 className="add_hotel_caption_title">
                            با وارد کردن اطلاعات هتل خود را اضافه کنید.
                                <br />
                                امیدواریم مشتری بیاد تو هتلت.
                            </h3>

                        <form id="hotel_form" action="alibaba.ir" method="post"></form>
                        <form id="hotel_facility_form" action="alibaba.ir" method="post"></form>
                        <div className="add_hotel_form">
                            <div className="add_hotel_form_group width_35per">
                                <label className="add_hotel_form_label" for="hotel_city">
                                    شهر
                                    </label>
                                <input form="hotel_form" type="text" name="city" id="hotel_city" tabindex="10" dir="ltr" className="add_hotel_form_input" />
                                <select type="text" form="hotel_form" name="city" id="hotel_city" tabindex="10"
                                    dir="rtl" className="add_hotel_form_select_input">
                                    <option>Tehran</option>
                                    <option>Shiraz</option>
                                    <option>London</option>
                                    <option>Paris</option>
                                    <option>Tabriz</option>
                                </select>
                            </div>

                            <div className="add_hotel_form_group width_35per">
                                <label className="add_hotel_form_label" for="hotel_name">
                                    نام کامل هتل
                                    </label>
                                <input form="hotel_form" type="text" name="name" id="hotel_name" tabindex="10"
                                    dir="ltr" className="add_hotel_form_input" />

                            </div>

                            <div className="add_hotel_form_group width_75per">
                                <label className="add_hotel_form_label" for="hotel_address">
                                    آدرس دقیق هتل
                                    </label>
                                <input form="hotel_form" type="text" name="address" id="hotel_address" tabindex="10"
                                    dir="ltr" className="add_hotel_form_input" />
                            </div>

                            <div className="add_hotel_form_facility_form_container width_80per">

                                <h4>
                                    امکانات هتل
                                    </h4>

                                <div className="add_hotel_form_facility_item width_100per">
                                    <div className="add_hotel_form_group width_30per">
                                        <label className="add_hotel_form_label" for="facility_type1">
                                            نوع امکانات
                                            </label>
                                        <input form="hotel_facility_form" readonly="readonly" type="text" name="type" id="facility_type1" value="استخر" tabindex="10" dir="trl" className="add_hotel_form_input" />
                                        <select form="hotel_facility_form" name="type" id="facility_type1"
                                            disabled="disabled" tabindex="10" dir="rtl"
                                            className="add_hotel_form_select_input">
                                            <option className="add_hotel_form_select_option"> خوردنی</option>
                                            <option className="add_hotel_form_select_option" selected>استخر</option>
                                            <option className="add_hotel_form_select_option"> کلی </option>
                                            <option className="add_hotel_form_select_option">اینترنت</option>
                                            <option className="add_hotel_form_select_option"> حمل و نقل</option>
                                        </select>
                                    </div>

                                    <div className="add_hotel_form_group width_30per">
                                        <label className="add_hotel_form_label" for="facility_description1">
                                            توضیح امکانات
                                            </label>
                                        <input form="hotel_facility_form" readonly="readonly" type="text"
                                            name="description" id="facility_description1" value="آب گرم"
                                            tabindex="10" dir="rtl" className="add_hotel_form_input" />
                                    </div>

                                    <span className="hotel_facility_form_delete_facility">
                                        حذف امکان
                                        </span>
                                </div>

                                <div className="add_hotel_form_facility_item width_100per">
                                    <div className="add_hotel_form_group width_30per">
                                        <label className="add_hotel_form_label" for="facility_type2">
                                            نوع امکانات
                                            </label>
                                        <input form="hotel_facility_form" readonly="readonly" type="text" name="type" id="facility_type2" value="خوردنی" tabindex="10" dir="rtl" className="add_hotel_form_input" />
                                        <select type="text" form="hotel_facility_form" name="type"
                                            id="facility_type2" disabled="disabled" tabindex="10" dir="rtl"
                                            className="add_hotel_form_select_input">
                                            <option className="add_hotel_form_select_option" selected> خوردنی</option>
                                            <option className="add_hotel_form_select_option">استخر</option>
                                            <option className="add_hotel_form_select_option"> کلی </option>
                                            <option className="add_hotel_form_select_option">اینترنت</option>
                                            <option className="add_hotel_form_select_option"> حمل و نقل</option>
                                        </select>
                                    </div>

                                    <div className="add_hotel_form_group width_30per">
                                        <label className="add_hotel_form_label" for="facility_description2">
                                            توضیح امکانات
                                            </label>
                                        <input form="hotel_facility_form" readonly="readonly" type="text"
                                            name="description" id="facility_description2" value="رستوران ایتالیایی"
                                            tabindex="10" dir="rtl" className="add_hotel_form_input" />
                                    </div>
                                    <span className="hotel_facility_form_delete_facility">
                                        حذف امکان
                                        </span>

                                </div>

                                <div className="add_hotel_form_facility_item width_100per">
                                    <div className="add_hotel_form_group width_30per">
                                        <label className="add_hotel_form_label" for="facility_type3">
                                            نوع امکانات
                                            </label>
                                        <input form="hotel_facility_form" type="text" name="type" id="facility_type3" tabindex="10" dir="rtl" className="add_hotel_form_input" />
                                        <select form="hotel_facility_form" name="type" id="facility_type3"
                                            tabindex="10" dir="rtl" className="add_hotel_form_select_input">
                                            <option className="add_hotel_form_select_option"> خوردنی</option>
                                            <option className="add_hotel_form_select_option">استخر</option>
                                            <option className="add_hotel_form_select_option"> کلی </option>
                                            <option className="add_hotel_form_select_option">اینترنت</option>
                                            <option className="add_hotel_form_select_option"> حمل و نقل</option>
                                        </select>
                                    </div>

                                    <div className="add_hotel_form_group width_30per">
                                        <label className="add_hotel_form_label" for="facility_description3">
                                            توضیح امکانات
                                            </label>
                                        <input form="hotel_facility_form" type="text" name="description"
                                            id="facility_description3" tabindex="10" dir="rtl"
                                            className="add_hotel_form_input" />
                                    </div>
                                    <span className="hotel_facility_form_add_facility">
                                        ذخیره امکان
                                        </span>
                                </div>

                                <div className="add_hotel_facility_item">
                                    یک امکان دیگر
                                        <div
                                        style={{ display: "inline-block", marginTop: "3px", verticalAlign: "middle", width: "max-content" }}>
                                        <i className="fas fa-plus"></i></div>
                                </div>
                            </div>



                            <div className="add_hotel_form_group width_75per">
                                <label className="add_hotel_form_label" for="hotel_instructions">
                                    نکات ضروری
                                    </label>
                                <textarea form="hotel_form" name="instructions" id="hotel_instructions"
                                    tabindex="10" dir="ltr" className="add_hotel_form_input form_text_area">
                                </textarea>
                            </div>

                            <div className="add_hotel_form_group width_75per bottom_bordered">
                                <label className="add_hotel_form_label" for="hotel_image1">
                                    تصویر اول
                                    </label>
                                <div>
                                    <input form="hotel_form" type="file" name="image1" id="hotel_image1"
                                        tabindex="10" dir="rtl" className="add_hotel_form_file_input" />
                                </div>
                            </div>

                            <div className="add_hotel_form_group width_75per bottom_bordered">
                                <label className="add_hotel_form_label" for="hotel_image2">
                                    تصویر دوم
                                    </label>
                                <div>
                                    <input form="hotel_form" type="file" name="image2" id="hotel_image2"
                                        tabindex="10" dir="rtl" className="add_hotel_form_file_input" />
                                </div>
                            </div>

                            <div className="add_hotel_form_group width_75per bottom_bordered">
                                <label className="add_hotel_form_label" for="hotel_image3">
                                    تصویر سوم
                                    </label>
                                <div>
                                    <input form="hotel_form" type="file" name="image3" id="hotel_image3"
                                        tabindex="10" dir="rtl" className="add_hotel_form_file_input" />
                                </div>
                            </div>

                            <div className="add_hotel_form_group width_75per bottom_bordered">
                                <label className="add_hotel_form_label" for="hotel_image4">
                                    تصویر چهارم
                                    </label>
                                <div>
                                    <input form="hotel_form" type="file" name="image4" id="hotel_image4"
                                        tabindex="10" dir="rtl" className="add_hotel_form_file_input" />
                                </div>
                            </div>

                            <div className="add_hotel_form_group width_75per bottom_bordered">
                                <label className="add_hotel_form_label" for="hotel_image5">
                                    تصویر پنجم
                                    </label>
                                <div>
                                    <input form="hotel_form" type="file" name="image5" id="hotel_image5"
                                        tabindex="10" dir="rtl" className="add_hotel_form_file_input" />
                                </div>
                            </div>

                            <div className="add_hotel_form_group width_75per">
                                <label className="add_hotel_form_label" for="hotel_image6">
                                    تصویر ششم
                                    </label>
                                <div>
                                    <input form="hotel_form" type="file" name="image6" id="hotel_image6"
                                        tabindex="10" dir="rtl" className="add_hotel_form_file_input" />
                                </div>
                            </div>

                            <div className="vertical_space height_15"></div>
                            <div className="add_hotel_form_group">
                                <div>
                                    <label className="signup_form_checkbox_label" for="signup_rules"
                                        style={{ display: "inline-block" }}>
                                        <input form="hotel_form" type="checkbox" name="rules" id="signup_rules"
                                            className="signup_form_check_input" />
                                        <span className="signup_form_checkbox_button_control"></span>
                                        <span>
                                            <a href="/policy" className="rules">قوانین و مقررات کار با علی بابا</a>
                                                را می‌پذیرم.
                                            </span>
                                    </label>
                                </div>
                            </div>
                            <button form="hotel_form" className="login_button login_green_button" type="submit">
                                اضافه کن!
                                </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileAddHotel;