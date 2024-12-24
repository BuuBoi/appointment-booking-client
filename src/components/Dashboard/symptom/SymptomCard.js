import React from 'react';
import { Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

// interface AppointmentProps {
//   name: string;
//   time: string;
//   type: string;
//   examNumber?: number;
// }

 const SymptomCard = ({ symptom}) => {
  return (
    <div className="p-3 border-b hover:bg-gray-50 transition-colors">
      <Link to= {`view/${symptom.id}`} state={{ symptom }} className="flex items-center gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <img src={Symptom.imageUrl} alt="profile" className="w-10 h-10 rounded-md" />
          </div> */}
          <div>
            <h3 className="font-medium text-gray-900">{symptom.title}</h3>
            {/* <div className="flex items-center space-x-2">
              <span className={`inline-block w-2 h-2 rounded-full ${
                type === 'Follow Up' ? 'bg-blue-400' : 'bg-green-400'
              }`}></span>
              <span className="text-sm text-gray-500">{type}</span>
            </div> */}
          </div>
        </div>
        {/* <div className="flex items-center text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          <span className="text-sm">{time}</span>
        </div> */}
      </div>
      </Link>
    </div>
  );
};
export default SymptomCard;