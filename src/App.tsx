import BogoSelector from './components/BogoSelector'
import './App.css'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      background: '#f5f5f5',
      padding: '20px'
    }}>
      <BogoSelector />
    </div>
  )
}

export default App
