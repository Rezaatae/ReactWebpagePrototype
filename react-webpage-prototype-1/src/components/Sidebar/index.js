import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenue,
SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';


const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenue>
                    <SidebarLink to="home">
                        Home
                    </SidebarLink>
                    <SidebarLink to="section1">
                        Section 1
                    </SidebarLink>
                    <SidebarLink to="section2">
                        Section 2
                    </SidebarLink>
                    <SidebarLink to="signup">
                        Sign Up
                    </SidebarLink>
                </SidebarMenue>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;

