export const formatVND = (value) => { //format tien viet nam
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(value);
  }
  
  export const roundToHundredThousand = (value) => {
    return Math.round(value / 100000) * 100000;
  }