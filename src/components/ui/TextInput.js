import React from "react";
import { cn } from "../utils/cn"; // Giả sử bạn đã tạo hàm cn

export default function TextInput({
  name,
  error,
  type = "text",
  placeholder,
  page,
  value,
  onChange,
  className = "col-span-full sm:col-span-9 py-4 px-5",
}) {
  return (
    <div className={cn(className, "grid gap-2")}>
      {/* Label */}
      {name && (
        <label htmlFor={name} className="text-sm font-semibold uppercase text-gray-700">
          {name}
        </label>
      )}

      {/* Input */}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full border rounded-lg py-2 px-3 text-gray-800 focus:ring focus:ring-blue-300 outline-none",
          error && "border-red-500" // Thêm border đỏ khi có lỗi
        )}
      />

      {/* Hiển thị lỗi */}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
