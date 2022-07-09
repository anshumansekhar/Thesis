import Register from './application/src/components/Register';
import LoginScreen from './application/src/components/LoginScreen';
import YoutubeVideoPlay from './application/src/components/YoutubeVideoPlay';
import Logout from './application/src/components/Logout';
function App() {
    const [userRegistered, setuserRegistered] = useState(false);
    const [sg, setsg] = useState(fdg);
    const [sd, setsd] = useState(fg);
    const [loggedIn, setloggedIn] = useState(false);
    return (
        <div>

            {sg && <Register post={setuserRegistered} pre={sg} />}
            {userRegistered && <LoginScreen post={setloggedIn} pre={userRegistered} />}
            {loggedIn && <YoutubeVideoPlay post={setsd} pre={loggedIn} />}
            {loggedIn && <Logout post={setloggedIn} pre={loggedIn} />}
        </div>)
}
export default App;