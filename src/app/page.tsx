import CanvaWhiteboard from './components/whiteboard/canvaWhiteboard'
import Chat from './components/chatIA/chat'
import Options from './components/options/options'

export default function Home() {
    return (
        <>
            <CanvaWhiteboard/>
            <Chat/>
            <Options/>
        </>
    )
}