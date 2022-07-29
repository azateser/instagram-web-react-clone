import {useState, useEffect, useRef} from 'react';

export default function Input({lable,type = 'text', ...props}){

  const inputRef = useRef()
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
   if(show){
    setInputType('text')
    inputRef.current.focus()
   }else if(type === 'password'){
    setInputType('password')
    inputRef.current.focus()
   }
  }, [show]);

  return(
      <label className='relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400'>
        <input ref={inputRef} required={true} type={inputType} className=' w-full text-xs outline-none px-2 h-[38px] valid:pt-[10px] peer' {...props} />
        <small className='absolute top-1/2 left-[9px] -translate-y-1/2 cursor-text pointer-events-none text-xs text-gray-400 transition-all peer-valid:text-[10px] peer-valid:top-2.5'>{lable}</small>
        {type === 'password' && props?.value && (
          <button type="button" onClick={() => setShow(show => !show)} className='h-full flex items-center text-sm font-semibold pr-2'>
            {show ? 'Hide' : 'Show'}
          </button>
        )}
      </label>
  )

}