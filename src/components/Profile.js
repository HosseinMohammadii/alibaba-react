import React, { Component } from "react";

import ProfileAddHotel from "./ProfileAddHotel";
import ProfileAddRoom from "./ProfileAddRoom";
import ProfileEditInfo from "./ProfileEditInfo";
import ProfileHotelRooms from "./ProfileHotelRooms";
import ProfileHotels from "./ProfileHotels";

class Profile extends Component {

    state = {
        status: "add_hotel"
    }

    render() {
        let activeClass = "profile_menu_item profile_menu_item_selected bottom_bordered";
        let disableClass = "profile_menu_item bottom_bordered";

        let layout;
        if (this.state.status === "edit_info") {
            layout = <ProfileEditInfo />
        } else if (this.state.status === "add_hotel"){
            layout = <ProfileAddHotel />
        } else if (this.state.status === "hotels"){
            layout = <ProfileHotels />
        } else if (this.state.status === "add_room"){
            layout = <ProfileAddRoom />
        } else if (this.state.status === "hotel_rooms"){
            layout = <ProfileHotelRooms />
        }

        return (
            <div className="hotel_page_all_container">

                <div className="hotel_page_sub_all_container">

                    <div className="profile_menu_container">
                        <div
                            onClick={() => this.setState({ status: "edit_info" })}
                            className={this.state.status === "edit_info" ? activeClass : disableClass}>
                            ویرایش اطلاعات
                    </div>
                        <div
                            onClick={() => this.setState({ status: "add_hotel" })}
                            className={this.state.status === "add_hotel" ? activeClass : disableClass}>
                            اضافه کردن هتل
                    </div>
                        <div
                            onClick={() => this.setState({ status: "hotels" })}
                            className={this.state.status === "hotels" ? activeClass : disableClass}>
                            هتل ها
                    </div>
                        <div
                            onClick={() => this.setState({ status: "add_room" })}
                            className={this.state.status === "add_room" ? activeClass : disableClass}>
                            اضافه کردن اتاق
                    </div>
                        <div
                            onClick={() => this.setState({ status: "hotel_rooms" })}
                            className={this.state.status === "hotel_rooms" ? activeClass : disableClass}>
                            اتاق های یک هتل
                    </div>
                    </div>

                    {layout}

                </div>
            </div>
        )
    }
}

export default Profile;