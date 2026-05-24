import ThemeToggle from '#/components/ThemeToggle.tsx';
// import { Switch } from '#/components/ui/switch'
import { authClient } from '#/lib/auth-client.ts';
import { getSession } from '#/lib/auth.functions.ts';
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ 
  beforeLoad:async({location})=>{
    const session = await getSession()

    if(!session){
      throw redirect({
        to:"/login",
        search:{redirect:location.href}
      })
    }

    return {user:session.user}
  },
  component: Home 
})

function Home() {
  // const {data} = authClient.useSession();
  // console.log(data);
  
  return (
    <main className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx=auto">
          <h1>Hello</h1>
      </div>
    </main>
  )
}
