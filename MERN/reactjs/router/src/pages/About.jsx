import React from 'react';
import NavBar from '../components/NavBar';

const About = () => {
    return (
        <>

            {/* About Section */}
            <section className="container mx-auto my-16 p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-8">About Us</h2>
                <p className="mb-4">
                    YourEdTech is on a mission to revolutionize education by providing
                    innovative and personalized learning experiences for students around
                    the globe.
                </p>
                <p className="mb-4">
                    Our platform is designed to empower students, educators, and
                    institutions by leveraging technology to create engaging and
                    interactive learning environments.
                </p>
                <p>
                    Join us in shaping the future of education. Together, we can inspire
                    and enable the next generation of learners.
                </p>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-500 text-white py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Join Our Learning Community</h2>
                <p className="text-lg mb-8">
                    Explore our courses and start your educational journey with
                    YourEdTech.
                </p>
                <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold text-lg hover:bg-gray-200">
                    Explore Courses
                </button>
            </section>

        </>
    );
};

export default About;
