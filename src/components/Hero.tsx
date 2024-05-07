import gordon from "../assets/gordon.jpg";

const Hero = () => {
    return(
        <div>
            <img src = {gordon} className = "w-full max-h-[600px] object-cover"/>
        </div>
    );
}

export default Hero;