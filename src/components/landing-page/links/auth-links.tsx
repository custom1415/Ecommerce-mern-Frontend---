
type Props = {}

const AuthLinks = (props: Props) => {
  return (
    <div className="space-y-6 border-t border-gray-200 py-6 px-4">
      <div className="flow-root">
        <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
          Sign in
        </a>
      </div>
      <div className="flow-root">
        <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
          Create account
        </a>
      </div>
    </div>
  )
}

export default AuthLinks
