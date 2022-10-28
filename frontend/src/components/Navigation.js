import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import userPostsAPI from "../api/userPostsAPI";
import "../App.css";

const Navigation = (props) => {
  const navigate = useNavigate();

  const doLogout = async () => {
    const data = await userPostsAPI.logout();
    if (data) {
      props.setUsername("");
      navigate("/");
    }
  };

  const renderAuthItems = () => {
    if (props.username === "") {
      return (
        <div>
          <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
            <Navbar.Brand className="app-logo" href="/">
              User Posts
            </Navbar.Brand>
          </Navbar>
          <div className="sidebar">
            <CDBSidebar textColor="#333" backgroundColor="#faebd7">
              <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                Navigation
              </CDBSidebarHeader>
              <CDBSidebarContent>
                <CDBSidebarMenu>
                  <NavLink exact to="/login" activeClassName="activeClick">
                    <CDBSidebarMenuItem icon="user">Login</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/signup" activeClassName="activeClick">
                    <CDBSidebarMenuItem icon="user">Signup</CDBSidebarMenuItem>
                  </NavLink>
                </CDBSidebarMenu>
              </CDBSidebarContent>
            </CDBSidebar>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
          <Navbar.Brand className="app-logo" href="/">
            User Posts
          </Navbar.Brand>
        </Navbar>
        <div className="sidebar">
          <CDBSidebar textColor="#333" backgroundColor="#faebd7">
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
              Navigation
            </CDBSidebarHeader>
            <CDBSidebarContent>
              <CDBSidebarMenu>
                <CDBSidebarMenuItem>
                  Welcome {props.username}
                </CDBSidebarMenuItem>
                <NavLink exact to="/" activeClassName="activeClick">
                  <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/posts/add" activeClassName="activeClick">
                  <CDBSidebarMenuItem icon="plus">
                    Add New Post
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  exact
                  to="#"
                  onClick={doLogout}
                  activeClassName="activeClick"
                >
                  <CDBSidebarMenuItem icon="user">Logout</CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
      </div>
    );
  };

  return <div>{renderAuthItems()}</div>;
};

export default Navigation;
