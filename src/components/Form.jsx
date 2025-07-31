import React from 'react'

const form = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full space-y-8 bg-white rounded-xl shadow-2xl p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Image Section */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative group">
                            <img
                                src="https://t4.ftcdn.net/jpg/03/21/43/07/360_F_321430761_qQi0CU9tzI5w1k1vJgdA02LMtXtsXvJE.jpg"
                                alt="Form illustration"
                                className="w-80 h-80 object-cover rounded-full shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:rotate-2"
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:w-1/2 w-full">
                        <div className="text-center lg:text-left mb-6">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Request the Demo</h2>
                            <p className="text-gray-600">Please Request Demo</p>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="name"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                                    placeholder="First and Last Name"
                                    required
                                />
                            </div>
                            <div>

                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                                    placeholder="name@example.com"
                                    required
                                />
                            </div> 
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Country
                                </label>
                                <input
                                    type="country"
                                    id="country"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                                    placeholder="Country like India , China"
                                    required
                                />
                            </div>    
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="phone"
                                    id="phone"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                                    placeholder="+91 89945882347"
                                    required
                                />
                            </div>  

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Request Demo 
                            </button>
                        </form>

                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default form