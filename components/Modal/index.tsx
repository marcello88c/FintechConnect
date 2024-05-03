import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

type ModalProps = {
    className?: string;
    classWrap?: string;
    classButtonClose?: string;
    visible: boolean;
    onClose: () => void;
    initialFocus?: any;
    children: React.ReactNode;
    video?: boolean;
};

const Modal = ({
    className,
    classWrap,
    classButtonClose,
    visible,
    onClose,
    initialFocus,
    children,
    video,
}: ModalProps) => {
    return (
        <Transition show={visible} as={Fragment}>
            <Dialog
                initialFocus={initialFocus}
                className={`fixed inset-0 z-50 flex p-6 overflow-auto scroll-smooth md:px-4 ${className}`}
                onClose={onClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="fixed inset-0 bg-color-1/90"
                        aria-hidden="true"
                    />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel
                        className={twMerge(
                            `relative z-10 max-w-[48rem] w-full m-auto bg-color-2 shadow-2xl ${
                                video
                                    ? "max-w-[64rem] aspect-video bg-color-1 overflow-hidden"
                                    : ""
                            }  ${classWrap}`
                        )}
                    >
                        {children}
                        <button
                            className={twMerge(
                                `absolute flex justify-center items-center w-10 h-10 bg-color-2 fill-color-1 transition-colors outline-none hover:bg-color-4 hover:fill-color-2 ${
                                    video ? "top-0 right-0" : "top-3 right-3"
                                } ${classButtonClose}`
                            )}
                            onClick={onClose}
                        >
                            <svg
                                className="fill-inherit"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                            >
                                <path d="M5.613 4.21l.094.083L10 8.585l4.293-4.292a1 1 0 0 1 1.497 1.32l-.083.094L11.415 10l4.292 4.293a1 1 0 0 1-1.32 1.497l-.094-.083L10 11.415l-4.293 4.292a1 1 0 0 1-1.497-1.32l.083-.094L8.585 10 4.293 5.707a1 1 0 0 1 1.32-1.497z" />
                            </svg>
                        </button>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};

export default Modal;
