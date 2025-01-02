// Chuyển đổi chuỗi thời gian (VD: "09:00") thành số phút để so sánh
export const convertTimeToMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
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
  return date.toLocaleDateString("en-US", {
    weekday: "short", // Tue
    month: "short", // Mar
    day: "numeric", // 12
  });
};

/**
 * Calculates the elapsed time from a given datetime string in a human-readable format
 * @param dateTimeStr - ISO datetime string from backend (LocalDateTime)
 * @returns Human readable elapsed time string
 */
export function getTimeElapsed(dateTimeStr) {
  const date = new Date(dateTimeStr);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Less than a minute
  if (diffInSeconds < 60) {
    return "Vừa xong";
  }

  // Less than an hour
  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} phút trước`;
  }

  // Less than a day
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} giờ trước`;
  }

  // Less than a week
  if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} ngày trước`;
  }

  // Less than a month
  if (diffInSeconds < 2592000) {
    const weeks = Math.floor(diffInSeconds / 604800);
    return `${weeks} tuần trước`;
  }

  // Less than a year
  if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000);
    return `${months} tháng trước`;
  }

  // More than a year
  const years = Math.floor(diffInSeconds / 31536000);
  return `${years} năm trước`;
}
