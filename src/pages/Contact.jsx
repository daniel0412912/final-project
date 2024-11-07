import FormInput from "../components/FormInput"
import Button from "../components/Button"

export default function Contact() {

  function handleSubmit() {
    alert("Form submitted")
  }

  return (
    <div className='min-h-screen px-20'>
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-8 px-4 text-center rounded-md mb-8">
        <h1 className="text-3xl font-semibold">Let’s Connect!</h1>
        <p className="text-lg mt-2">I’m excited to work together. Drop a message below!</p>
      </div>
      <form 
        onSubmit={handleSubmit}
        className="border rounded-md shadow-md p-8"
      >
        <FormInput 
          title="Name"
          placeholder="Enter your name"
          type="text"
        />
        <FormInput 
          title="Email"
          placeholder="Example@email.com"
          type="email"
        />
        <div className="mb-4">
          <label 
            htmlFor="message"
            className="font-semibold block mb-2 text-md text-gray-900"
          >
            Message
          </label>
          <textarea 
            name="message" 
            id="message"
            className="w-full p-2 mt-1 border rounded-md"
            rows="4"
            placeholder="Enter message here"
            required
          >
          </textarea>
        </div>
        <div className="flex items-center">
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  )
}
