export default function Button({ children }) {
    return (
      <button
          className="px-8 mx-auto py-4 rounded-md border-4
          border-black border-solid shadow duration-200">
          <p className="font-semibold">{children}</p>
      </button>
    )
  }
  