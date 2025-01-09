import { MailOpen } from "lucide-react"
import { Link } from "react-router-dom"



export default function CustomButton({ titile }) {
  return (
    <Link to="/register?role=DOCTOR" className="px-4 py-2 bg-blue-500 text-white rounded flex gap-2 hover:bg-blue-800">
      <MailOpen /> {titile}
    </Link>
  )
}
