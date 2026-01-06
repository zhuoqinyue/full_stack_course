import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

const User = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>
            Welcome &nbsp;
            {
              JSON.parse(localStorage.getItem('MINECRAFT_USER') || '{}')
                ?.username
            }
          </CardTitle>
          <CardDescription>Where would you like to go next?</CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            <li className="mb-2">
              <Link to="/">
                <a className="text-blue-500 hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/notes">
                <a className="text-blue-500 hover:underline">Notes</a>
              </Link>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          Have a nice day!
        </CardFooter>
      </Card>
    </div>
  )
}

export default User
