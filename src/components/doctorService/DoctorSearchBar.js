import React, { useState } from 'react';
import { Search, MapPin, Stethoscope, Building2 } from 'lucide-react';

// interface SearchFilters {
//   province: string;
//   district: string;
//   specialization: string;
//   service: string;
//   name: string;
// }

// interface DoctorSearchBarProps {
//   onSearch: (filters: SearchFilters) => void;
//   specializations: Array<{ id: string; name: string }>;
//   services: Array<{ id: string; name: string }>;
//   provinces: Array<{ id: string; name: string }>;
//   districts: Array<{ id: string; name: string; provinceId: string }>;
// }

export const DoctorSearchBar = ({
  onSearch,
  specializations,
  services,
  provinces
}) => {
  const [filters, setFilters] = useState({
    province: '',
    provinceName: '',
    specialization: '',
    service: '',
    name: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
     onSearch(filters);
  };

  const handleProvinceChange = (e) => {
    const selectedId = e.target.value;
  const selectedProvince = provinces.find(province => province.id === Number(selectedId));
  console.log(selectedProvince);
    setFilters(prev => ({
      ...prev,
      province: e.target.value,
      provinceName: selectedProvince ? selectedProvince.name : ''
    }));
  };
  const handleSpecialChange = (e) => {
    const selectedId = e.target.value;
  const selectedSpecial = specializations.find(specialization => specialization.id === selectedId);
  console.log(selectedSpecial);
    setFilters(prev => ({
      ...prev,
      specialization: e.target.value,
      specializationName: selectedSpecial ? selectedSpecial.slug : ''
    }));
  };


  return (
    <form onSubmit={handleSubmit} className="w-full bg-white rounded-lg shadow-sm p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.province}
            onChange={(e) => handleProvinceChange(e)}
          >
            <option value="">Chọn tỉnh/thành phố</option>
            {provinces.map(province => (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            ))}
          </select>
        </div>


        <div className="relative">
          <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.specialization}
            onChange={(e) => handleSpecialChange(e)}
          >
            <option value="">Chọn chuyên khoa</option>
            {specializations.map(spec => (
              <option key={spec.id} value={spec.id}>
                {spec.title}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.service}
            onChange={(e) => setFilters(prev => ({ ...prev, service: e.target.value }))}
          >
            <option value="">Chọn dịch vụ</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Nhập tên bác sĩ..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.name}
            onChange={(e) => setFilters(prev => ({ ...prev, name: e.target.value }))}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Tìm bác sĩ
        </button>
      </div>
    </form>
  );
};