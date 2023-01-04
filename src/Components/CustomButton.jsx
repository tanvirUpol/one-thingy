const CustomButton = ({text,handleCompletedThing}) => {
    return ( 
        <>
            <button 
            className="check-btn" 
            onClick={handleCompletedThing}
            >
                <span className="pointer-event-none">{text}
                </span>
                <svg className="check-mark pointer-event-none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path className="check-mark"  d="M12.5 2.2a10.3 10.3 0 1 0 10.3 10.3A10.299 10.299 0 0 0 12.5 2.2zm-1.998 15.077l-3.79-3.585.92-.918 2.865 2.676 7.027-6.874.92.92z"/><path fill="none" d="M0 0h24v24H0z"/>
                </svg>
            </button>
        </>
     );
}
 
export default CustomButton;