import React from "react";

function ProjectListBody() {
  return (
    <div className="project-list-body">
      <div className="flex flex-wrap justify-start w-auto gap-[32px]">
        <div className="card min-w-[379px] max-w-[400px]">
          <div className="image">
            <img
              src="/src/assets/images/jejakkebahagiaan-1.png"
              alt=""
              className="object-cover w-[347px] h-[259px]"
            />
          </div>
          <div className="content space-y-[12px]">
            <h3 className="title text-blue-dark font-semibold text-xl">Lorem Ipsum</h3>
            <h6 className="description text-sm line-clamp-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae nobis tempore unde architecto distinctio debitis
              itaque, minima fugiat eaque qui earum suscipit cupiditate
              doloremque fugit, expedita incidunt aspernatur inventore commodi.
            </h6>
            <div className="flex flex-nowrap w-full gap-[12px]">
              <button className="border border-blue-dark p-[10px] rounded-lg w-full text-blue-dark">
                Preview
              </button>
              <button className="bg-blue-dark text-white p-[10px] rounded-lg w-full">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}

export default ProjectListBody;
