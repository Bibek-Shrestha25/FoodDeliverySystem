import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <img
              className="mx-auto w-3/4 rounded-lg shadow-md"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5k7HWq90Sg4ED7tTSqBvfikmIjVXS86DOPA&s"
              alt="About Us"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ac lacinia odio. Aliquam erat volutpat. Suspendisse potenti. Donec
              aliquet sodales justo vitae consectetur. Cras quis vestibulum
              eros. Nulla facilisi. Pellentesque sit amet libero vitae felis
              dictum vehicula. Nulla et imperdiet urna, nec elementum dui.
            </p>
            <p className="text-gray-700 mb-6">
              Sed nec enim eu mi rhoncus vehicula. Curabitur consectetur
              fringilla ante, vel gravida risus varius nec. Etiam id semper
              dolor. Curabitur auctor ex et ex tempor, ac lacinia dui cursus.
            </p>
            <p className="text-gray-700">
              Fusce non mauris at orci convallis dictum nec at orci. Nulla
              tristique faucibus sem a laoreet. Ut dapibus justo vel velit
              maximus, et auctor libero condimentum. Duis nec mauris ut magna
              ultricies volutpat. Nulla facilisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
