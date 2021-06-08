import React from "react";
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
    render() {
        return (
            // <div>
            //     <header>
            //         <h1>Gallery Of Horns</h1>
            //     </header>
            // </div>

            <div>
                <Nav className="justify-content-center"
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >


                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                  </Nav.Link>
                    </Nav.Item>
                </Nav>


                
            </div>

        )
    }
}

export default Header;