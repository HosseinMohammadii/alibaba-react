import React from "react";

const ProfileAddRoom = () => {
    return (

        <div className="profile_content_container">
            <div className="signup_main_container" style={{ margin: "30px 0" }}>
                <div className="signup_title_box">
                    <i className="fas fa-bed form_icon" ></i>
                    <h3 className="signup_title">
                        اضافه کردن اتاق
                                </h3>
                </div>
                <div className="add_hotel_container">
                    <div className="add_hotel_col">
                        <h3 className="add_hotel_caption_title">
                            با انتخاب هتل به آن اتاق اضافه کنید.
                                            <br />
                                            اتاق هارو تمیز کنید.
                                        </h3>

                        <form id="room_form" action="alibaba.ir" method="post"></form>
                        <form id="hotel_facility_form" action="alibaba.ir" method="post"></form>
                        <div className="add_hotel_form" >

                            <div className="add_hotel_form_group width_35per">
                                <label className="add_hotel_form_label" for="room_hotel">
                                    هتل
                                            </label>
                                <select type="number" form="room_form" name="hotel" id="room_hotel" tabindex="10" dir="rtl" className="add_hotel_form_select_input">
                                    <option value='2' >Guzal Istanbul</option>
                                    <option value='10'>Istanbul Bakh mana</option>
                                    <option value='3'>Art Paris</option>
                                    <option value='8'>Berlin Grand Hotel</option>
                                    <option value='25'>Taleghani Tehran</option>
                                </select>
                            </div>

                            <div className="vertical_space height_10"></div>

                            <div className="add_hotel_form_group width_35per">
                                <label className="add_hotel_form_label" for="room_name">
                                    نام کامل اتاق
                                            </label>
                                <input form="room_form" type="text" name="name" id="room_name" tabindex="10" dir="ltr" className="add_hotel_form_input" />
                            </div>

                            <div className="add_hotel_form_group width_75per">
                                <label className="add_hotel_form_label" for="room_has_breakfast">
                                    صبحانه دارد؟
                                            </label>
                                <input form="hotel_form" type="text" name="address" id="hotel_address" tabindex="10" dir="ltr" className="add_hotel_form_input" />
                                <input type="checkbox" name="has_breakfast" id="room_has_breakfast" className="has_breakfast_checkbox" />
                            </div>

                            <div className="vertical_space height_5"></div>

                            <div className="add_hotel_form_group width_15per">
                                <label className="add_hotel_form_label" for="room_adults_number">
                                    تعداد بزرگسال
                                            </label>
                                <input form="hotel_form" type="text" name="address" id="hotel_address" tabindex="10" dir="ltr" className="add_hotel_form_input" />
                                <select type="number" form="room_form" name="adults_number" id="room_adults_number" tabindex="10" dir="rtl" className="add_hotel_form_select_input">
                                    <option value='0'>0</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='1'>4</option>
                                </select>
                            </div>

                            <div className="add_hotel_form_group width_15per">
                                <label className="add_hotel_form_label" for="room_children_number">
                                    تعداد کوچکسال
                                            </label>
                                <input form="hotel_form" type="text" name="address" id="hotel_address" tabindex="10" dir="ltr" className="add_hotel_form_input" />
                                <select type="number" form="room_form" name="children_number" id="room_children_number" tabindex="10" dir="rtl" className="add_hotel_form_select_input">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="1">4</option>
                                </select>
                            </div>
                            <div className="vertical_space"></div>


                            <button form="room_form" className="login_button login_green_button" type="submit">
                                اضافه کن!
                                        </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileAddRoom;