

const CustomForm = ({thing,handleSubmit,setThing}) => {
    return ( 
        <>
        <h1>What is your "One Thing?"</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            maxLength='64' 
            placeholder='Enter One Thing' 
            value={thing}
            onInput={(e)=> setThing(e.target.value)}
            autoFocus />
          <button >
             { <svg className='arrow-icon' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">

              <g fill="#000000">

              <path className='arrow-icon' d="M8.245 4.695a.75.75 0 00-.05 1.06l1.36 1.495H4.75a.75.75 0 000 1.5h4.805l-1.36 1.495a.75.75 0 001.11 1.01l2.5-2.75a.75.75 0 000-1.01l-2.5-2.75a.75.75 0 00-1.06-.05z"/>

              <path className='arrow-icon' fillRule="evenodd" d="M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" clipRule="evenodd"/>

              </g>

              </svg>}
          </button>
        </form>
        </>
     );
}
 
export default CustomForm;