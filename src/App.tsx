import Component from './starter/02-props'

function App() {
  return (
    <main>
      <Component name='sahil' id={1}>
        <h1>Children content</h1>
      </Component>
      <Component name='sahil' id={1} />
    </main>
  )
}

export default App
