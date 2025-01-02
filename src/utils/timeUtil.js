// Chuyển đổi chuỗi thời gian (VD: "09:00") thành số phút để so sánh
export const convertTimeToMinutes = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // Sắp xếp mảng các chuỗi thời gian
export const sortTimeStrings = (timeArray) => {
    return [...timeArray].sort((a, b) => {
      return convertTimeToMinutes(a) - convertTimeToMinutes(b);
    });
  };

  // Định dạng ngày theo mẫu: "Tue, Mar 12"
export const formatDate = (date = new Date()) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short', // Tue
      month: 'short',   // Mar
      day: 'numeric'    // 12
    });
  };