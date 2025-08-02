interface Props{
  children: React.ReactNode;
  label: string;
}

export const LabeledForm = (props: Props) => {

  return (
    <div className="labeledForm w-full flex flex-col items-center justify-center">
      <label className="w-[90%] text-start text-xs font-medium text-gray-600 mb-1">{props.label}</label>
      {props.children}
    </div>

  )
}