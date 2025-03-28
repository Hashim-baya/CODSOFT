import React from 'react'

function Button({  Message, buttonVariant, onClick }) {

  const variant = {
    primary: 'bg-[#FF8660] text-white hover:bg-[#FF8660]/80',
    secondary: 'bg-[#9A33FF] text-white hover:bg-[#9A33FF]/80',
  }

  const buttonStyle = buttonVariant === 'Primary' ? variant.primary :  variant.secondary 

  return (
    <section>
        <button 
          onClick={onClick} 
          className={`${buttonStyle} rounded-md py-2 px-4 hover:cursor-pointer w-[100%]`}
        >
                {Message}
        </button>
    </section>
  )
}

export default Button