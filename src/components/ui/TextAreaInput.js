// import * as React from "react"

// import { cn } from "../utils/cn"

// const TextAreaInput = ({ className, ...props }) => {
//   return (
//     <textarea
//       className={cn(
//         "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//         className
//       )}
//       {...props}
//     />
//   )
// }
// export { TextAreaInput }

import React from "react";
import { cn } from "../utils/cn"; // Giả sử bạn đã tạo hàm cn

export default function TextareaInput({
  label,
  name,
  error,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "col-span-full sm:col-span-9 py-4 px-5",
}) {
  return (
    <div className={cn(className, "grid gap-2")}>
      {/* Label */}
      {label && (
        <label
          htmlFor={`${name}`}
          className="text-sm font-semibold uppercase text-gray-700"
        >
          {label}
        </label>
      )}

      {/* Input */}
      <textarea
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
