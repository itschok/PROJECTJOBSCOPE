import React from "react";
function InfoOne(){
    return(
        <div className="container mx-auto flex text-center py-16">
            <div className="w-1/2">
                <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="" 
                className="w-full h-auto"/>
            </div>
            <div className="w-1/2 px-6">
                <h2 className="text-3xl font-semibold">Welcome to Our Website</h2>
                <p className="text-gray-600 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui error voluptate, animi totam, optio ex consequuntur impedit culpa harum autem quaerat, quibusdam asperiores dolore sint facilis ut doloribus pariatur eum.</p>
                </div>
        </div>
    )
}
export default InfoOne