const mockData = {
    "/getServiceByDoctorId": {
      data: [
        { id: 1, doctorId: 101, name: "Service A" },
        { id: 2, doctorId: 101, name: "Service B" },
      ],
    },
    "/getPatientsByDoctorId": {
      data: [
        { id: 1, name: "Patient A", age: 30 },
        { id: 2, name: "Patient B", age: 45 },
      ],
    },
    "/getAppointments": {
      data: [
        { id: 1, doctorId: 101, patientId: 1, time: "2024-01-01 10:00" },
        { id: 2, doctorId: 101, patientId: 2, time: "2024-01-02 11:00" },
      ],
    },
  };
  
  export default mockData;
  