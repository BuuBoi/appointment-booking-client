import axiosConfig from "./../axiosConfig";
import { getAllAppointment } from "./appointment";
import { getAllDoctors } from "./doctorProfile";
import * as Services from './service';
import * as Specials from './special';


export async function getStats() {
    const stats = {
        doctors: 0,
        patients: 0,
        appointments: 0,
        services: 0,
        specials: 0
    };

    try{
        const [specials, services,doctors,appointments] = await Promise.all([
            Specials.getAllSpecial(),
            Services.getAllService(),
            getAllDoctors(),
            getAllAppointment()
        ]);
    stats.services = services.length;
    stats.specials = specials.length;
    stats.doctors = doctors.data.length; 
    stats.appointments = appointments.length; // Thêm logic sau
    console.log(doctors);
    } catch (error) {
        console.error("Error fetching stats:", error);
      }
    return stats;
}