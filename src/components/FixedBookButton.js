import React from 'react'
import { formatVND } from '../utils/currency'
import { format } from 'date-fns'
import {useNavigate} from "react-router-dom"
import { fetchProfile } from "../services/fetchUserProfileByToken";

export default function FixedBookButton({price, date, time, onClickBooking}) {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchProfile(navigate);
      if (!data) return;
      console.log("Profile By Token: ", data);
      onClickBooking(date, time, data.id)
    } catch (error) {
      console.error("Error Button Booking: ", error);
    }
  };

  return (
    <div className="shadow-2xl py-6 px-6 rounded-md flex justify-between  border bg-slate-300"> {/*fixed w-[896px] left-1/2 -translate-x-1/2 bottom-0   */}
            <div className="text-blue-950 font-bold px-5">
              <p>{formatVND(price)}</p>
              <p>{`${format(date, "EEEE, dd/MM/yyyy")} - ${time}`}</p>
            </div>
            <div>
              <button className="bg-blue-700 py-2 px-6 rounded-lg hover:shadow-lg" onClick={(e) => handleSubmit(e)}>
                Book
              </button>
            </div>
          </div>
  )
}
