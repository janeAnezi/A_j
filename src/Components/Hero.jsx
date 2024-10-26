import { RiScrollToBottomLine } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="hero ">
        <div className="wrapper">
            <div className="textContainer">
                <h2>Anezi Jane</h2>
                <h1>Frontend Engineer and Instructor</h1>
                <div className="buttons">
                    <button>See the Latest Works</button>
                    <button>Contact Me</button>
                </div>
                <RiScrollToBottomLine className="scroll"/>
            </div>
        </div>
        
        <div className="imageContainer">
            <img src="/public/images/heroImg.png" alt="my profile image" />
        </div>
    </div>
  )
}
