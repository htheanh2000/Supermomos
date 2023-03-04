import Header from "@/app/components/header"
import { Children } from "react"

interface IPage {
    children: React.ReactNode
}

const Page = ({children}: IPage) => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            {children}
            {/* Footer should be here if you want to */}
        </div>
    )
}

export default Page