import React from "react";
import { Dashboard } from "../../components/Dashboard/DashBoard";
{
  /* 
  Thư mục app:

Đây là nơi chứa các routes và component trong Next.js 13+.
app thư mục thường được sử dụng với App Router, nơi bạn sẽ cấu hình các trang, các tuyến đường, và các thành phần (components) của bạn.
Thư mục (front) và (back):

Trong Next.js 13, các thư mục có thể được đánh dấu bằng (front) và (back) để phân biệt client-side và server-side.
(front) chứa các trang và component mà chạy trên client-side.
(back) chứa các trang và logic xử lý phía server (ví dụ như API routes).
Thông qua cách đặt tên này, tác giả có thể dễ dàng phân biệt giữa các phần của ứng dụng, chẳng hạn như:

(front): Các component, trang, và logic dành cho frontend (client-side), tức là những gì chạy trên trình duyệt của người dùng.
(back): Các API routes hoặc các page phục vụ cho việc xử lý dữ liệu từ phía server, có thể thực hiện các tác vụ như gọi cơ sở dữ liệu hoặc xử lý logic phức tạp.
  */
}
export default function DashboarPage() {
  return <Dashboard />;
}
