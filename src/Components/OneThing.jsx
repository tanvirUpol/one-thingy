import CustomButton from "./CustomButton";

const OneThing = ({thing,handleCompletedThing}) => {
    return ( 
        <>
        <h1>{thing}</h1>
        <CustomButton
            text="Mark Done"
            handleCompletedThing={handleCompletedThing}
        ></CustomButton>
        </>
     );
}
 
export default OneThing;