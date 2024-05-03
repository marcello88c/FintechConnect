type PlayProps = {
    className?: string;
};

const Play = ({ className }: PlayProps) => (
    <div
        className={`flex justify-center items-center w-16 h-16 rounded-full bg-color-2 fill-color-1 transition-colors ${
            className || ""
        }`}
    >
        <svg
            className="fill-inherit"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path d="M7.132 18.109V5.891L16.643 12l-9.511 6.109z" />
        </svg>
    </div>
);

export default Play;
