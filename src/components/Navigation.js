import React, {Component} from 'react';

const items = ['Home', 'About me', 'Star wars', 'Contact'];

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items,
            selectedIndex: 0
        }
    }

    render() {
        return (
            <nav className="fixed-top ml-4 mt-2">
                <ul className="nav">
                    {this.state.items.map(item => (
                        <li className="nav-item btn btn-danger mx-1">{item}</li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Navigation;