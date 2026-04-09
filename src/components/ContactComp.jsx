import { useState, useEffect } from "react";

export default function ContactComp() {
    const [status, setStatus] = useState("");
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
    const [captchaInput, setCaptchaInput] = useState("");

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        setCaptcha({ num1, num2 });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (parseInt(captchaInput) !== captcha.num1 + captcha.num2) {
        setStatus("captcha_error");
        generateCaptcha();
        return;
        }

        const form = e.target;
        const data = new FormData(form);

        setStatus("loading");

        try {
            const res = await fetch("https://formspree.io/f/mykbdqok", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });
            // const result = await res.json();
            // console.log(result);
            if (res.ok) {
                setStatus("success");
                form.reset();
                setCaptchaInput("");
                generateCaptcha();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };
    return (
        <div className="mt-10 md:mt-0">
            <form onSubmit={handleSubmit}>
                <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
                <div className="mb-7 grid grid-rows-2">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstName" id="firstName" className="border-b-2 -mt-3 p-3" required/>
                </div>
                <div className="mb-7 grid grid-rows-2">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName" id="lastName" className="border-b-2 -mt-3 p-3" required/>
                </div>
                <div className="mb-7 grid grid-rows-2">
                    <label htmlFor="">Email Address</label>
                    <input type="email" name="email" id="email" className="border-b-2 -mt-3 p-3" required/>
                </div>
                <div className="mb-7 grid grid-rows-2">
                    <label htmlFor="">Message</label>
                    <textarea name="message" id="message" rows="4" className="border-b-2 -mt-10" required></textarea>
                </div>
                <div className="mb-5">
                    <label className="block mb-2">What is {captcha.num1} + {captcha.num2}?</label>
                    <input type="number" className="border-b-2 p-2 w-full" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)}required/>
                </div>
                <button className="bg-[#302f2c] text-[#f2f1ef] duration-150 hover:text-[#302f2c] hover:bg-[#f2f1ef] border text-2xl px-5 py-1" type="submit">Submit</button>
                {status === "loading" && <p className="mt-2">Sending...</p>}
                {status === "success" && <p className="mt-2 text-green-500">Message sent!</p>}
                {status === "error" && <p className="mt-2 text-red-500">Error sending message</p>}
                {status === "captcha_error" && (
                    <p className="mt-2 text-red-500">Captcha salah bro...</p>
                )}
            </form>
        </div>
    )
}