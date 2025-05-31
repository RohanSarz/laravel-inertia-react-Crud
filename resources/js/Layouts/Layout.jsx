import { Link } from "@inertiajs/react";
import React, { Children } from "react";

export default function ({ children }) {
    return (
        <div>
            <header>
                <nav>
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                    <Link className="nav-link" href="/create">
                        Create
                    </Link>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
}
