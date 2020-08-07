import React, { Component } from "react";
import axios from 'axios';

import Background from "../assets/images/004b51a5.jpg"
import { BaseUrl } from "../baseUrl";

const imageStyle = {
    backgroundImage: `url(${Background})`
}

class Hotels extends Component {

    state = {
        hotels: [],
    }

    componentDidMount() {
        console.log(BaseUrl)
        axios.get(BaseUrl + 'hotels/istanbul')
            .then(res => {
                const hotels = res.data;
                this.setState({ hotels });
            })
    }

    fetchHotels = (city) => {
        axios.get(BaseUrl + 'hotels/' + city)
            .then(res => {
                const hotels = res.data;
                this.setState({ hotels });
            })
    }

    render() {
        return (
            <div className="hotels_container">
                <h1 style={{ fontSize: "1.6em", fontWeight: "500", textAlign: "center" }}>
                    رزرو هتل
            </h1>
                <br style={{ lineHeight: "10px" }} />
                <h2 style={{ fontSize: "1.3em", fontWeight: "900", textAlign: "center" }}>
                    هتل های خارجی
            </h2>
                <div className="o-break-line">
                </div>

                <div style={{ textAlign: "center" }}>
                    <div onClick={() => this.fetchHotels('istanbul')} className="city_link" href="#!">
                        <small className="city_link_text">
                            استانبول
                    </small>
                    </div>

                    <div onClick={() => this.fetchHotels('dubai')} className="city_link" href="#!">
                        <small className="city_link_text">
                            دبی
                    </small>
                    </div>

                    <div onClick={() => this.fetchHotels('paris')} className="city_link" href="#!">
                        <small className="city_link_text">
                            پاریس
                    </small>
                    </div>

                    <div onClick={() => this.fetchHotels('ankara')} className="city_link" href="#!">
                        <small className="city_link_text">
                            آنکارا
                    </small>
                    </div>

                    <div onClick={() => this.fetchHotels('baku')} className="city_link" href="#!">
                        <small className="city_link_text">
                            باکو
                    </small>
                    </div>

                    <div onClick={() => this.fetchHotels('tblisi')} className="city_link" href="#!">
                        <small className="city_link_text">
                            تفلیس
                    </small>
                    </div>

                </div>

                <div className="">
                    <ul className="hotels_list">
                        {this.state.hotels.map((hotel, index) => {
                            let stars = []
                            for (let i = 0; i < parseInt(hotel.stars); i++) {
                                stars.push(<i className="fas fa-star hotel_item_star positive_star"></i>)
                            }

                            const noneStar = 5 - stars.length
                            console.log("noneStar", stars.length)
                            for (let i = 0; i < noneStar; i++) {
                                stars.push(<i className="fas fa-star hotel_item_star"></i>)
                            }

                            if (hotel.rate_number < 0) {
                                return null
                            } 
                            return (

                                <li className="hotel_item_container">
                                    <div className="hotel_item">
                                        <a href={"/hotel/" + parseInt(hotel._id)}>
                                            <div className="hotel_item_image" style={imageStyle}>
                                            </div>
                                            <div className="hotel_item_info">
                                                <div className="hotel_item_title_container">
                                                    <p className="hotel_item_title">
                                                        {hotel.name}
                                                    </p>
                                                    <div style={{ direction: "ltr", lineHeight: "0.5" }}>
                                                        {stars}
                                                    </div>
                                                </div>

                                                <hr style={{ marginTop: "10px", marginBottom: "25px", border: "0", borderTop: "2px solid #f0f0f0", height: "0" }} />
                                                <div className="hotel_detail_container">
                                                    <div style={{ width: "fit-content" }}>
                                                        <p className="hotel_price_title">
                                                            شروع قیمت از
                                            </p>
                                                        <strong className="hotel_item_price">
                                                            {hotel.price} ریال
                                            </strong>
                                                    </div>

                                                    <div className="hotel_item_detail_btn">
                                                        مشاهده و رزرو
                                        </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                </div>

            </div>
        )
    }
}

export default Hotels;