import { Children } from "react";

export default function AboutLayout({children}: {
    children: React.ReactNode
}){
    return (
        <html>
            <body>
                <h1>Navbar</h1>
                {children}
            </body>
        </html>
    )
}