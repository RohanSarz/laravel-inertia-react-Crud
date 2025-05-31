import React, { Children } from "react";

export default function ({ children }) {
    return (
        <div>
            <header>
                <nav className="bg-blue-600 mt-2 mx-2 p-2 flex justify-around space-x-4">
                    <a
                        className=" text-white font-bold hover:underline hover:underline-offset-4"
                        href="/"
                    >
                        Home
                    </a>
                    <a
                        className="text-white font-bold hover:underline hover:underline-offset-4"
                        href="/create"
                    >
                        Create
                    </a>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
}
