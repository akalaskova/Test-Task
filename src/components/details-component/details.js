import React, {Component} from 'react';
import {Link} from 'react-router';

import './details.css';

class Details extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="details-block">
                <div className="details-person-info">
                    <div className="details-avatar-and-text-block">
                        <div className="details-avatar"></div>
                        <div className="details-avatar-text-block">
                            <span className="details-avatar-text">Age <p className="details-avatar-bold-text">22</p></span>
                            <span className="details-avatar-text">Gender <p className="details-avatar-bold-text">M</p></span>
                        </div>
                    </div>

                    <div className="details-info-block">
                        <h2 className="details-info-name">First Last {this.props.selectedItem}</h2>
                        <div className="details-info-text-block">
                            <p className="details-info-text details-info-text-small"><span className="details-info-phone-icon"></span>123-456-7890</p>
                            <p className="details-info-text details-info-text-small"><span className="details-info-mail-icon"></span>anyone@anywebaddress.com</p>
                            <p className="details-info-text"><span className="details-info-calendar-icon"></span>08-30-1979</p>
                            <p className="details-info-text"><span className="details-info-location-icon"></span>Location</p>
                        </div>
                    </div>
                </div>

                <div className="details-tabs-block">
                    <Link className="details-tab" activeClassName="details-active-tab" to="">Overview</Link>
                    <Link className="details-tab">Data</Link>
                    <Link className="details-tab">Messages</Link>
                    <Link className="details-tab">Notes</Link>
                </div>

                <div className="details-all-info-block">
                    <div className="details-condition-block">
                        <h3>Condition</h3>
                        <h1>Asthma</h1>
                    </div>

                    <div className="details-personal-details-block">
                        <h3>Details</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Details;
