import React, { useState } from "react";

const MegaMenu = () => {
  // Trạng thái hiển thị dropdown
  const [activeMenu, setActiveMenu] = useState(null);

  // Xử lý sự kiện hiển thị menu
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div style={{ backgroundColor: "white", padding: "10px", color: "gray", marginLeft: "50px"}}>
      <nav style={{ display: "flex", justifyContent: "start", gap: "30px" }}>
        {/* Nút dropdown */}
        {["Top Booked", "Doctors", "Specialists", "Symptoms"].map((menu) => (
          <div key={menu} style={{ position: "relative" }}>
            <button
              onClick={() => handleMenuClick(menu)}
              style={{
                backgroundColor: activeMenu === menu ? "#f1f5f9" : "white",
                color: activeMenu === menu ? "#000" : "black",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {menu} <span>▼</span>
            </button>
            {/* Nội dung dropdown */}
            {activeMenu === menu && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "white",
                  color: "black",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                  padding: "20px",
                  minWidth: "200px",
                }}
              >
                <h3 style={{ margin: "0 0 10px" }}>{menu}</h3>
                <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atque,...
                </p>
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MegaMenu;
