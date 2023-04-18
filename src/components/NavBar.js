function NavBar(props){
    return (
        <div>
            <h1>{props.navHead}</h1>
            <ul>
                <li>
                    <a href="home">Home</a>
                </li>
                <li>
                    <a href="contact">Contact</a>
                </li>
                <li>
                    {props.textNav}
                </li>
                <li>
                    {!props.navChange ? "Adadeh" : props.navChange}
                </li>
            </ul>
        </div>
    );
}

export default NavBar;