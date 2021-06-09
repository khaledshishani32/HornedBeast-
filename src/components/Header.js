import React from "react";
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
    render() {
        return (
           
            <div>
                <Nav className="justify-content-center"
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                  bg="red">


                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                        Gallery Of Horns
                  </Nav.Link>
                    </Nav.Item>
                </Nav>


                
            </div>

        )
    }
}

export default Header;