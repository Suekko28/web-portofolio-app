import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { getContentExperience } from "../../../utils/DataHome";
import ExperienceBody from "./ExperienceBody"; // Import ExperienceBody

function ExperienceItem() {
  return (
    <div className="experience-item">
      <VerticalTimeline>
        {getContentExperience().map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            date={experience.date}
            contentArrowStyle={{ borderRight: "7px solid #006fa6" }}
            contentStyle={{
              borderTop: "4px solid #006fa6",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(8px)",
              borderRadius: "10px",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
              padding: "20px",
            }}
            icon={
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={experience.imageURL}
                  alt={experience.title}
                  className="w-[80%] h-[80%] object-contain rounded-full p-1"
                />
              </div>
            }
            iconStyle={{
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "70px",
              height: "70px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <ExperienceBody
              title={experience.title}
              description={experience.description}
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceItem;
