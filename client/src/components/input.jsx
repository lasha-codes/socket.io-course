/* eslint-disable react/prop-types */
const Input = ({ placeholder }) => {
  return (
    <div>
      <input
        className='h-[2.5rem] pl-[1rem] outline-none border w-[20rem] rounded'
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
