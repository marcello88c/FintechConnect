import { useState } from "react";
import Image from "@/components/Image";
import Field from "@/components/Field";

type FormProps = {};

const Form = ({}: FormProps) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return (
        <div className="section">
            <div className="relative">
                <div className="container">
                    <div className="relative z-2 max-w-[60vw] pr-20 lg:max-w-full lg:pr-0">
                        <form
                            className="max-w-[39.5rem] lg:max-w-full"
                            action=""
                            onSubmit={() => console.log("Submit")}
                        >
                            <Field
                                className="mb-10 md:mb-8"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e: any) => setName(e.target.value)}
                                required
                            />
                            <Field
                                className="mb-10 md:mb-8"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                                required
                            />
                            <Field
                                className="mb-10 md:mb-8"
                                placeholder="Company Name"
                                value={company}
                                onChange={(e: any) =>
                                    setCompany(e.target.value)
                                }
                                required
                            />
                            <Field
                                className="mb-10 md:mb-8"
                                placeholder="Phone Number"
                                type="tel"
                                value={phone}
                                onChange={(e: any) => setPhone(e.target.value)}
                                required
                            />
                            <Field
                                className="mb-10 md:mb-8"
                                placeholder="Number"
                                type="tel"
                                value={number}
                                onChange={(e: any) => setNumber(e.target.value)}
                                required
                            />
                            <Field
                                className="mb-30 xl:mb-20 lg:mb-12 md:mb-10"
                                placeholder="Tell us a little about your business and what you’re to do next"
                                value={message}
                                onChange={(e: any) =>
                                    setMessage(e.target.value)
                                }
                                required
                                textarea
                            />
                            <button
                                className="btn text-lg tracking-[0.25em]"
                                type="submit"
                            >
                                GET IN TOUCH
                            </button>
                        </form>
                    </div>
                    <div className="absolute top-0 right-0 bottom-0 w-[37vw] max-h-[50rem] lg:h-[40rem] lg:relative lg:inset-auto lg:w-auto lg:mt-18 md:h-[30.75rem]">
                        <Image
                            className="object-cover"
                            src="/images/image-9.jpg"
                            sizes="(max-width: 768px) 100vw, 36vw"
                            fill
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
