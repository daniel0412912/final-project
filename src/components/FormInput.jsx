export default function FormInput({ title, placeholder, type }) {
  return (
    <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-semibold">{title}</label>
        <input 
            type={type} 
            id={title} 
            name={title} 
            className="w-full p-2 mt-1 border rounded-md" 
            placeholder={placeholder} 
            required
        />
    </div>
  )
}
