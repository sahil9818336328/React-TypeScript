import { PropsWithChildren } from 'react'

// type ComponentProps = { name: string; id: number; children?: React.ReactNode }
type ComponentProps = PropsWithChildren<{ name: string; id: number }>

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Props</h2>
      <h1>{name}</h1>
      {children}
      <h1>{id}</h1>
    </div>
  )
}
export default Component
