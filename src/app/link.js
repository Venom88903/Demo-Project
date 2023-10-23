// components/Navigation.js
'use client'
 
import { useRouter } from 'next/navigation'
 
 function Navigation() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/SignUp')}>
      Dashboard
    </button>
  )
}

export default Navigation;
