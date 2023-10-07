import { useState } from 'react';

function Header({ title }) {
    // Parameter bernama title
    return(
    <div>
        <h1>Develop. Preview. Ngeong. 🐈‍⬛ {title ? title : 'Contoh parameter'}</h1>
        <Menu />
    </div>
    )
}

function Footer() {
    return(
        <div>
            <p>&copy; Ini punya Widaad Albar Maula. RPL. 1201200022</p>
        </div>
    )
}

function Menu() {
    return(
        <div>
            <ul>
                <li>
                    <a href='?'>Home</a>
                </li>
                <li>
                <a href='?'>About</a>
                </li>
            </ul>
        </div>
        
    )
}

function Content(){
    const names = ['Widaad', 'Rizki', 'Made'];
    const [likes, setLikes] = useState(0);

    return(
        <div>
            <ul>{names.map((name) => (
                <li key={name}>{name}</li>))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    )
    function handleClick() {
        setLikes(likes + 1);
      }
}

export default function HomePage() {
  return (
    <div>
        {}
        <Header />
        <Content />
        <Footer />
    </div>
  )
}