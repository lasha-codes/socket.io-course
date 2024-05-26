/* eslint-disable react/prop-types */
const Input = ({ placeholder, handleInput, name }) => {
  return (
    <div>
      <input
        name={name}
        onChange={handleInput}
        className='h-[2.5rem] pl-[1rem] bg-zinc-700 outline-none border w-[20rem] rounded'
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
