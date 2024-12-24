// utils/cn.js
export const cn = (...classes) => {
    return classes
      .filter(Boolean) // Loại bỏ giá trị falsy như null, undefined, false
      .join(" ")
      .trim();
  };
  