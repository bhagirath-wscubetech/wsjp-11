import React from 'react';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-blue-500 text-white h-screen flex flex-col justify-center items-center">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Empower Your Learning Journey
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Personalized learning experiences for every student.
                    </p>
                    <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold text-lg hover:bg-gray-200">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto my-16">
                <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Interactive Courses</h3>
                        <p>
                            Engaging and interactive courses to make learning enjoyable for
                            students.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Personalized Learning</h3>
                        <p>
                            Tailored learning paths based on individual student strengths and
                            weaknesses.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Real-time Progress</h3>
                        <p>
                            Monitor and track progress in real-time, helping both students and
                            teachers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-500 text-white py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h2>
                <p className="text-lg mb-8">
                    Join thousands of students who are already benefiting from our
                    platform.
                </p>
                <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold text-lg hover:bg-gray-200">
                    Get Started
                </button>
            </section>

            {/* Footer */}
           
        </>
    );
};

export default Home;
