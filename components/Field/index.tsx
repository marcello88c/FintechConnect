type FieldProps = {
    className?: string;
    textarea?: boolean;
    type?: string;
    value: string;
    onChange: any;
    placeholder?: string;
    required?: boolean;
};

const Field = ({
    className,
    textarea,
    type,
    value,
    onChange,
    placeholder,
    required,
}: FieldProps) => (
    <div className={className || ""}>
        <div className="">
            {textarea ? (
                <textarea
                    className="w-full h-[18.875rem] px-8 py-4 border border-color-7 bg-transparent text-xl tracking-[0.015em] text-color-2 transition-colors placeholder:text-color-7 focus:border-color-4 outline-none resize-none md:h-52 md:px-6 md:text-sm"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                ></textarea>
            ) : (
                <input
                    className="w-full h-[3.875rem] px-8 border border-color-7 bg-transparent text-xl tracking-[0.015em] text-color-2 transition-colors placeholder:text-color-7 focus:border-color-4 outline-none md:h-13 md:px-6 md:text-sm"
                    type={type || "text"}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                />
            )}
        </div>
    </div>
);

export default Field;
