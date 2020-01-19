import React from 'react';
import HeaderGuestHomeComponent from './header-guest-home-component/header-guest-home-component';
import MedicalProceduresListGuestHomeComponent from './medical-procedures-list-guest-home-component/medical-procedures-list-guest-home-component';
import SearchBarGuestHomeComponent from './search-bar-guest-home-component/search-bar-guest-home-component';
import ClinicsListGuestHomeComponent from './clinics-list-guest-home-component/clinics-list-guest-home-component';

import './guest-home-component.css'

export default class GuestHomeComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container-sm guest-home-component">
                <HeaderGuestHomeComponent/>
                <SearchBarGuestHomeComponent/>
                <MedicalProceduresListGuestHomeComponent/>
                <ClinicsListGuestHomeComponent/>
            </div>
        );
    }
}
