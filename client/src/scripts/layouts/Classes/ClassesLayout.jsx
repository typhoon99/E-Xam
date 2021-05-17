import React from "react";
import ClassCard from "../../components/Classes/ClassCard";
import EmptyState from "../../components/EmptyState";
import NoClasses from "../../../assets/img/Classes/no-classes.svg";

function ClassesLayout({ classList }) {
  if (typeof classList !== "undefined" && classList.length > 0) {
    return (
      <div className="container mt-4 mb-4">
        <div className="row">
          {classList.map((card) => (
            <ClassCard
              name={card.name}
              teacher={card.teacher}
              key={card.id}
              id={card.id}
              role={card.role}
              url={card.url}
              profileImage={card.profileImg}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <EmptyState
        image={NoClasses}
        title="Don't see your Classes?"
        subtitle="Try contacting your Professor."
        offset="2"
      ></EmptyState>
    );
  }
}

export default ClassesLayout;
