function NavBar(props){
    return (
        <div>
            <h1>{props.navHead}</h1>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">{props.textNav}</a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;