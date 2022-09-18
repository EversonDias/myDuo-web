interface LabelInputProps {
    id: string;
    type: string;
    text: string;
    placeholder: string;
}

export default function LabelInput(props: LabelInputProps) {
    return (
        <div className="flex flex-col gap-2 mt-4">
            <label
                className="font-semibold"
                htmlFor={props.id}>
                {props.text}
            </label>
            <input
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 "
                id={props.id}
                name={props.id}
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    )
}