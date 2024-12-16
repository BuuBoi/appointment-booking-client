import { MailOpen } from "lucide-react"



export default function CustomButton({ titile }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded flex gap-2 hover:bg-blue-800">
      <MailOpen /> {titile}
    </button>
  )
}
