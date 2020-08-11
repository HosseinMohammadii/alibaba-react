import React from "react";
import ProfileEditInfo from "./ProfileEditInfo";

const ProfileHotelRooms = () => {
    return (

        <div className="profile_content_container">

            <form id="select_hotel" className="add_hotel_form">
                <label className="add_hotel_form_label" style={{ fontSize: "20px" }} for="hotel">
                    هتل را انتخاب کنید.
                            </label>
                <select type="number" form="select_hotel" name="hotel" id="hotel" tabindex="10" dir="rtl" className="add_hotel_form_select_input">
                    <option value="2" >Guzal Istanbul</option>
                    <option value="10">Istanbul Bakh mana</option>
                    <option value="3">Art Paris</option>
                    <option value="8">Berlin Grand Hotel</option>
                    <option value="25">Taleghani Tehran</option>
                </select>
            </form>

            <div className="hotel_page_main_info_rooms_container" id="rooms">

                <p style={{ margin: "20px 0", fontSize: "15px" }}>
                    فیلتر اتاق ها بر اساس وعده غذایی
                            </p>

                <div className="hotel_page_rooms_filters_container">
                    <a className="hotel_page_rooms_filter">
                        همه
                                </a>

                    <div className="vertical-break height_45"> </div>

                    <a className="hotel_page_rooms_filter">
                        <span data-v-00422f60="" className="mealplan no_food"><small style={{ fontSize: "85%" }}>RO</small></span>
                                    بدون وعده غذایی

                                </a>

                    <a className="hotel_page_rooms_filter">
                        <span data-v-00422f60="" className="mealplan with_breakfast"><small style={{ fontSize: "85%" }}>BB</small></span>
                                    صبحانه
                                </a>

                </div>

                <div className="hotel_page_rooms_container">
                    <div className="hotel_page_room_selection">
                        <div className="hotel_page_rooms_choices_container">
                            <div className="hotel_page_choice_room">
                                <p className="hotel_page_room_info_title">
                                    SUPERIOR DOUBLE ROOM
                                            </p>
                                <div className="hotel_page_room_info_detail">
                                    <div className="hotel_page_room_info_food">
                                        <span className="mealplan no_food"><small style={{ fontSize: "60%" }}>RO</small></span>
                                        <p className="hotel_page_room_info_food_type">
                                            بدون وعده غذایی
                                                    </p>
                                    </div>

                                    <div className="vertical-break height_30"> </div>

                                    <div className="hotel_page_room_info_person_container">
                                        <svg style={{ verticalAlign: "sub", display: "inline-block", paddingTop: "5px" }} width="17px" height="17px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ariaHidden="true" focusable="false" className="room-details__item__icon"><g data-v-920a8654="" fill="currentColor" fill-rule="nonzero"><path data-v-920a8654="" d="M12,10.5 C14.6233526,10.5 16.75,8.37335256 16.75,5.75 C16.75,3.12664744 14.6233526,1 12,1 C9.37664744,1 7.25,3.12664744 7.25,5.75 C7.25,8.37335256 9.37664744,10.5 12,10.5 Z M12,11.5 C8.82436269,11.5 6.25,8.92563731 6.25,5.75 C6.25,2.57436269 8.82436269,0 12,0 C15.1756373,0 17.75,2.57436269 17.75,5.75 C17.75,8.92563731 15.1756373,11.5 12,11.5 Z M22,24 C22,18.4771525 17.5228475,14 12,14 C6.4771525,14 2,18.4771525 2,24 L1,24 C1,17.9248678 5.92486775,13 12,13 C18.0751322,13 23,17.9248678 23,24 L22.5,24 L22,24 Z"></path></g></svg>

                                        <p className="hotel_page_room_info_person_number">
                                            2
                                                    </p>
                                        <p className="hotel_page_room_info_person_type">
                                            بزرگسال
                                                    </p>

                                    </div>

                                    <div className="vertical-break height_30"> </div>

                                    <div className="hotel_page_room_info_price_container">
                                        <p className="hotel_page_room_info_price_description">
                                            قیمت برای یک شب:
                                                    </p>

                                        <p className="hotel_page_room_info_price">
                                            29,062,000
                                                    </p>

                                        <p className="hotel_page_room_info_price_unit">
                                            ریال
                                                    </p>

                                    </div>

                                    <div className="vertical-break height_30"> </div>

                                    <div className="hotel_page_room_info_cancel_container">
                                        <a>
                                            <p className="hotel_page_room_info_cancel">
                                                قوانین کنسلی
                                                        </p>

                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="hotel_page_room_reserve">
                            <div className="hotel_page_room_reserve_info_container">
                                <p className="hotel_page_room_reserve_info_total_price_description">
                                    جمع قیمت برای
                                            </p>
                                <div className="hotel_page_room_reserve_info_total_nights">
                                    1 شب
                                            </div>

                                <div className="hotel_page_room_reserve_info_total_price">
                                    29,062,000
                                            </div>

                                <div className="hotel_page_room_reserve_info_price_unit">
                                    ریال
                                            </div>
                            </div>

                            <a className="hotel_page_room_reserve_button">
                                ویرایش این اتاق
                                        </a>
                        </div>
                    </div>
                    <div className="hotel_page_room_selection">
                        <div className="hotel_page_room_choices_container">
                            <div className="hotel_page_choice_room">
                                <p className="hotel_page_room_info_title">
                                    SUPERIOR DOUBLE ROOM
                                            </p>
                                <div className="hotel_page_room_info_detail">
                                    <div className="hotel_page_room_info_food">
                                        <span className="mealplan no_food"><small style={{ fontSize: "60%" }}>RO</small></span>
                                        <p className="hotel_page_room_info_food_type">
                                            بدون وعده غذایی
                                                    </p>
                                    </div>

                                    <div className="vertical-break height_30"> </div>

                                    <div className="hotel_page_room_info_person_container">
                                        <svg style={{ verticalAlign: "sub", display: "inline-block", paddingTop: "5px" }} width="17px" height="17px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ariaHidden="true" focusable="false" className="room-details__item__icon"><g data-v-920a8654="" fill="currentColor" fill-rule="nonzero"><path data-v-920a8654="" d="M12,10.5 C14.6233526,10.5 16.75,8.37335256 16.75,5.75 C16.75,3.12664744 14.6233526,1 12,1 C9.37664744,1 7.25,3.12664744 7.25,5.75 C7.25,8.37335256 9.37664744,10.5 12,10.5 Z M12,11.5 C8.82436269,11.5 6.25,8.92563731 6.25,5.75 C6.25,2.57436269 8.82436269,0 12,0 C15.1756373,0 17.75,2.57436269 17.75,5.75 C17.75,8.92563731 15.1756373,11.5 12,11.5 Z M22,24 C22,18.4771525 17.5228475,14 12,14 C6.4771525,14 2,18.4771525 2,24 L1,24 C1,17.9248678 5.92486775,13 12,13 C18.0751322,13 23,17.9248678 23,24 L22.5,24 L22,24 Z"></path></g></svg>

                                        <p className="hotel_page_room_info_person_number">
                                            2
                                                    </p>
                                        <p className="hotel_page_room_info_person_type">
                                            بزرگسال
                                                    </p>

                                    </div>

                                    <div className="vertical-break height_30"> </div>

                                    <div className="hotel_page_room_info_price_container">
                                        <p className="hotel_page_room_info_price_description">
                                            قیمت برای یک شب:
                                                    </p>

                                        <p className="hotel_page_room_info_price">
                                            29,062,000
                                                    </p>

                                        <p className="hotel_page_room_info_price_unit">
                                            ریال
                                                    </p>

                                    </div>

                                    <div className="vertical-break height_30"> </div>

                                    <div className="hotel_page_room_info_cancel_container">
                                        <a>
                                            <p className="hotel_page_room_info_cancel">
                                                قوانین کنسلی
                                                        </p>

                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className="hotel_page_choice_room top_bordered">
                                <p className="hotel_page_room_info_title">
                                    SUPERIOR DOUBLE ROOM
                                            </p>
                                <div className="hotel_page_room_info_detail">
                                    <div className="hotel_page_room_info_food">
                                        <span className="mealplan no_food"><small style={{ fontSize: "60%" }}>RO</small></span>
                                        <p className="hotel_page_room_info_food_type">
                                            بدون وعده غذایی
                                                    </p>
                                    </div>

                                    <div className="vertical-break height_30"> </div>

                                    <div className="hotel_page_room_info_person_container">
                                        <svg style={{ verticalAlign: "sub", display: "inline-block", paddingTop: "5px" }} width="17px" height="17px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ariaHidden="true" focusable="false" className="room-details__item__icon"><g data-v-920a8654="" fill="currentColor" fill-rule="nonzero"><path data-v-920a8654="" d="M12,10.5 C14.6233526,10.5 16.75,8.37335256 16.75,5.75 C16.75,3.12664744 14.6233526,1 12,1 C9.37664744,1 7.25,3.12664744 7.25,5.75 C7.25,8.37335256 9.37664744,10.5 12,10.5 Z M12,11.5 C8.82436269,11.5 6.25,8.92563731 6.25,5.75 C6.25,2.57436269 8.82436269,0 12,0 C15.1756373,0 17.75,2.57436269 17.75,5.75 C17.75,8.92563731 15.1756373,11.5 12,11.5 Z M22,24 C22,18.4771525 17.5228475,14 12,14 C6.4771525,14 2,18.4771525 2,24 L1,24 C1,17.9248678 5.92486775,13 12,13 C18.0751322,13 23,17.9248678 23,24 L22.5,24 L22,24 Z"></path></g></svg>

                                        <p className="hotel_page_room_info_person_number">
                                            2
                                                    </p>
                                        <p className="hotel_page_room_info_person_type">
                                            بزرگسال
                                                    </p>

                                    </div>

                                    <div className="vertical-break height_30"> </div>

                                    <div className="hotel_page_room_info_price_container">
                                        <p className="hotel_page_room_info_price_description">
                                            قیمت برای یک شب:
                                                    </p>

                                        <p className="hotel_page_room_info_price">
                                            29,062,000
                                                    </p>

                                        <p className="hotel_page_room_info_price_unit">
                                            ریال
                                                    </p>

                                    </div>

                                    <div className="vertical-break height_30"> </div>

                                    <div className="hotel_page_room_info_cancel_container">
                                        <a>
                                            <p className="hotel_page_room_info_cancel">
                                                قوانین کنسلی
                                                        </p>

                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="hotel_page_room_reserve">
                            <div className="hotel_page_room_reserve_info_container">
                                <p className="hotel_page_room_reserve_info_total_price_description">
                                    جمع قیمت برای
                                            </p>
                                <div className="hotel_page_room_reserve_info_total_nights">
                                    1 شب
                                            </div>

                                <div className="hotel_page_room_reserve_info_total_price">
                                    52,124,000
                                            </div>

                                <div className="hotel_page_room_reserve_info_price_unit">
                                    ریال
                                            </div>
                            </div>

                            <a className="hotel_page_room_reserve_button">
                                ویرایش این اتاق
                                        </a>
                        </div>
                    </div>
                    <div className="hotel_page_room_selection">
                        <div className="hotel_page_choice_room">
                            <p className="hotel_page_room_info_title">
                                SUPERIOR DOUBLE ROOM
                                        </p>
                            <div className="hotel_page_room_info_detail">
                                <div className="hotel_page_room_info_food">
                                    <span className="mealplan no_food"><small style={{ fontSize: "60%" }}>RO</small></span>
                                    <p className="hotel_page_room_info_food_type">
                                        بدون وعده غذایی
                                                </p>
                                </div>

                                <div className="vertical-break height_30"> </div>

                                <div className="hotel_page_room_info_person_container">
                                    <svg style={{ verticalAlign: "sub", display: "inline-block", paddingTop: "5px" }} width="17px" height="17px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ariaHidden="true" focusable="false" className="room-details__item__icon"><g data-v-920a8654="" fill="currentColor" fill-rule="nonzero"><path data-v-920a8654="" d="M12,10.5 C14.6233526,10.5 16.75,8.37335256 16.75,5.75 C16.75,3.12664744 14.6233526,1 12,1 C9.37664744,1 7.25,3.12664744 7.25,5.75 C7.25,8.37335256 9.37664744,10.5 12,10.5 Z M12,11.5 C8.82436269,11.5 6.25,8.92563731 6.25,5.75 C6.25,2.57436269 8.82436269,0 12,0 C15.1756373,0 17.75,2.57436269 17.75,5.75 C17.75,8.92563731 15.1756373,11.5 12,11.5 Z M22,24 C22,18.4771525 17.5228475,14 12,14 C6.4771525,14 2,18.4771525 2,24 L1,24 C1,17.9248678 5.92486775,13 12,13 C18.0751322,13 23,17.9248678 23,24 L22.5,24 L22,24 Z"></path></g></svg>

                                    <p className="hotel_page_room_info_person_number">
                                        2
                                                </p>
                                    <p className="hotel_page_room_info_person_type">
                                        بزرگسال
                                                </p>

                                </div>

                                <div className="vertical-break height_30"> </div>

                                <div className="hotel_page_room_info_price_container">
                                    <p className="hotel_page_room_info_price_description">
                                        قیمت برای یک شب:
                                                </p>

                                    <p className="hotel_page_room_info_price">
                                        29,062,000
                                                </p>

                                    <p className="hotel_page_room_info_price_unit">
                                        ریال
                                                </p>

                                </div>

                                <div className="vertical-break height_30"> </div>

                                <div className="hotel_page_room_info_cancel_container">
                                    <a>
                                        <p className="hotel_page_room_info_cancel">
                                            قوانین کنسلی
                                                    </p>

                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="hotel_page_room_reserve">
                            <div className="hotel_page_room_reserve_info_container">
                                <p className="hotel_page_room_reserve_info_total_price_description">
                                    جمع قیمت برای
                                            </p>
                                <div className="hotel_page_room_reserve_info_total_nights">
                                    1 شب
                                            </div>

                                <div className="hotel_page_room_reserve_info_total_price">
                                    29,062,000
                                            </div>

                                <div className="hotel_page_room_reserve_info_price_unit">
                                    ریال
                                            </div>
                            </div>

                            <a className="hotel_page_room_reserve_button">
                                ویرایش این اتاق
                                        </a>
                        </div>
                    </div>
                    <div className="hotel_page_room_selection">
                        <div className="hotel_page_choice_room">
                            <p className="hotel_page_room_info_title">
                                SUPERIOR DOUBLE ROOM
                                        </p>
                            <div className="hotel_page_room_info_detail">
                                <div className="hotel_page_room_info_food">
                                    <span className="mealplan no_food"><small style={{ fontSize: "60%" }}>RO</small></span>
                                    <p className="hotel_page_room_info_food_type">
                                        بدون وعده غذایی
                                                </p>
                                </div>

                                <div className="vertical-break height_30"> </div>

                                <div className="hotel_page_room_info_person_container">
                                    <svg style={{ verticalAlign: "sub", display: "inline-block", paddingTop: "5px" }} width="17px" height="17px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ariaHidden="true" focusable="false" className="room-details__item__icon"><g data-v-920a8654="" fill="currentColor" fill-rule="nonzero"><path data-v-920a8654="" d="M12,10.5 C14.6233526,10.5 16.75,8.37335256 16.75,5.75 C16.75,3.12664744 14.6233526,1 12,1 C9.37664744,1 7.25,3.12664744 7.25,5.75 C7.25,8.37335256 9.37664744,10.5 12,10.5 Z M12,11.5 C8.82436269,11.5 6.25,8.92563731 6.25,5.75 C6.25,2.57436269 8.82436269,0 12,0 C15.1756373,0 17.75,2.57436269 17.75,5.75 C17.75,8.92563731 15.1756373,11.5 12,11.5 Z M22,24 C22,18.4771525 17.5228475,14 12,14 C6.4771525,14 2,18.4771525 2,24 L1,24 C1,17.9248678 5.92486775,13 12,13 C18.0751322,13 23,17.9248678 23,24 L22.5,24 L22,24 Z"></path></g></svg>

                                    <p className="hotel_page_room_info_person_number">
                                        2
                                                </p>
                                    <p className="hotel_page_room_info_person_type">
                                        بزرگسال
                                                </p>

                                </div>

                                <div className="vertical-break height_30"> </div>

                                <div className="hotel_page_room_info_price_container">
                                    <p className="hotel_page_room_info_price_description">
                                        قیمت برای یک شب:
                                                </p>

                                    <p className="hotel_page_room_info_price">
                                        29,062,000
                                                </p>

                                    <p className="hotel_page_room_info_price_unit">
                                        ریال
                                                </p>

                                </div>

                                <div className="vertical-break height_30"> </div>

                                <div className="hotel_page_room_info_cancel_container">
                                    <a>
                                        <p className="hotel_page_room_info_cancel">
                                            قوانین کنسلی
                                                    </p>

                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="hotel_page_room_reserve">
                            <div className="hotel_page_room_reserve_info_container">
                                <p className="hotel_page_room_reserve_info_total_price_description">
                                    جمع قیمت برای
                                            </p>
                                <div className="hotel_page_room_reserve_info_total_nights">
                                    1 شب
                                            </div>

                                <div className="hotel_page_room_reserve_info_total_price">
                                    29,062,000
                                            </div>

                                <div className="hotel_page_room_reserve_info_price_unit">
                                    ریال
                                            </div>
                            </div>

                            <a className="hotel_page_room_reserve_button">
                                ویرایش این اتاق
                                        </a>
                        </div>
                    </div>
                    <div className="hotel_page_room_selection">
                        <div className="hotel_page_choice_room">
                            <p className="hotel_page_room_info_title">
                                SUPERIOR DOUBLE ROOM
                                        </p>
                            <div className="hotel_page_room_info_detail">
                                <div className="hotel_page_room_info_food">
                                    <span className="mealplan no_food"><small style={{ fontSize: "60%" }}>RO</small></span>
                                    <p className="hotel_page_room_info_food_type">
                                        بدون وعده غذایی
                                                </p>
                                </div>

                                <div className="vertical-break height_30"> </div>

                                <div className="hotel_page_room_info_person_container">
                                    <svg style={{ verticalAlign: "sub", display: "inline-block", paddingTop: "5px" }} width="17px" height="17px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ariaHidden="true" focusable="false" className="room-details__item__icon"><g data-v-920a8654="" fill="currentColor" fill-rule="nonzero"><path data-v-920a8654="" d="M12,10.5 C14.6233526,10.5 16.75,8.37335256 16.75,5.75 C16.75,3.12664744 14.6233526,1 12,1 C9.37664744,1 7.25,3.12664744 7.25,5.75 C7.25,8.37335256 9.37664744,10.5 12,10.5 Z M12,11.5 C8.82436269,11.5 6.25,8.92563731 6.25,5.75 C6.25,2.57436269 8.82436269,0 12,0 C15.1756373,0 17.75,2.57436269 17.75,5.75 C17.75,8.92563731 15.1756373,11.5 12,11.5 Z M22,24 C22,18.4771525 17.5228475,14 12,14 C6.4771525,14 2,18.4771525 2,24 L1,24 C1,17.9248678 5.92486775,13 12,13 C18.0751322,13 23,17.9248678 23,24 L22.5,24 L22,24 Z"></path></g></svg>

                                    <p className="hotel_page_room_info_person_number">
                                        2
                                                </p>
                                    <p className="hotel_page_room_info_person_type">
                                        بزرگسال
                                                </p>

                                </div>

                                <div className="vertical-break height_30"> </div>

                                <div className="hotel_page_room_info_price_container">
                                    <p className="hotel_page_room_info_price_description">
                                        قیمت برای یک شب:
                                                </p>

                                    <p className="hotel_page_room_info_price">
                                        29,062,000
                                                </p>

                                    <p className="hotel_page_room_info_price_unit">
                                        ریال
                                                </p>

                                </div>

                                <div className="vertical-break height_30"> </div>

                                <div className="hotel_page_room_info_cancel_container">
                                    <a>
                                        <p className="hotel_page_room_info_cancel">
                                            قوانین کنسلی
                                                    </p>

                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="hotel_page_room_reserve">
                            <div className="hotel_page_room_reserve_info_container">
                                <p className="hotel_page_room_reserve_info_total_price_description">
                                    جمع قیمت برای
                                            </p>
                                <div className="hotel_page_room_reserve_info_total_nights">
                                    1 شب
                                            </div>

                                <div className="hotel_page_room_reserve_info_total_price">
                                    29,062,000
                                            </div>

                                <div className="hotel_page_room_reserve_info_price_unit">
                                    ریال
                                            </div>
                            </div>

                            <a className="hotel_page_room_reserve_button">
                                ویرایش این اتاق
                                        </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProfileHotelRooms;