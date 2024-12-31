import axiosConfig from "./../axiosConfig";
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
        const [specials, services] = await Promise.all([
            Specials.getAllSpecial(),
            Services.getAllService()
        ]);
        stats.services = services.length;
    stats.specials = specials.length;

    stats.doctors = 0; // Thêm logic sau
    stats.patients = 0; // Thêm logic sau
    stats.appointments = 0; // Thêm logic sau
    } catch (error) {
        console.error("Error fetching stats:", error);
      }
    return stats;
}