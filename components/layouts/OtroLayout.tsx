import { ReactNode } from "react";
 
type Props = {
  children: ReactNode
}

export const OtroLayout = ({children} : Props) => {
  return (
    <div style={{
        backgroundColor: 'rgba(255,0,0,1)',
        borderRadius: '5px',
        padding: '10px'
    }}>
        <h1>Otro Layout</h1>
        <div>{children}</div>
    </div>
  )
}
