import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";

const HeaderBreadcrumb = ({ title }) => {
  return (
    <div className="mybreadcrumb section container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{title}</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default HeaderBreadcrumb;
