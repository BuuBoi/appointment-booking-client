import axios from 'axios';
const uploadImage = async (file) => {
    // const formData = new FormData();
    // formData.append('file', image);
    // formData.append('upload_preset', 'doctor-care'); // Thay thế bằng upload preset của bạn
    // formData.append('cloud_name', 'dnclfqoe8'); // Thay thế bằng cloud_name của bạn nếu cần
    // try {
    //     const response = await axios.post(`https://api.cloudinary.com/v1_1/dnclfqoe8/image/upload`, formData);
    //     return response.data.secure_url; // URL ảnh từ Cloudinary
    //   } catch (error) {
    //     console.error('Error uploading image:', error);
    //   }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'doctor-care'); // Thay thế bằng upload preset của bạn
      formData.append('cloud_name', 'dnclfqoe8'); // Thay thế bằng cloud_name của bạn
      formData.append('resource_type', 'raw'); // Đảm bảo tải file dưới dạng "raw"
  
      try {
          const response = await axios.post('https://api.cloudinary.com/v1_1/dnclfqoe8/raw/upload', formData);
          return response.data.secure_url; // URL của file tài liệu từ Cloudinary
      } catch (error) {
          console.error('Error uploading file:', error);
      }
}
export default uploadImage;