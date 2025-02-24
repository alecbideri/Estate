import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () =>{

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", '50135f3c-df4f-4bde-9816-6337b37f524a' );

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success('Form submitted successfully!');
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult('');
        }
    };

    return (
       <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
           <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='font-light underline underline-offset-4 decoration-1 under'>With Us</span></h1>
           <p className=' text-gray-500 max-w-80 text-center mb-8 mx-auto'>Ready to Make a Move? Let’s Build Your Future Together</p>
           <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
               <div className='flex flex-wrap items-center justify-between'>
                   <div className='w-full md:w-1/2 text-left'>
                        Your Name
                       <input type="text" className='w-full border border-gray-300 rounded px-4 py-3 mt-2' name='name' placeholder='Your Name' required/>
                   </div>
                   <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                       <input type="Email" className='w-full border border-gray-300 rounded px-4 py-3 mt-2' name='Email' placeholder='Your Email' required/>
                   </div>
               </div>
             <div className='my-6 text-left'>
                 Message
                 <textarea className='w-full border border-gray-300 rounded px-4 py-3 mt-2 h-48 resize-none' name='Message' required placeholder='Message'></textarea>
             </div>
               <button className='bg-blue-600 text-white px-15 py-2 rounded mb-10'>{result ? result : 'send message'}</button>
           </form>
       </div>
    )
}

export default Contact