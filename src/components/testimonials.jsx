import React,{useState} from "react";
import Testimonial from "./testimonial";
import {changeActiveElements} from "../carousel";
import Next from "../assets/svgs/next.svg";
import Prev from "../assets/svgs/prev.svg";


const testimonialContent = [
    {
        name : 'name 1',
        comment : "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit sed venenatis. Praesent condimentum vulputate posuere. Etiam sed accumsan ex. Fusce semper"
    },
    {
        name : 'name 2',
        comment : "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit sed venenatis. Praesent condimentum vulputate posuere. Etiam sed accumsan ex. Fusce semper"
    },
    {
        name : 'name 3',
        comment : "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit sed venenatis. Praesent condimentum vulputate posuere. Etiam sed accumsan ex. Fusce semper"
    },
    {
        name : 'name 4',
        comment : "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit sed venenatis. Praesent condimentum vulputate posuere. Etiam sed accumsan ex. Fusce semper"
    },
    {
        name : 'name 5',
        comment : "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit sed venenatis. Praesent condimentum vulputate posuere. Etiam sed accumsan ex. Fusce semper"
    },
    {
        name : 'name 6',
        comment : "Duis nec metus nec justo sodales consequat. Duis faucibus bibendum velit sed venenatis. Praesent condimentum vulputate posuere. Etiam sed accumsan ex. Fusce semper"
    },
]

const Testimonials = (props) => {
    const [activeTestimonialsIndex,setActiveTestimonialsIndex] = useState([0,1]);
    const [activeTestimonials,setActiveTestimonials] = useState([...testimonialContent.slice(0,2)]);
    const changeActiveTestimonials = (activeTestimonialsIndexArray,next) => {
        changeActiveElements(testimonialContent,activeTestimonialsIndexArray,next,(x,y) =>{setActiveTestimonialsIndex(x); setActiveTestimonials(y)});
    }
    
    const startCaousel = () => {
        setInterval(()=>{
            console.log('csatr');
            // changeActiveTestimonials(activeTestimonialsIndex,true);
        },1000)
    }

    return (
        <div className="flex flex-col w-full py-8">
            <h2 className="font-heading self-center font-bold xl:mt-8">Praise for Us</h2>
            <p className="font-heading self-center font-bold xl:mt-8 transform xl:-translate-y-8">Here's what some of our clients are saying.</p>
            <div className="mt-16 grid md:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-6 md:gap-4 gap-2 self-center">
            {
                activeTestimonials.map((testimonial,index) => (
                  <Testimonial key={index} name={testimonial.name} comment={testimonial.comment} />  
                ))
            }
            </div>
            <div className="self-center mt-16">
                <button onClick={()=>changeActiveTestimonials(activeTestimonialsIndex,false)} className="border lg:m-2 m-1 border-orange-mid rounded-full lg:p-2 p-1 animation-scale">
                <img className="h-4" src={Prev} alt="" />
                </button>
                <button onClick={()=>changeActiveTestimonials(activeTestimonialsIndex,true)} className="border lg:m-2 m-1 border-orange-mid rounded-full lg:p-2 p-1 animation-scale">
                <img className="h-4" src={Next} alt="" />
                </button>
            </div>
        </div>
        
    );
}

export default Testimonials;