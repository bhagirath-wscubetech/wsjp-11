import React from 'react';
import NavBar from '../components/NavBar';

const Courses = () => {
    return (
        <>

            {/* Courses Section */}
            <section className="container mx-auto my-16">
                <h2 className="text-3xl font-bold mb-8">Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Course 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Course Title 1</h3>
                        <p>Description of Course 1.</p>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-700">
                            Enroll Now
                        </button>
                    </div>

                    {/* Course 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Course Title 2</h3>
                        <p>Description of Course 2.</p>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-700">
                            Enroll Now
                        </button>
                    </div>

                    {/* Course 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Course Title 3</h3>
                        <p>Description of Course 3.</p>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-700">
                            Enroll Now
                        </button>
                    </div>
                    {/* Add more courses as needed */}
                </div>
            </section>
        </>
    );
};

export default Courses;
