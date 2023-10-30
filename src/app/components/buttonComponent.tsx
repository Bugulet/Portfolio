interface ButtonComponentProps {
    content: string;
    isActive:boolean;

}

export default function ButtonComponent(props: ButtonComponentProps) {
    return <>
        <button className={`rounded-tr-xl rounded-bl-xl rounded-sm ring-2 min-w-20 m-2 mb-5  ${props.isActive? "ring-blue-400" : 'ring-gray-600'}`}>{props.content}</button>
    </>
}