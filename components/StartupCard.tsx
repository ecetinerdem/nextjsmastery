import React from "react";

const StartupCard = ({ post }: { post: StartupCard }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{post._createdAt.toDateString()}</p>
      </div>
    </li>
  );
};

export default StartupCard;
