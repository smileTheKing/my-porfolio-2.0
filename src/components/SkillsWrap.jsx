/* eslint-disable react/prop-types */
export const Skill = ({children,name}) => {
  return (
   <div className="wrapper">
        <div className="toolkit flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-orange-500">{name}</h1>
            <div className="flex flex-wrap gap-4">
            {children}
            </div>
        </div>
   </div>
  )
}
